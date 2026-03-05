export default defineNuxtRouteMiddleware(async (to) => {
  const { user, initUser } = useAuth()

  // Ensure user is loaded
  if (!user.value) {
    initUser()
  }

  if (!user.value) {
    return navigateTo('/login')
  }

  // For admin routes, don't check role here - let the component handle it
  // This prevents middleware from blocking access, component will redirect if not admin
})