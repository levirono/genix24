import { d as defineEventHandler } from '../../runtime.mjs';
import { g as getSupabase, h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola/core';
import '@supabase/supabase-js';

const users_get = defineEventHandler(async (event) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.auth.admin.listUsers();
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
    return handleDatabaseError(error);
  }
});

export { users_get as default };
//# sourceMappingURL=users.get.mjs.map
