<template>
  <header class="py-4 px-4 md:px-8 bg-white dark:bg-gray-800 shadow">
    <nav class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/images/genixl.jpg" alt="Genixl Logo" class="h-20 w-auto rounded shadow" />
        <span class="sr-only">Genixl Home</span>
      </NuxtLink>
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex gap-6 items-center">
        <li v-for="link in navigationLinks" :key="link.label">
          <button v-if="link.scrollTo" @click="scrollToSection(link.scrollTo)"
            class="flex items-center gap-1 text-lg font-medium px-2 py-1 rounded transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-white"
            :class="{ 'bg-blue-50 dark:bg-emerald-900 text-green-700 dark:text-emerald-300 font-bold': isActive(link) }">
            <span v-if="link.icon" class="text-xl">{{ link.icon }}</span>
            {{ link.label }}
          </button>
          <NuxtLink v-else :to="link.to"
            class="flex items-center gap-1 text-lg font-medium px-2 py-1 rounded transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-white"
            :class="{ 'bg-blue-50 dark:bg-emerald-900 text-green-700 dark:text-emerald-300 font-bold': isActive(link) }">
            <span v-if="link.icon" class="text-xl">{{ link.icon }}</span>
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <!-- User/Login -->
      <div class="hidden md:flex items-center ml-4 relative">
        <template v-if="user && user.username">
          <div class="relative">
            <span class="ml-4 px-4 py-2 rounded bg-green-500 text-white font-semibold cursor-pointer select-none"
              @click="toggleLogoutMenu">
              {{ user.username }}
            </span>
            <transition name="fade">
              <div v-if="showLogoutMenu"
                class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded shadow-lg z-50 border border-gray-100 dark:border-gray-700">
                <button @click="logout"
                  class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b">
                  Log out
                </button>
              </div>
            </transition>
          </div>
        </template>
        <template v-else>
          <NuxtLink to="/login"
            class="ml-4 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200">
            Login</NuxtLink>
        </template>
      </div>
      <!-- Hamburger for mobile -->
      <button @click="showMobileMenu = !showMobileMenu"
        class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg v-if="!showMobileMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" class="h-7 w-7 text-gray-700 dark:text-gray-300">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="h-7 w-7 text-gray-700 dark:text-gray-300">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="showMobileMenu" class="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
        <ul class="flex flex-col gap-4">
          <li v-for="link in navigationLinks" :key="link.label">
            <button v-if="link.scrollTo" @click="scrollToSection(link.scrollTo); showMobileMenu = false"
              class="flex items-center gap-1 w-full text-lg font-medium px-2 py-2 rounded transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-white"
              :class="{ 'bg-blue-50 dark:bg-emerald-900 text-green-700 dark:text-emerald-300 font-bold': isActive(link) }">
              <span v-if="link.icon" class="text-xl">{{ link.icon }}</span>
              {{ link.label }}
            </button>
            <NuxtLink v-else :to="link.to"
              class="flex items-center gap-1 text-lg font-medium px-2 py-2 rounded transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-white"
              :class="{ 'bg-blue-50 dark:bg-emerald-900 text-green-700 dark:text-emerald-300 font-bold': isActive(link) }"
              @click="showMobileMenu = false">
              <span v-if="link.icon" class="text-xl">{{ link.icon }}</span>
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-4">
          <template v-if="user && user.username">
            <span class="block px-4 py-2 rounded bg-green-500 text-white font-semibold text-center">{{ user.username
            }}</span>
          </template>
          <template v-else>
            <NuxtLink to="/login"
              class="block px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200 text-center"
              @click="showMobileMenu = false">Login</NuxtLink>
          </template>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const user = ref(null);
const showMobileMenu = ref(false);
const showLogoutMenu = ref(false);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  try {
    const userData = localStorage.getItem('user');
    if (userData) {
      user.value = JSON.parse(userData);
    }
  } catch (error) {
    console.error('Error accessing localStorage:', error);
  }
});

const navigationLinks = [
  { label: 'Home', to: '/', icon: '🏠' },
  { label: 'About Us', to: '/', scrollTo: 'about-us', icon: 'ℹ️' },
  { label: 'Our Products', to: '/', scrollTo: 'our-products', icon: '💻' }, // Changed to laptop for software
  { label: 'Our Services', to: '/our-services', icon: '🧑‍💻' }, // Changed to developer for software
  { label: 'Contact Us', to: '/contact-us', icon: '✉️' },
];

function isActive(link) {
  if (link.scrollTo) {
    return route.path === '/' && route.hash === `#${link.scrollTo}`;
  }
  return route.path === link.to;
}

function scrollToSection(sectionId) {
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` });
  } else {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = `#${sectionId}`;
    } else {
      // fallback: set hash, let page handle scroll
      window.location.hash = `#${sectionId}`;
    }
  }
}

function toggleLogoutMenu() {
  showLogoutMenu.value = !showLogoutMenu.value;
}

function logout() {
  localStorage.removeItem('user');
  user.value = null;
  showLogoutMenu.value = false;
  // Optionally, redirect to home or login
  router.push('/login');
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>