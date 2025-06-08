import { d as defineEventHandler } from '../../runtime.mjs';
import { createClient } from '@supabase/supabase-js';
import { h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const users_get = defineEventHandler(async (event) => {
  try {
    const supabaseUrl = process.env.NUXT_SUPABASE_URL;
    const serviceRoleKey = process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error("Missing Supabase service role credentials");
    }
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { data, error } = await supabaseAdmin.auth.admin.listUsers();
    if (error)
      throw error;
    if (!data || !data.users) {
      throw new Error("No users data returned from Supabase Auth admin API");
    }
    const users = data.users.map((u) => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at
    }));
    return { users };
  } catch (error) {
    handleDatabaseError(error);
  }
});

export { users_get as default };
//# sourceMappingURL=users.get.mjs.map
