import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    const messages = ref([]);
    const isLoading = ref(true);
    const errorMsg = ref("");
    const formatDate = (dateStr) => {
      return new Date(dateStr).toLocaleString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 bg-white py-16 px-4" }, _attrs))}><h1 class="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-300"> Contact Messages (Admin)</h1>`);
      if (isLoading.value) {
        _push(`<div class="text-lg text-gray-700 dark:text-gray-300">Loading...</div>`);
      } else if (errorMsg.value) {
        _push(`<div class="text-red-600 dark:text-red-400">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<div class="w-full max-w-3xl"><table class="w-full table-auto bg-white dark:bg-gray-800 rounded shadow overflow-hidden"><thead><tr class="bg-gray-100 dark:bg-gray-700"><th class="px-4 py-2 text-left">Name</th><th class="px-4 py-2 text-left">Email</th><th class="px-4 py-2 text-left">Message</th><th class="px-4 py-2 text-left">Date</th><th class="px-4 py-2 text-left">Reply</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(messages.value, (msg) => {
          _push(`<tr class="border-b border-gray-200 dark:border-gray-700"><td class="px-4 py-2">${ssrInterpolate(msg.name)}</td><td class="px-4 py-2"><a${ssrRenderAttr("href", `mailto:${msg.email}`)} class="text-blue-500 hover:underline">${ssrInterpolate(msg.email)}</a></td><td class="px-4 py-2">${ssrInterpolate(msg.message)}</td><td class="px-4 py-2">${ssrInterpolate(formatDate(msg.created_at))}</td><td class="px-4 py-2"><a${ssrRenderAttr("href", `mailto:${msg.email}`)} class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200">Reply</a></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (messages.value.length === 0) {
          _push(`<div class="text-center text-gray-500 dark:text-gray-400 mt-8">No messages yet. </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacts-hq3uy361.mjs.map
