import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NUXT_SUPABASE_URL;
const supabaseServiceKey = process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NUXT_SUPABASE_ANON_KEY;
let supabase;
let supabaseAuth;
const initializeClients = () => {
  if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
    throw new Error("Missing Supabase credentials");
  }
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseServiceKey);
  }
  if (!supabaseAuth) {
    supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
  }
};
const getSupabase = () => {
  initializeClients();
  return supabase;
};
const getSupabaseAuth = () => {
  initializeClients();
  return supabaseAuth;
};
const handleDatabaseError = (error) => {
  console.error("Database error:", error);
  return {
    statusCode: 500,
    statusMessage: error.message || "Internal server error"
  };
};

export { getSupabaseAuth as a, getSupabase as g, handleDatabaseError as h };
//# sourceMappingURL=supabase.mjs.map
