<template>
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
  </template>
  
  <script setup>
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
  ];
  
  const mission = 'At Genixl, our mission is to harness the power of innovative technology to create a more sustainable future. We are committed to developing eco-friendly solutions that reduce environmental impact while enhancing efficiency and productivity for businesses and individuals alike.';
  </script>