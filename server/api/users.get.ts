import { getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.auth.admin.listUsers();
    if (error) throw error;
    if (!data || !data.users) {
      throw new Error('No users data returned from Supabase Auth admin API');
    }
    const users = data.users.map(u => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at
    }));
    return { users };
  } catch (error) {
    return handleDatabaseError(error);
  }
});
