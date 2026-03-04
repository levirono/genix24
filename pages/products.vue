<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-12">
      <header class="max-w-3xl space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
          Products
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Focused tools created and maintained by the Genixl team.
        </h1>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          These products are shaped by work we do with clients. Each one is designed to solve a clear problem in
          mobility, operations, or engineering workflow — and can be integrated into your own stack.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="product in products"
          :key="product.title"
          class="card-surface card-hover relative overflow-hidden p-6 space-y-3"
        >
          <div
            class="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-b-full bg-gradient-to-b opacity-40"
            :class="product.tint"
          ></div>
          <div class="relative space-y-3">
            <div class="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              <span class="pill-bullet pill-bullet--orange"></span>
              <span>{{ product.category }}</span>
            </div>
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {{ product.title }}
            </h2>
            <p class="text-xs text-slate-600 dark:text-slate-300">
              {{ product.description }}
            </p>
            <ul class="mt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-300">
              <li
                v-for="highlight in product.highlights"
                :key="highlight"
                class="flex items-start gap-2"
              >
                <span class="pill-bullet pill-bullet--blue"></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
            <div class="pt-3">
              <NuxtLink
                v-if="product.link"
                :to="product.link"
                class="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-green"
              >
                View live product
              </NuxtLink>
              <span v-else class="text-[0.68rem] uppercase tracking-wide text-slate-400">
                Currently in private beta
              </span>
            </div>
          </div>
        </article>
      </div>

      <footer class="max-w-3xl text-xs text-slate-600 dark:text-slate-300">
        If you are interested in partnering around one of these products — or building something similar tailored to
        your organisation — mention it when you reach out on the contact page.
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'FuelFinder',
    category: 'Mobility',
    description:
      'Helps drivers and fleet operators discover nearby fuel stations, availability, and pricing in real time.',
    highlights: [
      'Location‑aware station search with filters',
      'Availability and pricing signals sourced from the network',
      'Integration points for fleet dashboards or consumer apps',
    ],
    link: '/products/fuelfinder',
    tint: 'from-brand-orange/25 via-brand-orange/5 to-transparent',
  },
  {
    title: 'One Workspace',
    category: 'Operations',
    description:
      'A unified workspace for tracking inventory, approvals, and processes without spreadsheet sprawl.',
    highlights: [
      'Configurable data models and views tailored to teams',
      'Role‑based access, audit trails, and activity feeds',
      'Responsive experience across web and mobile devices',
    ],
    link: '/products/one-workspace',
    tint: 'from-brand-green/25 via-brand-green/5 to-transparent',
  },
  {
    title: 'Genixl Labs',
    category: 'Experimentation',
    description:
      'Our internal lab for testing new UI patterns, frameworks, and automation before bringing them into client work.',
    highlights: [
      'Performance benchmarking sandboxes and testbeds',
      'Starter kits and templates for common product types',
      'Continuously updated best‑practice stacks for web, mobile, and cloud',
    ],
    link: 'https://gr-genixls-projects.vercel.app/',
    tint: 'from-brand-blue/25 via-brand-blue/5 to-transparent',
  },
]
</script>

