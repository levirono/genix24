<template>
    <section id="our-products" class="mt-20">
      <div class="flex justify-center items-center mb-8">
        <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">OUR PRODUCTS</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="product in products" :key="product.title" class="glassmorphism hover:scale-105 transition-transform duration-300">
          <template #header>
            <h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">{{ product.title }}</h3>
          </template>
          <div class="h-40 mb-4">
            <div class="w-full h-full bg-gray-300 rounded-lg"></div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            {{ product.description }}
          </p>
          <template #footer>
            <UButton
              :to="product.link"
              color="emerald"
              variant="ghost"
              class="w-full"
              trailing-icon="i-heroicons-arrow-right-20-solid"
            >
              Explore
            </UButton>
          </template>
        </UCard>
      </div>
    </section>
  </template>
  
  <script setup>
  const products = [
    {
      title: "FUELFINDER",
      description: "Control your entire home with our intuitive smart home system.",
      link: "/products/smart-home"
    },
    {
      title: "ONE the all in one platform",
      description: "Harness the power of AI to gain invaluable insights from your data.",
      link: "/products/ai-analytics"
    },
    {
      title: "great tech wizard",
      description: "Stay connected and monitor your health with our cutting-edge wearables.",
      link: "/products/wearables"
    }
  ];
  </script>