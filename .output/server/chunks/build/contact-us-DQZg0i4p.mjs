import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const isLoading = ref(false);
    const success = ref(false);
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-50 py-16 px-4" }, _attrs))} data-v-fb82bb09><h1 class="text-4xl font-bold mb-4 dark:text-white text-gray-900" data-v-fb82bb09>Contact Us</h1><p class="mb-8 dark:text-gray-300 text-gray-700" data-v-fb82bb09>We&#39;d love to hear from you! Please fill out the form below.</p><form class="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded shadow" data-v-fb82bb09><div class="mb-4" data-v-fb82bb09><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" data-v-fb82bb09>Name</label><input${ssrRenderAttr("value", name.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Name" required data-v-fb82bb09></div><div class="mb-4" data-v-fb82bb09><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" data-v-fb82bb09>Email</label><input${ssrRenderAttr("value", email.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your Email" required data-v-fb82bb09></div><div class="mb-6" data-v-fb82bb09><label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" data-v-fb82bb09>Message</label><textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Your Message" required data-v-fb82bb09>${ssrInterpolate(message.value)}</textarea></div><div class="flex items-center justify-between" data-v-fb82bb09><button${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50" type="submit" data-v-fb82bb09>`);
      if (isLoading.value) {
        _push(`<span data-v-fb82bb09>Sending...</span>`);
      } else {
        _push(`<span data-v-fb82bb09>Send</span>`);
      }
      _push(`</button></div>`);
      if (success.value) {
        _push(`<div class="mt-4 text-green-600 dark:text-green-400" data-v-fb82bb09>Message sent successfully!</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMsg.value) {
        _push(`<div class="mt-4 text-red-600 dark:text-red-400" data-v-fb82bb09>${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb82bb09"]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-DQZg0i4p.mjs.map
