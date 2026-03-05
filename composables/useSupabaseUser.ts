export const useSupabaseUser = () => {
  const user = useState<any>('supabase_user', () => null)
  const initialized = useState<boolean>('supabase_initialized', () => false)

  const getUser = async () => {
    if (process.server) return null

    try {
      const supabase = useSupabaseClient()
      const { data } = await supabase.auth.getUser()
      user.value = data?.user || null
      initialized.value = true
      return data?.user || null
    } catch (error) {
      console.error('Failed to get user:', error)
      user.value = null
      initialized.value = true
      return null
    }
  }

  // Initialize on first use
  if (!initialized.value && !process.server) {
    getUser()
  }

  return {
    user: readonly(user),
    initialized: readonly(initialized),
    refresh: getUser
  }
}
