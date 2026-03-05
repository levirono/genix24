<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1
      class="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
      Admin Dashboard
    </h1>
    
    <div v-if="isLoading" class="text-center py-10">
      <p class="text-gray-500 dark:text-gray-400">Loading...</p>
    </div>
    
    <div v-else-if="errorMsg" class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg mb-6">
      {{ errorMsg }}
    </div>
    
    <div v-else>
      <div class="flex justify-between items-center mb-8">
        <nav class="flex gap-4">
          <NuxtLink to="/admin/contacts"
            class="px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-white dark:bg-gray-700 text-blue-600 dark:text-emerald-400 border border-blue-200 dark:border-emerald-700 shadow hover:bg-blue-50 dark:hover:bg-emerald-900 hover:text-blue-800 dark:hover:text-white"
            active-class="bg-blue-100 dark:bg-emerald-800 text-blue-900 dark:text-white border-blue-400 dark:border-emerald-500">
            Contacts
          </NuxtLink>
          <NuxtLink to="/admin/users"
            class="px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-white dark:bg-gray-700 text-blue-600 dark:text-emerald-400 border border-blue-200 dark:border-emerald-700 shadow hover:bg-blue-50 dark:hover:bg-emerald-900 hover:text-blue-800 dark:hover:text-white"
            active-class="bg-blue-100 dark:bg-emerald-800 text-blue-900 dark:text-white border-blue-400 dark:border-emerald-500">
            Users
          </NuxtLink>
          <NuxtLink to="/admin/products"
            class="px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-white dark:bg-gray-700 text-blue-600 dark:text-emerald-400 border border-blue-200 dark:border-emerald-700 shadow hover:bg-blue-50 dark:hover:bg-emerald-900 hover:text-blue-800 dark:hover:text-white"
            active-class="bg-blue-100 dark:bg-emerald-800 text-blue-900 dark:text-white border-blue-400 dark:border-emerald-500">
            Products
          </NuxtLink>
        </nav>
        <button 
          @click="handleLogout"
          class="px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-red-500 hover:bg-red-600 text-white shadow hover:shadow-lg">
          Logout
        </button>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[300px]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  middleware: 'auth'
})

const isAdmin = ref(false)
const isLoading = ref(true)
const errorMsg = ref('')
const router = useRouter()
const { logout } = useAuth()

onMounted(async () => {
  try {
    const result = await useAdminCheck()
    if (!result) {
      throw new Error('Access denied')
    }
    isAdmin.value = true
  } catch (error) {
    errorMsg.value = 'You do not have permission to access this page. Redirecting...'
    console.error('Admin check failed:', error)
    setTimeout(() => {
      router.push('/')
    }, 2000)
  } finally {
    isLoading.value = false
  }
})

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>
