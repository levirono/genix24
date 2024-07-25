<template>
    <section id="why-choose-us" class="mt-20">
      <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500">
        Why Choose Us?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" class="text-center">
          <div class="text-5xl mb-4" v-html="feature.icon"></div>
          <h3 class="text-2xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Our products are optimized for speed and efficiency."
    },
    {
      icon: "🔒",
      title: "Secure by Design",
      description: "Your data's safety is our top priority."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "We're committed to sustainable and responsible tech."
    }
  ];
  </script>