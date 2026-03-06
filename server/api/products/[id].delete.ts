import { getSupabase, handleDatabaseError } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'DELETE') {
    return { error: 'Method not allowed' }
  }

  const authHeader = event.req.headers.authorization
  if (!authHeader) {
    return { error: 'Unauthorized' }
  }

  const token = authHeader.replace('Bearer ', '')
  const supabase = getSupabase()
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  if (authError || !user) {
    return { error: 'Unauthorized' }
  }

  const productId = event.context.params.id

  try {
    // First check if product exists and belongs to user
    const { data: product, error: fetchError } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single()

    if (fetchError || !product) {
      return { error: 'Product not found' }
    }

    // Delete the product
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .eq('id', productId)

    if (deleteError) {
      return { error: deleteError.message }
    }

    return { success: true, message: 'Product deleted successfully' }
  } catch (error) {
    return handleDatabaseError(error)
  }
})
