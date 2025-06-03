import { supabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method not allowed' };
  }
  const body = await readBody(event);
  const { name, email, message } = body;
  try {
    const { error } = await supabase.from('contact_messages').insert([{ name, email, message }]);
    if (error) return { error: error.message };
    return { success: true };
  } catch (error) {
    handleDatabaseError(error);
  }
});
