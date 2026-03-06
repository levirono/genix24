<template>
  <section id="services" class="section-shell mt-20 space-y-4 text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
      Services
    </p>
    <h2 class="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl">
      What we do.
    </h2>
    <p class="mx-auto max-w-xl text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
      A quick look at what we offer. Explore the full breakdown on the services page.
    </p>

    <ul class="mx-auto flex flex-col items-center space-y-3 text-sm">
      <li class="flex items-center gap-3 border-l-4 border-brand-green pl-3 text-brand-green">
        Web platforms
      </li>
      <li class="flex items-center gap-3 border-l-4 border-brand-orange pl-3 text-brand-orange">
        Mobile apps
      </li>
      <li class="flex items-center gap-3 border-l-4 border-brand-blue pl-3 text-brand-blue">
        Software installation and maintenance
      </li>
      <li class="flex items-center gap-3 border-l-4 border-brand-green pl-3 text-brand-green">
        Consulting
      </li>
    </ul>

    <div class="mt-4">
      <NuxtLink
        to="/our-services"
        class="inline-flex items-center justify-center rounded-full border border-brand-green/40 bg-brand-green/5 px-6 py-2 text-xs font-semibold text-brand-green shadow-sm transition hover:border-brand-green hover:bg-brand-green/10"
      >
        View all services
      </NuxtLink>
    </div>
  </section>
</template>