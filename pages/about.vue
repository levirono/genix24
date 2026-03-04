<template>
  <div class="min-h-screen bg-gradient-to-b from-brand-surfaceLight via-white to-brand-surfaceLight dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
    <section class="section-shell py-16 space-y-12">
      <header class="max-w-3xl space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          About
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Genixl is an independent software company focused on calm, reliable delivery.
        </h1>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          We bring together strategy, design, and engineering to help teams ship products that feel carefully crafted
          without slowing down the pace of iteration.
        </p>
      </header>

      <div class="grid gap-10 md:grid-cols-2 md:items-start">
        <article class="space-y-4">
          <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Mission
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Our mission is to build digital systems that last: products and platforms that are straightforward for
            teams to understand, extend, and operate years after launch. We do that by pairing experienced
            practitioners with opinionated but flexible technology choices.
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Whether we are helping a founder reach product–market fit or supporting a larger organisation, we focus on
            clear communication, thoughtful trade‑offs, and leaving behind a healthier product than we found.
          </p>
        </article>

        <aside class="space-y-4">
          <div class="card-surface p-5">
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              What we focus on
            </h2>
            <ul class="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--green"></span>
                <span>Product‑grade web and mobile applications that feel fast and dependable.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--orange"></span>
                <span>Cloud, infrastructure, and DevOps foundations that support growth.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="pill-bullet pill-bullet--blue"></span>
                <span>Design systems and UX that make complex workflows feel simple.</span>
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

