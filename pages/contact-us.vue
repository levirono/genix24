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
