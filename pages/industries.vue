<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-12">
      <header class="max-w-3xl space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Industries & teams
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          How we partner with product, engineering, and operations leaders.
        </h1>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          We tend to work with teams that have clear goals but limited time or capacity to execute. Our role is to
          provide a stable product squad that can plug into your context and start shipping with minimal overhead.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="block in blocks"
          :key="block.title"
          class="card-surface card-hover relative overflow-hidden p-6 space-y-3"
        >
          <div
            class="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-b-full bg-gradient-to-b opacity-40"
            :class="block.tint"
          ></div>
          <div class="relative space-y-3">
            <div class="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              <span
                class="h-1.5 w-6 rounded-full bg-gradient-to-r"
                :class="block.tint"
              ></span>
              <span>{{ block.label }}</span>
            </div>
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {{ block.title }}
            </h2>
            <p class="text-xs text-slate-600 dark:text-slate-300">
              {{ block.description }}
            </p>
            <ul class="mt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-300">
              <li
                v-for="point in block.points"
                :key="point"
                class="flex items-start gap-2"
              >
                <span class="pill-bullet pill-bullet--green"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <footer class="max-w-3xl text-xs text-slate-600 dark:text-slate-300">
        If your situation is close to any of these, we can usually add value quickly. If it is different, we are still
        happy to talk and see whether we are the right fit or can recommend someone who is.
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
const blocks = [
  {
    label: 'Product',
    title: 'High‑growth product teams',
    description:
      'Teams with clear market traction that need to keep shipping without burning out internal engineers.',
    points: [
      'Own a stream of work while your team focuses on core roadmap items',
      'Help explore adjacent bets and validate new product ideas',
      'Introduce structure around design systems and release processes',
    ],
    tint: 'from-brand-green/25 via-brand-green/5 to-transparent',
  },
  {
    label: 'Operations',
    title: 'Operations‑driven organisations',
    description:
      'Companies whose operations teams live inside spreadsheets or legacy tools and need software that fits reality.',
    points: [
      'Map existing workflows into approachable digital tools',
      'Connect field, back‑office, and management data in one place',
      'Instrument dashboards that track the metrics that actually matter',
    ],
    tint: 'from-brand-orange/25 via-brand-orange/5 to-transparent',
  },
  {
    label: 'Engineering',
    title: 'Engineering‑led companies',
    description:
      'Teams with strong technical depth that want a partner to accelerate delivery or modernise key systems.',
    points: [
      'Co‑design and implement new architectures or migrations',
      'Provide extra senior capacity without adding permanent headcount immediately',
      'Support hiring, onboarding, and mentoring of new team members',
    ],
    tint: 'from-brand-blue/25 via-brand-blue/5 to-transparent',
  },
]
</script>

