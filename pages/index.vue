<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <main class="py-10 md:py-14">
      <LandingPageHero />
      <LandingFeatues />
      <LandingProducts />
      <WhyChooseUs />
      <LandingAboutUs />
      <LandingContactUs />
    </main>
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: 'canonical', href: 'https://genix24.vercel.app/' },
  ],
})
</script>
