import { supabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method not allowed' };
  }
  const body = await readBody(event);
  const { email, password, username } = body;
  try {
    // Create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    });
    if (error) return { error: error.message };
    // Optionally, insert into a custom users table here
    return { user: data.user };
  } catch (error) {
    handleDatabaseError(error);
  }
});
