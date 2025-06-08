<template>
    <div>
        <h2 class="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
            Admin Users</h2>
        <div v-if="pending" class="text-gray-500">Loading users...</div>
        <div v-else-if="error" class="text-red-500">Failed to load users.</div>
        <table v-else class="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <thead>
                <tr class="bg-blue-50 dark:bg-gray-700">
                    <th class="px-4 py-2 text-left font-semibold">Username</th>
                    <th class="px-4 py-2 text-left font-semibold">Email</th>
                    <th class="px-4 py-2 text-left font-semibold">Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id"
                    class="border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700">
                    <td class="px-4 py-2">{{ user.username }}</td>
                    <td class="px-4 py-2">{{ user.email }}</td>
                    <td class="px-4 py-2">{{ user.created_at ? new Date(user.created_at).toLocaleString() : '-' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useAsyncData } from '#imports'

const { data, pending, error } = await useAsyncData('admin-users', async () => {
    const res = await $fetch('/api/users')
    return res.users
})
const users = data
</script>
