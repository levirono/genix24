import { ref, onMounted } from 'vue'

const isDark = ref(false)
let initialized = false

function applyTheme(dark: boolean) {
  if (typeof window === 'undefined') return
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function useTheme() {
  onMounted(() => {
    if (initialized) return
    const saved = window.localStorage.getItem('theme')
    if (saved === 'dark') {
      isDark.value = true
    } else if (saved === 'light') {
      isDark.value = false
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
    }
    applyTheme(isDark.value)
    initialized = true
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
    applyTheme(isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
}

