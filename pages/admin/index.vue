        <template>
            <div class="max-w-4xl mx-auto py-10 px-4">
                <h1
                    class="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
                    Admin Dashboard
                </h1>
                <nav class="mb-8 flex gap-4">
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
                </nav>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[300px]">
                    <NuxtPage />
                </div>
            </div>
        </template>

<script setup>
// Admin dashboard layout
</script>
