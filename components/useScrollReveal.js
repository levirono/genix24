// useScrollReveal.js
// A composable for scroll-based reveal animations using Intersection Observer
import { onMounted, ref } from 'vue';

export function useScrollReveal(options = {}) {
  const el = ref(null);
  const isVisible = ref(false);

  onMounted(() => {
    if (!el.value) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el.value);
  });

  return { el, isVisible };
}
