<template>
  <section id="services" class="section-shell mt-20 space-y-8">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          Services
        </p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Cross‑functional teams for modern software delivery.
        </h2>
        <p class="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A concise view of how we structure delivery across web, mobile, and cloud. Explore the full breakdown on
          the services page.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-2 text-xs text-slate-600 dark:text-slate-300 md:text-[0.7rem]">
        <div class="inline-flex items-center rounded-full bg-brand-green/8 px-3 py-1">
          <span class="pill-bullet pill-bullet--green"></span>
          Product discovery
        </div>
        <div class="inline-flex items-center rounded-full bg-brand-orange/8 px-3 py-1">
          <span class="pill-bullet pill-bullet--orange"></span>
          Delivery squads
        </div>
        <div class="inline-flex items-center rounded-full bg-brand-blue/8 px-3 py-1">
          <span class="pill-bullet pill-bullet--blue"></span>
          Long‑term support
        </div>
      </div>
      <NuxtLink
        to="/our-services"
        class="inline-flex items-center justify-center rounded-full border border-brand-green/40 bg-brand-green/5 px-4 py-2 text-xs font-semibold text-brand-green shadow-sm transition hover:border-brand-green hover:bg-brand-green/10"
      >
        View all services
      </NuxtLink>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="(service, index) in services"
        :key="service.title"
        ref="elRefs[index]"
        class="card-surface card-hover relative overflow-hidden opacity-0 translate-y-6 transition-all duration-700"
        :class="isVisible[index] ? 'opacity-100 translate-y-0' : ''"
      >
        <div
          class="pointer-events-none absolute inset-x-6 top-0 h-24 rounded-b-full bg-gradient-to-b opacity-40"
          :class="service.tint"
        ></div>
        <div class="relative p-5 space-y-4">
          <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {{ service.title }}
          </h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {{ service.description }}
          </p>
          <ul class="mt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-300">
            <li v-for="detail in service.details" :key="detail" class="flex items-start gap-2">
              <span class="pill-bullet pill-bullet--green" v-if="service.accent === 'green'"></span>
              <span class="pill-bullet pill-bullet--orange" v-else-if="service.accent === 'orange'"></span>
              <span class="pill-bullet pill-bullet--blue" v-else></span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../useScrollReveal'

const services = [
  {
    title: 'Web product engineering',
    description:
      'Design and build marketing sites, dashboards, internal tools, and SaaS platforms that stay fast as they grow.',
    details: ['Design systems and UX flows', 'Component‑based frontends (Nuxt, React)', 'API integration and testing'],
    tint: 'from-brand-green/20 via-brand-green/5 to-transparent',
    accent: 'green',
  },
  {
    title: 'Mobile & cross‑platform apps',
    description:
      'From MVPs to production apps running in the store, we deliver smooth, reliable mobile experiences.',
    details: ['iOS and Android from one codebase', 'Offline‑first and real‑time features', 'Analytics and experimentation'],
    tint: 'from-brand-orange/20 via-brand-orange/5 to-transparent',
    accent: 'orange',
  },
  {
    title: 'Cloud, integrations & DevOps',
    description:
      'Modern infrastructure to keep your product observable, secure, and easy to ship to.',
    details: ['Cloud architecture and CI/CD pipelines', 'APIs, auth, and third‑party integrations', 'Monitoring, logging, and alerting'],
    tint: 'from-brand-blue/25 via-brand-blue/5 to-transparent',
    accent: 'blue',
  },
]

const elRefs = ref([])
const isVisible = ref([])

onMounted(() => {
  services.forEach((_, i) => {
    const { el, isVisible: vis } = useScrollReveal()
    elRefs.value[i] = el
    isVisible.value[i] = vis
  })
})
</script>

