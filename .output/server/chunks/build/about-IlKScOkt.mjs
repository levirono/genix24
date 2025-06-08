import { a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './tech-BItDUouP.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto py-16 px-4" }, _attrs))}><div class="text-center mb-12"><h1 class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"> About Genixl </h1><p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Genixl is a forward-thinking software technology company dedicated to delivering innovative digital solutions that empower businesses and individuals to thrive in a rapidly evolving world. Our passion for excellence and commitment to customer success set us apart in the tech industry. </p></div><div class="grid md:grid-cols-2 gap-10 items-start"><div><h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-emerald-400">Our Mission</h2><p class="mb-6 text-gray-700 dark:text-gray-300"> At Genixl, our mission is to harness the power of technology to create impactful solutions that drive growth, efficiency, and transformation. We believe in making technology accessible, intuitive, and valuable for everyone. </p><h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-emerald-400">What We Offer</h2><ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300"><li>Custom software development tailored to your business needs</li><li>Cutting-edge SaaS products for productivity and collaboration</li><li>Mobile and web app solutions with seamless user experiences</li><li>Consulting and digital transformation services</li><li>Ongoing support and partnership for your digital journey</li></ul></div><div><h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-emerald-400">Why Choose Genixl?</h2><ul class="space-y-4"><li class="flex items-start gap-3"><span class="text-2xl">\u{1F4A1}</span><span>Innovative mindset: We constantly explore new technologies and creative solutions.</span></li><li class="flex items-start gap-3"><span class="text-2xl">\u{1F91D}</span><span>Customer-centric approach: Your goals and satisfaction are at the heart of everything we do.</span></li><li class="flex items-start gap-3"><span class="text-2xl">\u{1F680}</span><span>Proven expertise: Our team brings years of experience in software engineering and digital strategy.</span></li><li class="flex items-start gap-3"><span class="text-2xl">\u{1F331}</span><span>Commitment to sustainability: We build solutions that are efficient, scalable, and environmentally conscious.</span></li></ul><div class="mt-8"><img${ssrRenderAttr("src", _imports_0)} alt="Genixl Team" class="rounded-xl shadow-lg w-full object-cover"></div></div></div><div class="mt-16 text-center"><h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-emerald-400">Join Us on the Journey</h2><p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6"> Whether you are a startup, a growing business, or an enterprise, Genixl is your trusted partner for digital innovation. Let us help you unlock new opportunities and achieve your vision with technology that works for you. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-us",
        class: "inline-block px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg shadow hover:bg-blue-600 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us Today `);
          } else {
            return [
              createTextVNode(" Contact Us Today ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-IlKScOkt.mjs.map
