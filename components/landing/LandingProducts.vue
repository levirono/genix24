<template>
  <section id="our-products" class="section-shell mt-16 space-y-4 text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
      Products
    </p>
    <h2 class="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl">
      Explore the tools we are building at Genixl.
    </h2>
    <p class="mx-auto max-w-xl text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
      Products have their own space where you can see details, use‑cases, and how they can plug into your stack.
    </p>
    <div class="mt-4">
      <NuxtLink
        to="/products"
        class="inline-flex items-center justify-center rounded-full border border-brand-orange/40 bg-brand-orange/5 px-6 py-2 text-xs font-semibold text-brand-orange shadow-sm transition hover:border-brand-orange hover:bg-brand-orange/10"
      >
        View all products
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// Homepage products section is intentionally minimal and only links to the full products page.
</script>

