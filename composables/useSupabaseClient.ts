export const useSupabaseClient = () => {
  const nuxtApp = useNuxtApp()
  
  if (!nuxtApp.$supabase) {
    throw new Error('Supabase plugin not initialized')
  }
  
  return nuxtApp.$supabase
}
