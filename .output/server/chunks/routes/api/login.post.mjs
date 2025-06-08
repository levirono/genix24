import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { s as supabase, h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const login_post = defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return { error: "Method not allowed" };
  }
  const body = await readBody(event);
  const { email, password, username } = body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error)
      return { error: error.message };
    return { user: data.user, session: data.session };
  } catch (error) {
    handleDatabaseError(error);
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
