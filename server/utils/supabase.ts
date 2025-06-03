import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper function to handle database errors
export const handleDatabaseError = (error: any) => {
  console.error('Database error:', error)
  throw createError({
    statusCode: 500,
    message: 'Internal server error'
  })
}
