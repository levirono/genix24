/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#16a34a',
          greenSoft: '#4ade80',
          orange: '#f97316',
          orangeSoft: '#fed7aa',
          blue: '#2563eb',
          blueSoft: '#93c5fd',
          surfaceLight: '#f9fafb',
          surfaceDark: '#020617',
        },
      },
    },
  },
  plugins: [],
}