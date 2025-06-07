<template>
    <div class="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4">
        <h1
            class="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
            Our Services</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            <div
                class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src="/images/tech.jpg" alt="Software Development"
                    class="w-20 h-20 mb-4 rounded-full object-cover shadow-md" />
                <h2
                    class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
                    Software Development</h2>
                <p class="text-gray-600 dark:text-gray-300">Custom software solutions tailored to your business needs,
                    ensuring scalability, security, and performance.</p>
            </div>
            <div
                class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src="/public/one.png" alt="Website Development"
                    class="w-20 h-20 mb-4 rounded-full object-cover shadow-md" />
                <h2
                    class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500 dark:from-amber-400 dark:to-red-400">
                    Website Development</h2>
                <p class="text-gray-600 dark:text-gray-300">Modern, responsive, and SEO-friendly websites that elevate
                    your online presence and engage your audience.</p>
            </div>
            <div
                class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src="/public/fuelfinder.jpg" alt="Mobile Application"
                    class="w-20 h-20 mb-4 rounded-full object-cover shadow-md" />
                <h2
                    class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    Mobile Application</h2>
                <p class="text-gray-600 dark:text-gray-300">Cross-platform mobile apps with intuitive UI/UX, built for
                    both Android and iOS to reach your customers everywhere.</p>
            </div>
            <div
                class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src="/public/sustain.jpeg" alt="Online Services"
                    class="w-20 h-20 mb-4 rounded-full object-cover shadow-md" />
                <h2
                    class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400">
                    Online Services</h2>
                <p class="text-gray-600 dark:text-gray-300">Cloud-based solutions, SaaS products, and digital platforms
                    to streamline your business operations online.</p>
            </div>
            <div
                class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src="/public/innovation.jpeg" alt="Tech Consultancy"
                    class="w-20 h-20 mb-4 rounded-full object-cover shadow-md" />
                <h2
                    class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
                    Tech Consultancy</h2>
                <p class="text-gray-600 dark:text-gray-300">Expert advice and strategic guidance to help you leverage
                    technology for growth, efficiency, and innovation.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ...existing code...
</script>
