<template>
  <div>
    <header v-if="!isMobile" class="py-4 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 dark:text-white">Genixl</div>
        <UHorizontalNavigation :links="navigationLinks" class="justify-center">
          <template #default="{ link }">
            <span class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
      </div>
    </header>

    <header v-else class="py-4 px-4 bg-white dark:bg-gray-800 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">Genixl</div>
      <UButton
        @click="toggleMenu"
        color="gray"
        variant="ghost"
        icon="i-heroicons-bars-3"
      />
    </header>

    <Transition name="fade">
      <aside v-if="isMobile && isMenuOpen" class="w-64 bg-white dark:bg-blue-600 h-screen fixed left-0 top-0 z-50 overflow-y-auto">
        <div class="py-4 px-6">
          <div class="flex justify-between items-center mb-6">
            <div class="text-2xl font-bold text-gray-800 dark:text-white">Genixl</div>
            <UButton
              @click="toggleMenu"
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark"
              class="text-gray-700 dark:text-gray-300"
            />
          </div>
          <UVerticalNavigation :links="navigationLinks" class="bg-transparent">
    <template #default="{ link }">
      <span class="block py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{{ link.label }}</span>
    </template>
  </UVerticalNavigation>
        </div>
      </aside>
    </Transition>

    <main :class="{ 'ml-64': !isMobile }">
      <!-- Main content goes here -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navigationLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About Us', to: '#about-us' },
  { label: 'Our Products', to: '#our-products' },
  { label: 'Why Choose Us', to: '#why-choose-us' },
  { label: 'Core Values', to: '#core-values' },
  { label: 'Our Mission', to: '#our-mission' }
];

const isMobile = ref(false);
const isMenuOpen = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>