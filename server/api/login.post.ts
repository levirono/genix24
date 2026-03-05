import { getSupabaseAuth, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method not allowed' };
  }
  const body = await readBody(event);
  const { email, password } = body;
  
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }
  
  try {
    const supabaseAuth = getSupabaseAuth();
    const { data, error } = await supabaseAuth.auth.signInWithPassword({ email, password });
    if (error) {
      return { error: error.message };
    }
    return { user: data.user, session: data.session };
  } catch (error) {
    return handleDatabaseError(error);
  }
});
