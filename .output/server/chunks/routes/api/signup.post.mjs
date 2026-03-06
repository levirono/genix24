import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { a as getSupabaseAuth, g as getSupabase, h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola/core';
import '@supabase/supabase-js';

const signup_post = defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return { error: "Method not allowed" };
  }
  const body = await readBody(event);
  const { email, password, username } = body;
  if (!email || !password || !username) {
    return { error: "Email, password, and username are required" };
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
      const { error: dbError } = await supabase.from("users").insert({
        id: data.user.id,
        username,
        email,
        role: "user"
      });
      if (dbError) {
        console.error("Error creating user record:", dbError);
      }
    }
    return { user: data.user };
  } catch (error) {
    return handleDatabaseError(error);
  }
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
