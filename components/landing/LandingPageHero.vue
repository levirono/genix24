<template>
  <section
    id="hero"
    class="section-shell relative flex min-h-[72vh] w-full flex-col items-center justify-center gap-8 overflow-hidden px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12 lg:px-8"
  >
    <!-- Left / Content column -->
    <div class="relative z-10 flex w-full flex-col items-center justify-center space-y-6 text-center md:max-w-xl md:items-start md:text-left">
      <p class="inline-flex items-center gap-2 rounded-full bg-brand-green/5 px-3 py-1 text-xs font-semibold text-brand-green">
        <span class="pill-bullet pill-bullet--green"></span>
        Genixl is your engineering partner for modern software.
      </p>

      <h1
        class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl"
      >
        Building reliable
        <span class="bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue bg-clip-text text-transparent">
          digital products
        </span>
        for teams that need to move fast.
      </h1>

      <p class="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
        We design, build, and maintain web platforms, mobile apps, and cloud-native systems that feel polished on
        the surface and are engineered for scale underneath.
      </p>

      <div class="flex w-full flex-wrap items-center justify-center gap-4 md:justify-start">
        <NuxtLink
          to="/services"
          class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-orange px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg"
        >
          Explore services
        </NuxtLink>
        <NuxtLink
          to="/contact-us"
          class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition hover:border-brand-green/50 hover:text-brand-green dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-brand-green/60"
        >
          Book a discovery call
        </NuxtLink>
      </div>

      <div class="mt-4 grid w-full max-w-lg grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
        <div class="rounded-2xl border border-brand-green/15 bg-white/70 p-3 shadow-sm backdrop-blur-sm dark:border-brand-green/20 dark:bg-slate-900/70">
          <div class="mb-1 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-wide text-brand-green">
            <span class="pill-bullet pill-bullet--green"></span>
            Delivery
          </div>
          <p>Product squads that ship end‑to‑end: UX, engineering, QA, and DevOps.</p>
        </div>
        <div class="rounded-2xl border border-brand-orange/15 bg-white/70 p-3 shadow-sm backdrop-blur-sm dark:border-brand-orange/20 dark:bg-slate-900/70">
          <div class="mb-1 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-wide text-brand-orange">
            <span class="pill-bullet pill-bullet--orange"></span>
            Platforms
          </div>
          <p>Cloud-native foundations for SaaS, internal tools, and data‑driven products.</p>
        </div>
      </div>
    </div>

    <!-- Right / Visual card column -->
    <div
      class="relative z-10 flex w-full items-center justify-center md:w-auto md:flex-1"
      aria-hidden="true"
    >
      <!-- Glow blob — clipped to parent, won't overflow -->
      <div
        class="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-green/15 via-brand-orange/10 to-brand-blue/15 blur-3xl"
      ></div>

      <div
        class="float-animation relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/80 md:max-w-md"
      >
        <div class="grid w-full grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-200">
          <div class="rounded-2xl bg-brand-green/5 p-3">
            <div class="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-green">
              Web platforms
            </div>
            <p>Marketing sites, dashboards, and B2B portals tailored to your workflows.</p>
          </div>
          <div class="rounded-2xl bg-brand-orange/5 p-3">
            <div class="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-orange">
              Mobile apps
            </div>
            <p>Product‑grade iOS and Android experiences from a single codebase.</p>
          </div>
          <div class="rounded-2xl bg-brand-blue/5 p-3">
            <div class="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-blue">
              Cloud & DevOps
            </div>
            <p>Secure, observable infrastructure on modern cloud stacks.</p>
          </div>
          <div class="rounded-2xl bg-slate-900 p-3 text-slate-100 dark:bg-slate-100 dark:text-slate-900">
            <div class="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide">
              From idea to launch
            </div>
            <p>We plug into your team and ship iteratively, not in big bangs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>