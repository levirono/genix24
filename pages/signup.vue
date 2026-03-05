<template>
    <div class="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4">
        <h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900">Sign Up</h1>
        <form class="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded shadow" @submit.prevent="onSignup">
            <!-- Success Message -->
            <div v-if="successMessage" class="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded">
                {{ successMessage }}
            </div>
            
            <!-- Error Message -->
            <div v-if="authError" class="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
                {{ authError }}
            </div>
            
            <!-- Password mismatch error -->
            <div v-if="password && confirmPassword && password !== confirmPassword" class="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
                Passwords do not match
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Username</label>
                <input v-model="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Your Username" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label>
                <input v-model="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Your Email" required />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label>
                <div class="relative">
                    <input v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                        :type="showPassword ? 'text' : 'password'" placeholder="Your Password" required />
                    <span @click="showPassword = !showPassword"
                        class="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2}
                                d="M13.875 18.825A6.978 6.978 0 0012 19.5c-3.313 0-6-2.686-6-6 0-.354.028-.705.085-1.05M15.362 15.362A4.992 4.992 0 0018 12c0-1.657-.672-3.157-1.762-4.238m-1.876 9.6A4.992 4.992 0 0012 18c-1.657 0-3.157-.672-4.238-1.762M8.625 8.625A4.992 4.992 0 006 12c0 1.657.672 3.157 1.762 4.238M16.125 7.875A6.978 6.978 0 0012 4.5c-3.313 0-6 2.686-6 6 0 .354.028.705.085 1.05" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2}
                                d="M13.875 18.825A6.978 6.978 0 0012 19.5c-3.313 0-6-2.686-6-6 0-.354.028-.705.085-1.05M16.125 7.875A6.978 6.978 0 0012 4.5c-3.313 0-6 2.686-6 6 0 .354.028.705.085 1.05M8.625 8.625A4.992 4.992 0 006 12c0 1.657.672 3.157 1.762 4.238m1.876-9.6A4.992 4.992 0 0012 6c1.657 0 3.157.672 4.238 1.762M18 12c0 1.657-.672 3.157-1.762 4.238m-1.876-9.6A4.992 4.992 0 0012 6c-1.657 0-3.157.672-4.238 1.762" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Confirm Password</label>
                <input v-model="confirmPassword"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    :type="showPassword ? 'text' : 'password'" placeholder="Confirm Your Password" required />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300 disabled:cursor-not-allowed"
                    type="submit"
                    :disabled="loading || (password && confirmPassword && password !== confirmPassword)">
                    {{ loading ? 'Creating account...' : 'Sign Up' }}
                </button>
                <NuxtLink to="/login" class="text-blue-500 hover:underline ml-4">Login</NuxtLink>
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
const confirmPassword = ref('')
const successMessage = ref('')

const { signup, loading, error: authError } = useAuth()
const router = useRouter()

const onSignup = async () => {
    if (password.value !== confirmPassword.value) {
        return
    }
    
    successMessage.value = ''
    const success = await signup(email.value, password.value, username.value)
    
    if (success) {
        successMessage.value = 'Account created successfully! Redirecting to login...'
        setTimeout(() => {
            router.push('/login')
        }, 1500)
    }
}
</script>
