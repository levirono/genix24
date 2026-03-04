<template>
  <section id="industries" class="section-shell mt-20 space-y-8">
    <div class="text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
        Why teams stay with Genixl
      </p>
      <h2 class="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
        Built for product, engineering, and operations leaders.
      </h2>
      <p class="mt-3 max-w-3xl mx-auto text-sm text-slate-600 dark:text-slate-300">
        A condensed view of how we partner with product, engineering, and operations leaders. The industries page
        goes deeper into typical engagement patterns.
      </p>

      <NuxtLink
        to="/industries"
        class="mt-5 inline-flex items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue/5 px-4 py-2 text-xs font-semibold text-brand-blue shadow-sm transition hover:border-brand-blue hover:bg-brand-blue/10"
      >
        Explore how we work with teams
      </NuxtLink>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="(feature, i) in features"
        :key="feature.title"
        ref="elRefs[i]"
        class="card-surface card-hover relative overflow-hidden opacity-0 translate-y-6 transition-all duration-700"
        :class="isVisible[i] ? 'opacity-100 translate-y-0' : ''"
      >
        <div
          class="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-b-full bg-gradient-to-b opacity-40"
          :class="feature.tint"
        ></div>
        <div class="relative p-5 space-y-3">
          <div class="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
            <span
              class="h-1.5 w-6 rounded-full bg-gradient-to-r"
              :class="feature.tint"
            ></span>
            <span>{{ feature.label }}</span>
          </div>
          <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {{ feature.title }}
          </h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {{ feature.description }}
          </p>
          <ul class="mt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-300">
            <li v-for="point in feature.points" :key="point" class="flex items-start gap-2">
              <span class="pill-bullet pill-bullet--green"></span>
              <span>{{ point }}</span>
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

const features = [
  {
    label: 'Execution',
    title: 'Delivery without surprises',
    description:
      'We work in tight feedback loops with clear demos and changelogs every sprint so your roadmap never feels opaque.',
    points: ['Roadmap aligned with business outcomes', 'Predictable release cadence', 'Senior ownership on every project'],
    tint: 'from-brand-green/25 via-brand-green/5 to-transparent',
  },
  {
    label: 'Engineering',
    title: 'Modern, maintainable stacks',
    description:
      'Opinionated patterns for frontend, backend, and DevOps keep your product easy to extend long after launch.',
    points: ['Clean boundaries between services', 'Testing and observability baked in', 'Security and performance reviews'],
    tint: 'from-brand-blue/25 via-brand-blue/5 to-transparent',
  },
  {
    label: 'Partnership',
    title: 'A long‑term product partner',
    description:
      'We can stay on as a remote product team or help you transition to your own in‑house engineers smoothly.',
    points: ['Knowledge sharing and documentation', 'Onboarding support for new hires', 'Flexible retainers for ongoing work'],
    tint: 'from-brand-orange/25 via-brand-orange/5 to-transparent',
  },
]

const elRefs = ref([])
const isVisible = ref([])

onMounted(() => {
  features.forEach((_, i) => {
    const { el, isVisible: vis } = useScrollReveal()
    elRefs.value[i] = el
    isVisible.value[i] = vis
  })
})
</script>
