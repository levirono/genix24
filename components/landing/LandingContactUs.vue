<template>
  <section id="contact-us" class="section-shell mt-20 space-y-8">
    <div class="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Contact
        </p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Ready to discuss a project or product idea?
        </h2>
        <p class="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
          Share where you are today, what success looks like in twelve months, and we will respond with a concise
          plan and a realistic delivery window.
        </p>

        <div class="mt-6 grid gap-4 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-3">
          <div v-for="method in contactMethods" :key="method.title" class="card-surface p-4">
            <h3 class="text-[0.78rem] font-semibold text-slate-900 dark:text-slate-50">
              {{ method.title }}
            </h3>
            <p class="mt-2 break-words">
              {{ method.description }}
            </p>
          </div>
        </div>
      </div>

      <form
        class="card-surface space-y-4 p-5"
        @submit.prevent="submitForm"
      >
        <div class="space-y-1">
          <label class="text-xs font-medium text-slate-700 dark:text-slate-200">Name</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand-green focus:ring-1 focus:ring-brand-green dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-medium text-slate-700 dark:text-slate-200">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand-green focus:ring-1 focus:ring-brand-green dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-medium text-slate-700 dark:text-slate-200">Project overview</label>
          <textarea
            v-model="form.message"
            rows="4"
            required
            class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand-green focus:ring-1 focus:ring-brand-green dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            placeholder="Tell us about your product, timelines, and any constraints."
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="submitting"
          class="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow-md disabled:opacity-60"
        >
          <span v-if="submitting">Sending...</span>
          <span v-else>Send message</span>
        </button>
        <p v-if="success" class="text-[0.7rem] text-brand-green">
          Thanks for reaching out — we will get back to you shortly.
        </p>
        <p v-if="error" class="text-[0.7rem] text-red-500">
          Something went wrong. Please try again.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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
    description: 'Eldoret, Kenya (serving clients remotely worldwide)',
  },
]

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitting = ref(false)
const success = ref(false)
const error = ref(false)

const submitForm = async () => {
  try {
    submitting.value = true
    success.value = false
    error.value = false
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
    })
    success.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (e) {
    error.value = true
  } finally {
    submitting.value = false
  }
}
</script>
