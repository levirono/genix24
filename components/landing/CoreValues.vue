<template>
    <section id="about-us" class="space-y-8">
      <UCard>
        <template #header>
          <h2 class="text-2xl font-bold">Our Core Values</h2>
        </template>
        <ul class="space-y-4">
          <li v-for="value in coreValues" :key="value.title">
            <h3 class="text-lg font-semibold">{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </li>
        </ul>
      </UCard>
  
      <UCard>
        <template #header>
          <h2 class="text-2xl font-bold">Our Mission</h2>
        </template>
        <p>{{ mission }}</p>
      </UCard>
    </section>
  </template>
  
  <script setup>
  const coreValues = [
    {
      title: 'Sustainability',
      description: 'We prioritize environmental responsibility in all our innovations and operations.'
    },
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create eco-friendly solutions.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to drive positive change.'
    }
  ]
  
  const mission = 'At GreenTech Solutions, our mission is to harness the power of innovative technology to create a more sustainable future. We are committed to developing eco-friendly solutions that reduce environmental impact while enhancing efficiency and productivity for businesses and individuals alike.'
  </script>