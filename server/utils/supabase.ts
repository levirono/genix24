import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NUXT_SUPABASE_URL
const supabaseServiceKey = process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY
const supabaseAnonKey = process.env.NUXT_SUPABASE_ANON_KEY

let supabase: any
let supabaseAuth: any

const initializeClients = () => {
  if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
    throw new Error('Missing Supabase credentials')
  }
  
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseServiceKey)
  }
  if (!supabaseAuth) {
    supabaseAuth = createClient(supabaseUrl, supabaseAnonKey)
  }
}

export const getSupabase = () => {
  initializeClients()
  return supabase
}

export const getSupabaseAuth = () => {
  initializeClients()
  return supabaseAuth
}

export const supabase_instance = () => getSupabase()
export const supabaseAuth_instance = () => getSupabaseAuth()

export const handleDatabaseError = (error: any) => {
  console.error('Database error:', error)
  return {
    statusCode: 500,
    statusMessage: error.message || 'Internal server error'
  }
}
