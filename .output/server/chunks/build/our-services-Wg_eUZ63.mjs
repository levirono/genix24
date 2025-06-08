import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './tech-BItDUouP.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_1 = "" + buildAssetsURL("one.6SRSrbIm.png");
const _imports_2 = "" + buildAssetsURL("fuelfinder.D-M50vcK.jpg");
const _imports_3 = "" + buildAssetsURL("sustain.BkppIVQC.jpeg");
const _imports_4 = "" + buildAssetsURL("innovation.TdUSXiVA.jpeg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "our-services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4" }, _attrs))}><h1 class="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300"> Our Services</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"><div class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center"><img${ssrRenderAttr("src", _imports_0)} alt="Software Development" class="w-20 h-20 mb-4 rounded-full object-cover shadow-md"><h2 class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300"> Software Development</h2><p class="text-gray-600 dark:text-gray-300">Custom software solutions tailored to your business needs, ensuring scalability, security, and performance.</p></div><div class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center"><img${ssrRenderAttr("src", _imports_1)} alt="Website Development" class="w-20 h-20 mb-4 rounded-full object-cover shadow-md"><h2 class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500 dark:from-amber-400 dark:to-red-400"> Website Development</h2><p class="text-gray-600 dark:text-gray-300">Modern, responsive, and SEO-friendly websites that elevate your online presence and engage your audience.</p></div><div class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center"><img${ssrRenderAttr("src", _imports_2)} alt="Mobile Application" class="w-20 h-20 mb-4 rounded-full object-cover shadow-md"><h2 class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"> Mobile Application</h2><p class="text-gray-600 dark:text-gray-300">Cross-platform mobile apps with intuitive UI/UX, built for both Android and iOS to reach your customers everywhere.</p></div><div class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center"><img${ssrRenderAttr("src", _imports_3)} alt="Online Services" class="w-20 h-20 mb-4 rounded-full object-cover shadow-md"><h2 class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400"> Online Services</h2><p class="text-gray-600 dark:text-gray-300">Cloud-based solutions, SaaS products, and digital platforms to streamline your business operations online.</p></div><div class="bg-white dark:bg-gray-800 glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center text-center"><img${ssrRenderAttr("src", _imports_4)} alt="Tech Consultancy" class="w-20 h-20 mb-4 rounded-full object-cover shadow-md"><h2 class="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400"> Tech Consultancy</h2><p class="text-gray-600 dark:text-gray-300">Expert advice and strategic guidance to help you leverage technology for growth, efficiency, and innovation.</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=our-services-Wg_eUZ63.mjs.map
