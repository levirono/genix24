<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-200">
      <Header />
      <main class="flex-1 px-4 py-12 md:px-8">
        <LandingHeader/>
        <LandingPageHero />
        <LandingFeatues />
        <LandingProducts />
        <LandingWhyChooseUs />
        <LandingAboutUs />
      </main>
    </div>
  </template>
  
  <script setup>
  
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