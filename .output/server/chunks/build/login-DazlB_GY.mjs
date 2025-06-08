import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const showPassword = ref(false);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4" }, _attrs))}><h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900">Login</h1><form class="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded shadow"><div class="mb-4"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label><input${ssrRenderAttr("value", email.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your Email" required></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Username</label><input${ssrRenderAttr("value", username.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Username (optional)"></div><div class="mb-6"><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label><div class="relative"><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")}${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Password" required><button type="button" class="absolute right-2 top-2 text-gray-500 dark:text-gray-300">${ssrInterpolate(showPassword.value ? "Hide" : "Show")}</button></div></div><div class="flex items-center justify-between"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Login </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "text-blue-500 hover:underline ml-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DazlB_GY.mjs.map
