<template>
  <header class="py-4 px-4 md:px-8 bg-white dark:bg-gray-800">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">Genixl</div>
      <div class="flex items-center">
        <UHorizontalNavigation :links="navigationLinks" class="justify-center mr-4">
          <template #default="{ link }">
            <span
              class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{{
                link.label }}</span>
          </template>
        </UHorizontalNavigation>
        <template v-if="user && user.username">
          <span class="ml-4 px-4 py-2 rounded bg-green-500 text-white font-semibold">{{ user.username }}</span>
        </template>
        <template v-else>
          <NuxtLink to="/login"
            class="ml-4 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200">
            Login</NuxtLink>
        </template>
        <!-- <button @click="$emit('toggle-theme')" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <span v-if="isDark" class="text-yellow-500">🌞</span>
          <span v-else class="text-gray-900">🌙</span>
        </button> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
  if (process.client) {
    const userData = localStorage.getItem('user');
    if (userData) {
      user.value = JSON.parse(userData);
    }
  }
});

const navigationLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About Us', to: '#about-us' },
  { label: 'Our Products', to: '#our-products' },
  { label: 'Our Services', to: '/our-services' },
  { label: 'Contact Us', to: '/contact-us' },
];
</script>