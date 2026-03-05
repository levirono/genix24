import { getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'GET') {
    return { error: 'Method not allowed' };
  }

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

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) return { error: error.message };
    return data;
  } catch (error) {
    handleDatabaseError(error);
  }
});