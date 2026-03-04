<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-white/80 backdrop-blur-md dark:bg-slate-900/80">
    <nav class="section-shell flex items-center justify-between py-3">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-orange text-xs font-semibold text-white shadow-md">
          Gx
        </div>
        <div class="flex flex-col leading-tight">
          <span class="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-50">
            Genixl
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            Software & digital products
          </span>
        </div>
      </NuxtLink>

      <ul class="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 md:flex">
        <li v-for="link in navigationLinks" :key="link.label">
          <button
            v-if="link.scrollTo"
            @click="scrollToSection(link.scrollTo)"
            class="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
            :class="isActive(link) ? 'bg-brand-green/10 text-brand-green dark:bg-brand-green/15' : 'hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <span
              class="h-1.5 w-1.5 rounded-full bg-gradient-to-br"
              :class="link.tint"
            ></span>
            <span>{{ link.label }}</span>
          </button>
          <NuxtLink
            v-else
            :to="link.to"
            class="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
            :class="isActive(link) ? 'bg-brand-green/10 text-brand-green dark:bg-brand-green/15' : 'hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <span
              class="h-1.5 w-1.5 rounded-full bg-gradient-to-br"
              :class="link.tint"
            ></span>
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="toggleTheme"
          class="relative flex h-8 w-14 items-center rounded-full border border-slate-200 bg-slate-100 px-1 text-xs font-medium text-slate-700 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <span
            class="pointer-events-none inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[0.65rem] font-semibold shadow-sm transition-transform dark:bg-slate-800"
            :class="isDark ? 'translate-x-6' : ''"
          >
            {{ isDark ? 'Dark' : 'Light' }}
          </span>
        </button>

        <div class="hidden items-center gap-2 md:flex">
          <template v-if="user && user.username">
            <div class="relative">
              <button
                type="button"
                @click="toggleLogoutMenu"
                class="rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green hover:bg-brand-green/15"
              >
                {{ user.username }}
              </button>
              <transition name="fade">
                <div
                  v-if="showLogoutMenu"
                  class="absolute right-0 mt-2 w-40 rounded-xl border border-slate-100 bg-white p-1 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900"
                >
                  <button
                    type="button"
                    @click="logout"
                    class="w-full rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/40"
                  >
                    Sign out
                  </button>
                </div>
              </transition>
            </div>
          </template>
          <template v-else>
            <NuxtLink
              to="/login"
              class="rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              Client portal
            </NuxtLink>
          </template>
        </div>

        <button
          type="button"
          @click="showMobileMenu = !showMobileMenu"
          class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden"
        >
          <svg
            v-if="!showMobileMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
          >
            <path
              d="M4 7h16M4 12h16M4 17h10"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>

    <transition name="fade">
      <div
        v-if="showMobileMenu"
        class="section-shell mt-2 mb-4 space-y-4 rounded-2xl border border-slate-100 bg-white/95 p-4 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900/95 md:hidden"
      >
        <ul class="flex flex-col gap-2">
          <li v-for="link in navigationLinks" :key="link.label">
            <button
              v-if="link.scrollTo"
              @click="scrollToSection(link.scrollTo); showMobileMenu = false"
              class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors"
              :class="isActive(link) ? 'bg-brand-green/10 text-brand-green dark:bg-brand-green/15' : 'hover:bg-slate-100 dark:hover:bg-slate-800'"
            >
              <span class="inline-flex items-center gap-2">
                <span
                  class="h-1.5 w-1.5 rounded-full bg-gradient-to-br"
                  :class="link.tint"
                ></span>
                <span>{{ link.label }}</span>
              </span>
            </button>
            <NuxtLink
              v-else
              :to="link.to"
              class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors"
              :class="isActive(link) ? 'bg-brand-green/10 text-brand-green dark:bg-brand-green/15' : 'hover:bg-slate-100 dark:hover:bg-slate-800'"
              @click="showMobileMenu = false"
            >
              <span class="inline-flex items-center gap-2">
                <span
                  class="h-1.5 w-1.5 rounded-full bg-gradient-to-br"
                  :class="link.tint"
                ></span>
                <span>{{ link.label }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>

        <div class="flex items-center justify-between pt-2">
          <template v-if="user && user.username">
            <span class="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
              {{ user.username }}
            </span>
            <button
              type="button"
              @click="logout"
              class="text-xs font-medium text-red-500 hover:text-red-600"
            >
              Sign out
            </button>
          </template>
          <template v-else>
            <NuxtLink
              to="/login"
              class="rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:shadow-md"
              @click="showMobileMenu = false"
            >
              Client portal
            </NuxtLink>
          </template>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '~/composables/useTheme'

const user = ref(null)
const showMobileMenu = ref(false)
const showLogoutMenu = ref(false)
const route = useRoute()
const router = useRouter()

const { isDark, toggleTheme } = useTheme()

onMounted(() => {
  try {
    const userData = localStorage.getItem('user')
    if (userData) {
      user.value = JSON.parse(userData)
    }
  } catch (error) {
  }
})

const navigationLinks = [
  { label: 'Overview', to: '/', scrollTo: 'hero', tint: 'from-brand-green to-brand-greenSoft' },
  { label: 'Services', to: '/our-services', tint: 'from-brand-orange to-brand-orangeSoft' },
  { label: 'Products', to: '/products', tint: 'from-brand-blue to-brand-blueSoft' },
  { label: 'Industries', to: '/industries', tint: 'from-brand-green to-brand-orange' },
  { label: 'About', to: '/about', tint: 'from-slate-500 to-slate-700' },
  { label: 'Contact', to: '/contact-us', tint: 'from-brand-blue to-brand-green' },
]

function isActive(link) {
  if (link.scrollTo) {
    return route.path === '/' && route.hash === `#${link.scrollTo}`
  }
  return route.path === link.to
}

function scrollToSection(sectionId) {
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` })
  } else {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.location.hash = `#${sectionId}`
    } else {
      window.location.hash = `#${sectionId}`
    }
  }
}

function toggleLogoutMenu() {
  showLogoutMenu.value = !showLogoutMenu.value
}

function logout() {
  localStorage.removeItem('user')
  user.value = null
  showLogoutMenu.value = false
  router.push('/login')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease-out, transform 0.18s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>