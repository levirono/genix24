<template>
  <header class="py-4 px-4 md:px-8">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold text-white">Genixl</div>
      <UButton
        v-if="isMobile"
        @click="toggleMenu"
        color="gray"
        variant="ghost"
        icon="i-heroicons-bars-3"
      />
      <UHorizontalNavigation v-else :links="navigationLinks" class="justify-center">
        <template #default="{ link }">
          <span class="text-lg font-medium text-white">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </div>
    <UVerticalNavigation
      v-if="isMobile && isMenuOpen"
      :links="navigationLinks"
      class="mt-4 bg-gradient-to-b from-gray-700 to-gray-900 p-4 rounded-lg shadow-lg"
    >
      <template #default="{ link }">
        <span class="text-lg font-medium text-white hover:bg-gray-600 p-2 rounded block transition duration-300">
          <i class="fas fa-chevron-right mr-2"></i>
          {{ link.label }}
        </span>
      </template>
    </UVerticalNavigation>
  </header>
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