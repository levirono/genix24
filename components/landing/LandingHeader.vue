<template>
  <header class="py-4 px-4 md:px-8 bg-white dark:bg-gray-800">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">Genixl</div>
      <div class="flex items-center">
        <UHorizontalNavigation :links="navigationLinks" class="justify-center mr-4">
          <template #default="{ link }">
            <span class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
        <!-- <button @click="$emit('toggle-theme')" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <span v-if="isDark" class="text-yellow-500">🌞</span>
          <span v-else class="text-gray-900">🌙</span>
        </button> -->
      </div>
    </div>
  </header>
</template>

<script setup>
// defineProps(['isDark']);
// defineEmits(['toggle-theme']);

const navigationLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About Us', to: '#about-us' },
  { label: 'Our Products', to: '#our-products' },
  // { label: 'Why Choose Us', to: '#why-choose-us' },
  // { label: 'Core Values', to: '#core-values' },
  // { label: 'Our Mission', to: '#our-mission' }
];
</script>