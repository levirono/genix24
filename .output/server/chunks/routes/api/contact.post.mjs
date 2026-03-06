import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
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

const contact_post = defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return { error: "Method not allowed" };
  }
  const body = await readBody(event);
  const { name, email, message } = body;
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("contact_messages").insert([{ name, email, message }]);
    if (error)
      return { error: error.message };
    return { success: true };
  } catch (error) {
    handleDatabaseError(error);
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
