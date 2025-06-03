import { supabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method === 'GET') {
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
