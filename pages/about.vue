<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-12">
      <header class="max-w-4xl mx-auto text-center space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          About
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
          A small team of 
          <span class="bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue bg-clip-text text-transparent">
            engineers, designers, and product thinkers.
          </span>
        </h1>
        <p class="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Genixl is a software company focused on building stable, scalable, and thoughtfully designed digital products.
          We work with startups and established teams that need a trusted partner.
        </p>
      </header>

      <div class="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
        <article class="space-y-4">
          <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Mission
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Our work spans product discovery, UX and visual design, hands‑on engineering, and long‑term operations.
            We favour calm, focused collaboration over noisy releases so your team stays confident about where the product is going.
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            We typically embed with your team for several months, then either continue as a product partner or help
            you stand up your own internal engineering organisation.
          </p>
        </article>

        <aside class="space-y-4">
          <div class="card-surface p-5">
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Core principles
            </h2>
            <ul class="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--green"></span>
                <span>Design software around people and real workflows, not just features.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--orange"></span>
                <span>Ship in small, observable increments backed by tests and monitoring.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--blue"></span>
                <span>Leave every codebase healthier than we found it with better structure and documentation.</span>
              </li>
            </ul>
          </div>

          <div class="card-surface p-5">
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              How to work with us
            </h2>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-300">
              Most collaborations start with a short discovery phase to map your goals, constraints, and existing
              systems. From there we propose a delivery model — from a focused build to an ongoing product partnership.
            </p>
            <NuxtLink
              to="/contact-us"
              class="mt-4 inline-flex rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              Start a conversation
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>