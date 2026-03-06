<template>
    <section class="section-shell min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <div class="w-full max-w-2xl">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center gap-2 rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-blue mb-6">
                    <span class="pill-bullet pill-bullet--blue"></span>
                    Get in touch
                </div>
                <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl mb-4">
                    Contact Us
                </h1>
                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            <!-- Contact Methods -->
            <div class="grid gap-4 mb-12 md:grid-cols-3">
                <div v-for="method in contactMethods" :key="method.title" class="card-surface p-4">
                    <h3 class="text-[0.78rem] font-semibold text-slate-900 dark:text-slate-50">
                        {{ method.title }}
                    </h3>
                    <p class="mt-2 break-words text-xs text-slate-600 dark:text-slate-300">
                        {{ method.description }}
                    </p>
                </div>
            </div>

            <!-- Social Media Icons -->
            <div class="flex items-center justify-center gap-4 mb-12">
                <a href="#" class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-green dark:hover:text-brand-green" title="X">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.42l7.728-8.835L1.424 2.25h6.68l4.618 6.11 5.222-6.11zM16.884 19.75h1.832L7.084 4.126H5.117l11.767 15.624z"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-green dark:hover:text-brand-green" title="LinkedIn">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-green dark:hover:text-brand-green" title="GitHub">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-green dark:hover:text-brand-green" title="Instagram">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.603-2.368 1.353-.75.75-1.09 1.589-1.353 2.368-.267.788-.468 1.658-.6 2.836-.059 1.28-.074 1.689-.074 4.947 0 3.259.015 3.668.074 4.948.132 1.178.333 2.048.6 2.836.263.779.603 1.618 1.353 2.368.75.75 1.589 1.09 2.368 1.353.788.267 1.658.468 2.836.6 1.28.059 1.689.074 4.948.074 3.259 0 3.668-.015 4.948-.074 1.178-.132 2.048-.333 2.836-.6.779-.263 1.618-.603 2.368-1.353.75-.75 1.09-1.589 1.353-2.368.267-.788.468-1.658.6-2.836.059-1.28.074-1.689.074-4.948 0-3.259-.015-3.668-.074-4.948-.132-1.178-.333-2.048-.6-2.836-.263-.779-.603-1.618-1.353-2.368-.75-.75-1.589-1.09-2.368-1.353-.788-.267-1.658-.468-2.836-.6-1.28-.059-1.689-.074-4.948-.074zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.404.561.217 1.001.477 1.44.916.44.439.699.878.916 1.439.16.422.35 1.057.404 2.227.055 1.264.064 1.646.064 4.85 0 3.204-.009 3.586-.064 4.85-.054 1.17-.244 1.805-.404 2.227-.217.561-.477 1.001-.916 1.44-.439.44-.878.699-1.439.916-.422.16-1.057.35-2.227.404-1.264.055-1.646.064-4.85.064-3.204 0-3.586-.009-4.85-.064-1.17-.054-1.805-.244-2.227-.404-.561-.217-1.001-.477-1.44-.916-.44-.439-.699-.878-.916-1.439-.16-.422-.35-1.057-.404-2.227-.055-1.264-.064-1.646-.064-4.85 0-3.204.009-3.586.064-4.85.054-1.17.244-1.805.404-2.227.217-.561.477-1.001.916-1.44.439-.44.878-.699 1.439-.916.422-.16 1.057-.35 2.227-.404 1.264-.055 1.646-.064 4.85-.064zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-green dark:hover:text-brand-green" title="Facebook">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </a>
            </div>

            <!-- Contact Form -->
            <form class="card-surface p-8 md:p-12" @submit.prevent="submitForm">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Name
                        </label>
                        <input v-model="name"
                            class="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:placeholder-slate-400"
                            type="text" placeholder="Your Name" required />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Email
                        </label>
                        <input v-model="email"
                            class="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:placeholder-slate-400"
                            type="email" placeholder="your@email.com" required />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Message
                        </label>
                        <textarea v-model="message"
                            class="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:placeholder-slate-400 resize-none"
                            rows="5" placeholder="Tell us about your project or inquiry..." required></textarea>
                    </div>
                </div>

                <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button :disabled="isLoading"
                        class="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit">
                        <span v-if="isLoading" class="flex items-center gap-2">
                            <div class="loader"></div>
                            Sending...
                        </span>
                        <span v-else>Send Message</span>
                    </button>
                </div>

                <!-- Messages -->
                <div v-if="success" class="mt-6 rounded-xl bg-brand-green/10 border border-brand-green/20 p-4">
                    <div class="flex items-center gap-2">
                        <span class="pill-bullet pill-bullet--green"></span>
                        <p class="text-sm font-medium text-brand-green dark:text-brand-greenSoft">
                            Message sent successfully! We'll get back to you soon.
                        </p>
                    </div>
                </div>

                <div v-if="errorMsg" class="mt-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                        <p class="text-sm font-medium text-red-700 dark:text-red-300">
                            {{ errorMsg }}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">    
import { ref } from 'vue';

const contactMethods = [
  {
    title: 'Email',
    description: 'genixlsolutions@gmail.com',
  },
  {
    title: 'Phone',
    description: '+254 793 858 343',
  },
  {
    title: 'Location',  
    description: 'Nairobi, Kenya',
  },
]

const name = ref('');
const email = ref('');
const message = ref('');
const isLoading = ref(false);
const success = ref(false);
const errorMsg = ref('');

const submitForm = async () => {
    isLoading.value = true;
    errorMsg.value = '';
    success.value = false;
    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: { name: name.value, email: email.value, message: message.value }
        });
        success.value = true;
        name.value = '';
        email.value = '';
        message.value = '';
    } catch (err) {
        errorMsg.value = 'Failed to send message. Please try again.';
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.loader {
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: spin 0.75s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
