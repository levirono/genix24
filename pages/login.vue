<template>
    <div class="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4">
        <h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900">Login</h1>
        
        <form class="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded shadow" @submit.prevent="onLogin">
            <!-- Success Message -->
            <div v-if="successMessage" class="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded">
                {{ successMessage }}
            </div>
            
            <!-- Error Message -->
            <div v-if="authError" class="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
                {{ authError }}
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label>
                <input v-model="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Your Email" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Username</label>
                <input v-model="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Your Username (optional)" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label>
                <div class="relative">
                    <input :type="showPassword ? 'text' : 'password'" v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Password" required />
                    <button type="button" @click="showPassword = !showPassword"
                        class="absolute right-2 top-2 text-gray-500 dark:text-gray-300">
                        {{ showPassword ? 'Hide' : 'Show' }}
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300 disabled:cursor-not-allowed"
                    type="submit"
                    :disabled="loading">
                    {{ loading ? 'Logging in...' : 'Login' }}
                </button>
                <NuxtLink to="/signup" class="text-blue-500 hover:underline ml-4">Sign Up</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const username = ref('')
const showPassword = ref(false)

const { login, loading, error: authError } = useAuth()
const router = useRouter()
const successMessage = ref('')

const onLogin = async () => {
  successMessage.value = ''
  const success = await login(email.value, password.value, username.value)
  
  if (success) {
    successMessage.value = 'Login successful! Redirecting...'
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
}
</script>
