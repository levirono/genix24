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
      <!-- <div class="mt-12">
        <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Send Message</button>
          </div>
        </form>
      </div> -->
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