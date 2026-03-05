import { getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method === 'GET') {
    try {
      const supabase = getSupabase();
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (error) return { error: error.message };
      return { products: data };
    } catch (error) {
      handleDatabaseError(error);
    }
  }
  return { error: 'Method not allowed' };
});