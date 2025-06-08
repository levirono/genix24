import { c as createError } from '../runtime.mjs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NUXT_SUPABASE_URL;
const supabaseKey = process.env.NUXT_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}
const supabase = createClient(supabaseUrl, supabaseKey);
const handleDatabaseError = (error) => {
  console.error("Database error:", error);
  throw createError({
    statusCode: 500,
    message: "Internal server error"
  });
};

export { handleDatabaseError as h, supabase as s };
//# sourceMappingURL=supabase.mjs.map
