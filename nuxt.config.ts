// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_SUPABASE_ANON_KEY,
    }
  },
  app: {
    head: {
      title: 'Genixl',      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Genixl - Innovative solutions for your business. Discover our services, products, and core values.' },
        { property: 'og:title', content: 'Genixl' },
        { property: 'og:description', content: 'Genixl - Innovative solutions for your business. Discover our services, products, and core values.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/genixl.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Genixl' },
        { name: 'twitter:description', content: 'Genixl - Innovative solutions for your business.' },
        { name: 'twitter:image', content: '/images/genixl.jpg' }
      ]
    }
  },
  sitemap: {
    siteUrl: 'https://genix24.vercel.app',
    gzip: true,
  },
  // ssr: true,
  // nitro: {
  //   preset: 'node-server'
  // }
})
  