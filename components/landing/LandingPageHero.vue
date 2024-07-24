<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-200">
    <header class="py-4 px-4 md:px-8">
      <UHorizontalNavigation :links="navigationLinks" class="justify-center">
        <template #default="{ link }">
          <span class="text-lg font-medium">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </header>
    <main class="flex-1 px-4 py-12 md:px-8">
      <!-- Hero Section -->
      <section id="home" class="flex justify-center items-center h-auto mt-20 md:mt-40">
        <div class="max-w-4xl text-center">
          <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
            Empowering You with Innovative Solutions
          </h1>
          <p class="text-xl mb-8 text-gray-600 dark:text-gray-400">
            Explore our world of cutting-edge software and gadgets, designed to revolutionize your digital experience.
          </p>
          <UButton
            to="/about"
            class="glassmorphism"
            color="blue"
            size="xl"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          >
            Discover More
          </UButton>
        </div>
      </section>

      <!-- After the hero section and before the products grid -->
      <section class="mt-20">
        <UContainer>
          <!-- First container -->
          <div class="flex flex-col md:flex-row items-center mb-16 glassmorphism p-8 rounded-lg">
            <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">Innovative Solutions</h3>
              <p class="text-gray-600 dark:text-gray-400">
                At Genixl, we're dedicated to pushing the boundaries of technology. Our team of experts works tirelessly to create solutions that transform industries and improve lives.
              </p>
            </div>
            <div class="md:w-1/2">
              <!-- <img src="/images/tech.jpg" alt="Innovative Solutions" class="w-full h-auto rounded-lg shadow-lg"> -->
              <div class="w-full h-64 bg-gray-300 rounded-lg shadow-lg"></div>
            </div>
          </div>

          <!-- Second container -->
          <div class="flex flex-col md:flex-row-reverse items-center mb-16 glassmorphism p-8 rounded-lg">
            <div class="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <h3 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500">Customer-Centric Approach</h3>
              <p class="text-gray-600 dark:text-gray-400">
                We believe in putting our customers first. Our products and services are designed with your needs in mind, ensuring that we deliver value and exceed expectations at every turn.
              </p>
            </div>
            <div class="md:w-1/2">
              <!-- <img src="/images/welcomeff.png" alt="Customer-Centric Approach" class="w-full h-auto rounded-lg shadow-lg"> -->
              <div class="w-full h-64 bg-gray-300 rounded-lg shadow-lg"></div>
            </div>
          </div>

          <!-- Third container -->
          <div class="flex flex-col md:flex-row items-center mb-16 glassmorphism p-8 rounded-lg">
            <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">Sustainable Future</h3>
              <p class="text-gray-600 dark:text-gray-400">
                At Genixl, we're committed to creating a sustainable future. Our eco-friendly practices and innovative green technologies are designed to minimize our environmental impact while maximizing efficiency.
              </p>
            </div>
            <div class="md:w-1/2">
              <!-- <img src="/images/welcomeff.png" alt="Sustainable Future" class="w-full h-auto rounded-lg shadow-lg"> -->
              <div class="w-full h-64 bg-gray-300 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Products Section -->
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
              <!-- <img :src="product.image" :alt="product.title" class="w-full h-full object-cover rounded-lg" /> -->
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

      <!-- Features Section -->
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

      <!-- About Us Section -->
      <section id="about-us" class="mt-20">
        <UContainer>
          <UCard id="core-values" class="glassmorphism mb-8">
            <template #header>
              <h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">Our Core Values</h2>
            </template>
            <ul class="space-y-6">
              <li v-for="value in coreValues" :key="value.title" class="flex items-start">
                <div class="text-3xl mr-4" v-html="value.icon"></div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ value.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ value.description }}</p>
                </div>
              </li>
            </ul>
          </UCard>

          <UCard id="our-mission" class="glassmorphism">
            <template #header>
              <h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500">Our Mission</h2>
            </template>
            <p class="text-gray-600 dark:text-gray-400">{{ mission }}</p>
          </UCard>
        </UContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
const navigationLinks = [
  {
    label: 'Home',
    to: '#home'
  },
  {
    label: 'About Us',
    to: '#about-us'
  },
  {
    label: 'Our Products',
    to: '#our-products'
  },
  {
    label: 'Why Choose Us',
    to: '#why-choose-us'
  },
  {
    label: 'Core Values',
    to: '#core-values'
  },
  {
    label: 'Our Mission',
    to: '#our-mission'
  }
]

const products = [
  {
    title: "FUELFINDER",
    image: "/images/smart-home-hub.jpg",
    description: "Control your entire home with our intuitive smart home system.",
    link: "/products/smart-home"
  },
  {
    title: "ONE the all in one platform",
    image: "/images/ai-analytics.jpg",
    description: "Harness the power of AI to gain invaluable insights from your data.",
    link: "/products/ai-analytics"
  },
  {
    title: "great tech wizard",
    image: "/images/wearable-/images/welcomeff.png",
    description: "Stay connected and monitor your health with our cutting-edge wearables.",
    link: "/products/wearables"
  }
];

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

const coreValues = [
  {
    icon: "🌿",
    title: 'Sustainability',
    description: 'We prioritize environmental responsibility in all our innovations and operations.'
  },
  {
    icon: "💡",
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create eco-friendly solutions.'
  },
  {
    icon: "🤝",
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships to drive positive change.'
  }
]

const mission = 'At Genixl, our mission is to harness the power of innovative technology to create a more sustainable future. We are committed to developing eco-friendly solutions that reduce environmental impact while enhancing efficiency and productivity for businesses and individuals alike.'
</script>

<style>
.glassmorphism {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark .glassmorphism {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}
</style>
