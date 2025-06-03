<template>
    <div class="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-white py-16 px-4">
        <h1
            class="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
            Contact Messages (Admin)</h1>
        <div v-if="isLoading" class="text-lg text-gray-700 dark:text-gray-300">Loading...</div>
        <div v-else-if="errorMsg" class="text-red-600 dark:text-red-400">{{ errorMsg }}</div>
        <div v-else class="w-full max-w-3xl">
            <table class="w-full table-auto bg-white dark:bg-gray-800 rounded shadow overflow-hidden">
                <thead>
                    <tr class="bg-gray-100 dark:bg-gray-700">
                        <th class="px-4 py-2 text-left">Name</th>
                        <th class="px-4 py-2 text-left">Email</th>
                        <th class="px-4 py-2 text-left">Message</th>
                        <th class="px-4 py-2 text-left">Date</th>
                        <th class="px-4 py-2 text-left">Reply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="msg in messages" :key="msg.id" class="border-b border-gray-200 dark:border-gray-700">
                        <td class="px-4 py-2">{{ msg.name }}</td>
                        <td class="px-4 py-2">
                            <a :href="`mailto:${msg.email}`" class="text-blue-500 hover:underline">{{ msg.email }}</a>
                        </td>
                        <td class="px-4 py-2">{{ msg.message }}</td>
                        <td class="px-4 py-2">{{ formatDate(msg.created_at) }}</td>
                        <td class="px-4 py-2">
                            <a :href="`mailto:${msg.email}`"
                                class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200">Reply</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="messages.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-8">No messages yet.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const messages = ref([]);
const isLoading = ref(true);
const errorMsg = ref('');

const fetchMessages = async () => {
    isLoading.value = true;
    try {
        const data = await $fetch('/api/contact');
        messages.value = data.messages || [];
    } catch (err) {
        errorMsg.value = 'Failed to load messages.';
    } finally {
        isLoading.value = false;
    }
};

const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString();
};

onMounted(fetchMessages);
</script>
