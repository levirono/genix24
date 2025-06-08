import { d as defineEventHandler } from '../../runtime.mjs';
import { s as supabase, h as handleDatabaseError } from '../../_/supabase.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const contact_get = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    try {
      const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
      if (error)
        return { error: error.message };
      return { messages: data };
    } catch (error) {
      handleDatabaseError(error);
    }
  }
  return { error: "Method not allowed" };
});

export { contact_get as default };
//# sourceMappingURL=contact.get.mjs.map
