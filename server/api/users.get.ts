// filepath: server/api/users.get.ts
import { createClient } from '@supabase/supabase-js';
import { handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  try {
    // Use service role key for admin access
    const supabaseUrl = process.env.NUXT_SUPABASE_URL;
    const serviceRoleKey = process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error('Missing Supabase service role credentials');
    }
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { data, error } = await supabaseAdmin.auth.admin.listUsers();
    if (error) throw error;
    if (!data || !data.users) {
      throw new Error('No users data returned from Supabase Auth admin API');
    }
    // Map users to only include id, email, created_at
    const users = data.users.map(u => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at
    }));
    return { users };
  } catch (error) {
    handleDatabaseError(error);
  }
});
