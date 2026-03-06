<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-10">
      <header class="max-w-4xl mx-auto text-center space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          Services
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
          <span class="bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue bg-clip-text text-transparent">
            Everything you need
          </span>
          to design, build, and run modern software.
        </h1>
        <p class="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Our services organised into streams. Start where it makes sense: shaping a new product, unblocking a team, or modernising an existing platform.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="stream in streams"
          :key="stream.title"
          class="card-surface card-hover p-6 space-y-3"
        >
          <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {{ stream.title }}
          </h2>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            {{ stream.description }}
          </p>
          <ul class="mt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-300">
            <li v-for="item in stream.items" :key="item" class="flex items-start gap-2">
              <span
                class="pill-bullet"
                :class="stream.accent"
              ></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>

      <footer class="mt-4 max-w-3xl text-xs text-slate-600 dark:text-slate-300">
        For each engagement we tailor a team and delivery model that matches your timeline and internal capacity
        instead of forcing you into a fixed package.
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
const streams = [
  {
    title: 'Web platforms',
    description:
      'Marketing sites, dashboards, and B2B portals tailored to your workflows and business goals.',
    items: ['Marketing and corporate websites', 'Dashboards and internal tools', 'B2B portals and web applications'],
    accent: 'pill-bullet--green',
  },
  {
    title: 'Mobile apps',
    description:
      'Product-grade iOS and Android experiences built from a single codebase for speed and consistency.',
    items: ['iOS and Android application development', 'Cross-platform solutions', 'App maintenance and updates'],
    accent: 'pill-bullet--orange',
  },
  {
    title: 'Software installation and maintenance',
    description:
      'Reliable setup, configuration, and ongoing maintenance of software systems to keep your operations running smoothly.',
    items: ['Software setup and configuration', 'Ongoing maintenance and support', 'Performance monitoring and updates'],
    accent: 'pill-bullet--blue',
  },
  {
    title: 'Consulting',
    description:
      'Expert guidance on software strategy, system design, and technology choices to help you make informed decisions.',
    items: ['Software strategy and roadmapping', 'System design and architecture review', 'Technology selection and advisory'],
    accent: 'pill-bullet--green',
  },
]
</script>