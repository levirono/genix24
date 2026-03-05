import { getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method === 'GET') {
    const authHeader = event.req.headers.authorization;
    if (!authHeader) {
      return { error: 'Unauthorized' };
    }

    const token = authHeader.replace('Bearer ', '');
    const supabase = getSupabase();
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return { error: 'Unauthorized' };
    }

    const { data: userRecord, error: userError } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (userError || userRecord?.role !== 'admin') {
      return { error: 'Forbidden' };
    }

    try {
      const { data, error } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
      if (error) return { error: error.message };
      return { messages: data };
    } catch (error) {
      handleDatabaseError(error);
    }
  }
  return { error: 'Method not allowed' };
});
