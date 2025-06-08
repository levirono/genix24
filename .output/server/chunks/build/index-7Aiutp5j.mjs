import { a as __nuxt_component_0$1, b as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto py-10 px-4" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"> Admin Dashboard </h1><nav class="mb-8 flex gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/contacts",
        class: "px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-white dark:bg-gray-700 text-blue-600 dark:text-emerald-400 border border-blue-200 dark:border-emerald-700 shadow hover:bg-blue-50 dark:hover:bg-emerald-900 hover:text-blue-800 dark:hover:text-white",
        "active-class": "bg-blue-100 dark:bg-emerald-800 text-blue-900 dark:text-white border-blue-400 dark:border-emerald-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contacts `);
          } else {
            return [
              createTextVNode(" Contacts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/users",
        class: "px-5 py-2 rounded-lg font-semibold transition-colors duration-200 bg-white dark:bg-gray-700 text-blue-600 dark:text-emerald-400 border border-blue-200 dark:border-emerald-700 shadow hover:bg-blue-50 dark:hover:bg-emerald-900 hover:text-blue-800 dark:hover:text-white",
        "active-class": "bg-blue-100 dark:bg-emerald-800 text-blue-900 dark:text-white border-blue-400 dark:border-emerald-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Users `);
          } else {
            return [
              createTextVNode(" Users ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[300px]">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7Aiutp5j.mjs.map
