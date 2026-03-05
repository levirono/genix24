export const useAuth = () => {
  const user = useState<any>('auth_user', () => null)
  const loading = useState<boolean>('auth_loading', () => false)
  const error = useState<string>('auth_error', () => '')
  const router = useRouter()

  // Fetch user profile from database to get role
  const fetchUserProfile = async () => {
    try {
      const session = localStorage.getItem('session')
      if (!session) return false
      
      const sessionData = JSON.parse(session)
      const response = await $fetch('/api/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${sessionData.access_token}`
        }
      })
      
      if (response?.error) return false
      
      if (response && user.value) {
        user.value.role = response.role
        localStorage.setItem('user', JSON.stringify(user.value))
      }
      return true
    } catch (err) {
      console.error('Failed to fetch profile:', err)
      return false
    }
  }

  // Load user from localStorage on mount
  const initUser = async () => {
    if (process.server) return
    try {
      const userData = localStorage.getItem('user')
      if (userData) {
        user.value = JSON.parse(userData)
        // Fetch fresh profile data from database
        await fetchUserProfile()
      }
    } catch (err) {
      console.error('Failed to load user from localStorage:', err)
    }
  }

  // Login function
  const login = async (email: string, password: string, username?: string) => {
    loading.value = true
    error.value = ''
    try {
      const response = await $fetch('/api/login', {
        method: 'POST',
        body: { email, password, username }
      })

      if (response?.error) {
        error.value = response.error
        return false
      }

      if (response?.user) {
        const userData = {
          id: response.user.id,
          email: response.user.email,
          username: response.user.user_metadata?.username || response.user.email,
          role: null
        }
        user.value = userData
        localStorage.setItem('user', JSON.stringify(userData))
        if (response.session) {
          localStorage.setItem('session', JSON.stringify(response.session))
          // Fetch profile to get role
          await fetchUserProfile()
        }
        return true
      }
      return false
    } catch (err: any) {
      error.value = err.data?.error || err.message || 'Login failed'
      console.error('Login error:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  // Signup function
  const signup = async (email: string, password: string, username: string) => {
    loading.value = true
    error.value = ''
    try {
      const response = await $fetch('/api/signup', {
        method: 'POST',
        body: { email, password, username }
      })

      if (response?.error) {
        error.value = response.error
        return false
      }

      return true
    } catch (err: any) {
      error.value = err.data?.error || err.message || 'Signup failed'
      console.error('Signup error:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  // Logout function
  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('session')
    error.value = ''
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    error: readonly(error),
    initUser,
    login,
    signup,
    logout,
    fetchUserProfile
  }
}
