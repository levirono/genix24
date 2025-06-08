import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NUXT_SUPABASE_URL
const supabaseKey = process.env.NUXT_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export const handleDatabaseError = (error: any) => {
  console.error('Database error:', error)
  throw createError({
    statusCode: 500,
    message: 'Internal server error'
  })
}
