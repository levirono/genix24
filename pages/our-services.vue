<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-10">
      <header class="max-w-3xl space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          Services
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Everything you need to design, build, and run modern software.
        </h1>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Our services are organised into streams so you can start where it makes the most sense: shaping a new
          product, unblocking a team, or modernising an existing platform.
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
    title: 'Product strategy and discovery',
    description:
      'Clarify problems, align stakeholders, and turn ideas into a validated, prioritised roadmap backed by prototypes.',
    items: ['User and stakeholder interviews', 'Journey mapping and opportunity framing', 'Low‑fidelity prototypes and testing'],
    accent: 'pill-bullet--green',
  },
  {
    title: 'Experience and interface design',
    description:
      'Design systems, interaction patterns, and screen flows that feel intentional across web and mobile.',
    items: ['Design systems and tokens', 'Responsive layouts and components', 'Accessible, production‑ready specs'],
    accent: 'pill-bullet--orange',
  },
  {
    title: 'Full‑stack engineering',
    description:
      'Hands‑on engineering teams that can own features from API design to polished frontends and deployments.',
    items: ['Web and mobile application development', 'API and integration work', 'Testing, monitoring, and observability'],
    accent: 'pill-bullet--blue',
  },
  {
    title: 'Cloud, DevOps, and reliability',
    description:
      'Set up or improve the infrastructure that keeps your software fast, secure, and easy to ship.',
    items: ['Cloud architecture and infrastructure as code', 'CI/CD pipelines and release automation', 'Performance and security reviews'],
    accent: 'pill-bullet--green',
  },
  {
    title: 'Data and analytics enablement',
    description:
      'Make better decisions with instrumentation, dashboards, and experimentation that your team can actually use.',
    items: ['Event tracking and analytics setup', 'Product and growth dashboards', 'Experimentation frameworks'],
    accent: 'pill-bullet--orange',
  },
  {
    title: 'Advisory and team enablement',
    description:
      'Coaching and architecture support for teams that want to level up their own engineering practices.',
    items: ['Architecture and codebase reviews', 'Pairing and technical leadership', 'Hiring and onboarding support'],
    accent: 'pill-bullet--blue',
  },
]
</script>

