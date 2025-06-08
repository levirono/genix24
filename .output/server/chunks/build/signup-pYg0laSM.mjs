import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const showPassword = ref(false);
    const confirmPassword = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4" }, _attrs))}><h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900">Sign Up</h1><form class="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded shadow"><div class="mb-4"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Username</label><input${ssrRenderAttr("value", username.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Username" required></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label><input${ssrRenderAttr("value", email.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your Email" required></div><div class="mb-6"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label><div class="relative"><input${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="Your Password" required><span class="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer">`);
      if (!showPassword.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M13.875 18.825A6.978 6.978 0 0012 19.5c-3.313 0-6-2.686-6-6 0-.354.028-.705.085-1.05M15.362 15.362A4.992 4.992 0 0018 12c0-1.657-.672-3.157-1.762-4.238m-1.876 9.6A4.992 4.992 0 0012 18c-1.657 0-3.157-.672-4.238-1.762M8.625 8.625A4.992 4.992 0 006 12c0 1.657.672 3.157 1.762 4.238M16.125 7.875A6.978 6.978 0 0012 4.5c-3.313 0-6 2.686-6 6 0 .354.028.705.085 1.05"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M13.875 18.825A6.978 6.978 0 0012 19.5c-3.313 0-6-2.686-6-6 0-.354.028-.705.085-1.05M16.125 7.875A6.978 6.978 0 0012 4.5c-3.313 0-6 2.686-6 6 0 .354.028.705.085 1.05M8.625 8.625A4.992 4.992 0 006 12c0 1.657.672 3.157 1.762 4.238m1.876-9.6A4.992 4.992 0 0012 6c1.657 0 3.157.672 4.238 1.762M18 12c0 1.657-.672 3.157-1.762 4.238m-1.876-9.6A4.992 4.992 0 0012 6c-1.657 0-3.157.672-4.238 1.762"></path></svg>`);
      }
      _push(`</span></div></div><div class="mb-6"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Confirm Password</label><input${ssrRenderDynamicModel(showPassword.value ? "text" : "password", confirmPassword.value, null)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="Confirm Your Password" required></div><div class="flex items-center justify-between"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Sign Up </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-blue-500 hover:underline ml-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-pYg0laSM.mjs.map
