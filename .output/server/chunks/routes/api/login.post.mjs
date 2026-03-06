import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { a as getSupabaseAuth, h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola/core';
import '@supabase/supabase-js';

const login_post = defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return { error: "Method not allowed" };
  }
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    return { error: "Email and password are required" };
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

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
