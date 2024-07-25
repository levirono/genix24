<template>
    <section class="mt-20">
      <UContainer>
        <div v-for="(feature, index) in features" :key="index" class="flex flex-col md:flex-row items-center mb-16 glassmorphism p-8 rounded-lg" :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
          <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" :class="{ 'md:pl-8': index % 2 !== 0 }">
            <h3 class="text-3xl font-bold mb-4 bg-clip-text text-transparent" :class="feature.gradientClass">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="w-full h-64 bg-gray-300 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </UContainer>
    </section>
  </template>
  
  <script setup>
  const features = [
    {
      title: "Innovative Solutions",
      description: "At Genixl, we're dedicated to pushing the boundaries of technology. Our team of experts works tirelessly to create solutions that transform industries and improve lives.",
      gradientClass: "bg-gradient-to-r from-blue-500 to-emerald-500"
    },
    {
      title: "Customer-Centric Approach",
      description: "We believe in putting our customers first. Our products and services are designed with your needs in mind, ensuring that we deliver value and exceed expectations at every turn.",
      gradientClass: "bg-gradient-to-r from-amber-500 to-red-500"
    },
    {
      title: "Sustainable Future",
      description: "At Genixl, we're committed to creating a sustainable future. Our eco-friendly practices and innovative green technologies are designed to minimize our environmental impact while maximizing efficiency.",
      gradientClass: "bg-gradient-to-r from-blue-500 to-emerald-500"
    }
  ];
  </script>