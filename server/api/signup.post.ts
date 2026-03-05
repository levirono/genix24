import { getSupabaseAuth, getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method not allowed' };
  }
  const body = await readBody(event);
  const { email, password, username } = body;
  
  if (!email || !password || !username) {
    return { error: 'Email, password, and username are required' };
  }
  
  try {
    const supabaseAuth = getSupabaseAuth();
    const supabase = getSupabase();
    
    const { data, error } = await supabaseAuth.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    });
    if (error) {
      return { error: error.message };
    }
    
    if (data.user) {
      const { error: dbError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          username: username,
          email: email,
          role: 'user'
        });
      
      if (dbError) {
        console.error('Error creating user record:', dbError);
      }
    }
    
    return { user: data.user };
  } catch (error) {
    return handleDatabaseError(error);
  }
});
