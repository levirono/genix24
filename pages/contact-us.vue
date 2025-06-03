<template>
    <div class="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-white">
        <h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900">Contact Us</h1>
        <p class="mb-8 dark:text-gray-300 text-gray-700">We'd love to hear from you! Please fill out the form below.</p>
        <form class="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded shadow" @submit.prevent="submitForm">
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Name</label>
                <input v-model="name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Your Name" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label>
                <input v-model="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Your Email" required />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Message</label>
                <textarea v-model="message"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4" placeholder="Your Message" required></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button :disabled="isLoading"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                    type="submit">
                    <span v-if="isLoading">Sending...</span>
                    <span v-else>Send</span>
                </button>
            </div>
            <div v-if="success" class="mt-4 text-green-600 dark:text-green-400">Message sent successfully!</div>
            <div v-if="errorMsg" class="mt-4 text-red-600 dark:text-red-400">{{ errorMsg }}</div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const isLoading = ref(false);
const success = ref(false);
const errorMsg = ref('');

const submitForm = async () => {
    isLoading.value = true;
    errorMsg.value = '';
    success.value = false;
    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: { name: name.value, email: email.value, message: message.value }
        });
        success.value = true;
        name.value = '';
        email.value = '';
        message.value = '';
    } catch (err) {
        errorMsg.value = 'Failed to send message. Please try again.';
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.loader {
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: spin 0.75s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
