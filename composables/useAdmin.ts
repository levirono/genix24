export const useAdminCheck = async () => {
  const { user, fetchUserProfile } = useAuth()
  
  // Ensure profile is loaded with role
  if (!user.value?.role) {
    await fetchUserProfile()
  }
  
  if (!user.value) return false
  return user.value.role === 'admin'
}