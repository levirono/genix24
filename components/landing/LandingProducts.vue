<template>
  <section id="our-products" class="mt-20">
    <div class="flex justify-center items-center mb-8">
      <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">OUR PRODUCTS</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <UCard v-for="(product, i) in products" :key="product.title"
        class="glassmorphism hover:scale-105 transition-transform duration-300 opacity-0 translate-y-10 transition-all duration-700"
        :class="isVisible[i] ? 'opacity-100 translate-y-0' : ''"
        ref="elRefs[i]"
      >
        <template #header>
          <h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">{{ product.title }}</h3>
        </template>
        <div class="h-40 mb-4">
          <img :src="product.image" :alt="product.title" class="w-full h-full object-cover rounded-lg" />
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
import { ref, onMounted } from 'vue';
import { useScrollReveal } from '../useScrollReveal';

const products = [
  {
    title: "FUELFINDER",
    description: "Track the location of fuel stations and check on their status.",
    link: "/products/smart-home",
    image: "fuelfinder.jpg"
  },
  {
    title: "ONE the all in one platform",
    description: "A seamless way to manage all your items in one gro.",
    link: "/products/ai-analytics",
    image: "one.png"
  },
  {
    title: "Genixl Reviews",
    description: "Get reviews of latest devices as soon as they are released",
    link: "https://gr-genixls-projects.vercel.app/",
    image: "GR.jpg"
  }
];

const elRefs = ref([]);
const isVisible = ref([]);

onMounted(() => {
  products.forEach((_, i) => {
    const { el, isVisible: vis } = useScrollReveal();
    elRefs.value[i] = el;
    isVisible.value[i] = vis;
  });
});
</script>