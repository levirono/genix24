<template>
    <section id="contact-us" class="mt-20">
      <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Contact Us
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="method in contactMethods" :key="method.title" class="text-center">
          <div class="text-5xl mb-4" v-html="method.icon"></div>
          <h3 class="text-2xl font-semibold mb-2">{{ method.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ method.description }}</p>
        </div>
      </div>
      <!--    -->
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      description: "Call us at +254 793858343"
    },
    {
      icon: "✉️",
      title: "Email",
      description: "Send us an email at genixlsolutions@gmail.com"
    },
    {
      icon: "🏢",
      title: "Office",
      description: "Visit us at 123 Tech Street, Innovation City"
    }
  ];
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
//   const submitForm = () => {
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', form.value);
//     // Reset the form after submission
//     form.value = { name: '', email: '', message: '' };
//     // You might also want to show a success message to the user
//   };
  </script>