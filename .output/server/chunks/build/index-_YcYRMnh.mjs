import { f as useAppConfig, m as mergeConfig, g as appConfig, _ as _export_sfc, a as __nuxt_component_0$1$1 } from './server.mjs';
import { E as isEqual } from '../runtime.mjs';
import { defineComponent, useSSRContext, computed, toRef, resolveComponent, mergeProps, useAttrs, toValue, getCurrentInstance, provide, inject, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, ref, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import __nuxt_component_0$3 from './Icon-CQ_UJq0E.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DVsOPkMP.mjs';

function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$a = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1$1;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive })
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              onClick: (e) => !isExternal && !_ctx.disabled && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$9 = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const dynamic = computed(() => {
      var _a, _b;
      return props.dynamic || ((_b = (_a = appConfig2.ui) == null ? void 0 : _a.icons) == null ? void 0 : _b.dynamic);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      dynamic
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  if (_ctx.dynamic) {
    _push(ssrRenderComponent(_component_Icon, mergeProps({ name: _ctx.name }, _attrs), null, _parent));
  } else {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
  }
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    xs: "p-1.5",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  // eslint-disable-next-line quotes
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$8 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$2,
    ULink: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$2.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$2);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$2;
  const _component_UIcon = __nuxt_component_1$2;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_UButton = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "flex justify-center items-center h-auto mt-20 md:mt-40"
  }, _attrs))}><div class="max-w-4xl text-center"><h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"> Empowering You with Innovative Solutions </h1><p class="text-xl mb-8 text-gray-600 dark:text-gray-400"> At Genixl, we are passionate about driving innovation in the world of technology. Our team is dedicated to developing advanced software solutions and state-of-the-art digital products that empower businesses and individuals to thrive in a rapidly evolving digital landscape. From intuitive applications to powerful platforms, we blend creativity and technical expertise to deliver tools that streamline workflows, enhance productivity, and inspire progress. Discover how our commitment to excellence can transform your digital experience. </p>`);
  _push(ssrRenderComponent(_component_UButton, {
    to: "/about",
    class: "",
    color: "blue",
    size: "xl",
    "trailing-icon": "i-heroicons-arrow-right-20-solid"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discover More `);
      } else {
        return [
          createTextVNode(" Discover More ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingPageHero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$6 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config$1);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {
  __name: "LandingFeatues",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Innovative Solutions",
        description: "At Genixl, we're dedicated to pushing the boundaries of technology. Our team of experts works tirelessly to create solutions that transform industries and improve lives.",
        image: "innovation.jpeg",
        gradientClass: "bg-gradient-to-r from-blue-500 to-emerald-500"
      },
      {
        title: "Customer-Centric Approach",
        description: "We believe in putting our customers first. Our products and services are designed with your needs in mind, ensuring that we deliver value and exceed expectations at every turn.",
        image: "centric.jpeg",
        gradientClass: "bg-gradient-to-r from-amber-500 to-red-500"
      },
      {
        title: "Sustainable Future",
        description: "At Genixl, we're committed to creating a sustainable future. Our eco-friendly practices and innovative green technologies are designed to minimize our environmental impact while maximizing efficiency.",
        image: "sustain.jpeg",
        gradientClass: "bg-gradient-to-r from-blue-500 to-emerald-500"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(features, (feature, index) => {
              _push2(`<div class="${ssrRenderClass([{ "md:flex-row-reverse": index % 2 !== 0 }, "flex flex-col md:flex-row items-center mb-16 glassmorphism p-8 rounded-lg"])}"${_scopeId}><div class="${ssrRenderClass([{ "md:pl-8": index % 2 !== 0 }, "md:w-1/2 md:pr-8 mb-8 md:mb-0"])}"${_scopeId}><h3 class="${ssrRenderClass([feature.gradientClass, "text-3xl font-bold mb-4 bg-clip-text text-transparent"])}"${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(feature.description)}</p></div><div class="md:w-1/2"${_scopeId}><img${ssrRenderAttr("src", feature.image)}${ssrRenderAttr("alt", feature.title)} class="w-50 h-50 object-cover rounded-lg shadow-lg"${_scopeId}></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(features, (feature, index) => {
                return createVNode("div", {
                  key: index,
                  class: ["flex flex-col md:flex-row items-center mb-16 glassmorphism p-8 rounded-lg", { "md:flex-row-reverse": index % 2 !== 0 }]
                }, [
                  createVNode("div", {
                    class: ["md:w-1/2 md:pr-8 mb-8 md:mb-0", { "md:pl-8": index % 2 !== 0 }]
                  }, [
                    createVNode("h3", {
                      class: ["text-3xl font-bold mb-4 bg-clip-text text-transparent", feature.gradientClass]
                    }, toDisplayString(feature.title), 3),
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(feature.description), 1)
                  ], 2),
                  createVNode("div", { class: "md:w-1/2" }, [
                    createVNode("img", {
                      src: feature.image,
                      alt: feature.title,
                      class: "w-50 h-50 object-cover rounded-lg shadow-lg"
                    }, null, 8, ["src", "alt"])
                  ])
                ], 2);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingFeatues.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "LandingProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      {
        title: "FUELFINDER",
        description: "Control your entire home with our intuitive smart home system.",
        link: "/products/smart-home",
        image: "fuelfinder.jpg"
      },
      {
        title: "ONE the all in one platform",
        description: "Harness the power of AI to gain invaluable insights from your data.",
        link: "/products/ai-analytics",
        image: "one.png"
      },
      {
        title: "great tech wizard",
        description: "Stay connected and monitor your health with our cutting-edge wearables.",
        link: "/products/wearables",
        image: "/api/placeholder/400/300"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "our-products",
        class: "mt-20"
      }, _attrs))}><div class="flex justify-center items-center mb-8"><h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">OUR PRODUCTS</h3></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: product.title,
          class: "glassmorphism hover:scale-105 transition-transform duration-300"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(product.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400" }, toDisplayString(product.title), 1)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: product.link,
                color: "emerald",
                variant: "ghost",
                class: "w-full",
                "trailing-icon": "i-heroicons-arrow-right-20-solid"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Explore `);
                  } else {
                    return [
                      createTextVNode(" Explore ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  to: product.link,
                  color: "emerald",
                  variant: "ghost",
                  class: "w-full",
                  "trailing-icon": "i-heroicons-arrow-right-20-solid"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Explore ")
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="h-40 mb-4"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.title)} class="w-full h-full object-cover rounded-lg"${_scopeId}></div><p class="text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(product.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "h-40 mb-4" }, [
                  createVNode("img", {
                    src: product.image,
                    alt: product.title,
                    class: "w-full h-full object-cover rounded-lg"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(product.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingProducts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const mission = "At Genixl, our mission is to harness the power of innovative technology to create a more sustainable future. We are committed to developing eco-friendly solutions that reduce environmental impact while enhancing efficiency and productivity for businesses and individuals alike.";
const _sfc_main$2 = {
  __name: "LandingAboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    const coreValues = [
      {
        icon: "\u{1F33F}",
        title: "Sustainability",
        description: "We prioritize environmental responsibility in all our innovations and operations."
      },
      {
        icon: "\u{1F4A1}",
        title: "Innovation",
        description: "We constantly push the boundaries of technology to create eco-friendly solutions."
      },
      {
        icon: "\u{1F91D}",
        title: "Collaboration",
        description: "We believe in the power of teamwork and partnerships to drive positive change."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about-us",
        class: "mt-20"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, {
              id: "core-values",
              class: "glassmorphism mb-8"
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"${_scopeId2}>Our Core Values</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500" }, "Our Core Values")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="space-y-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(coreValues, (value) => {
                    var _a;
                    _push3(`<li class="flex items-start"${_scopeId2}><div class="text-3xl mr-4"${_scopeId2}>${(_a = value.icon) != null ? _a : ""}</div><div${_scopeId2}><h3 class="text-xl font-semibold mb-2"${_scopeId2}>${ssrInterpolate(value.title)}</h3><p class="text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(value.description)}</p></div></li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "space-y-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(coreValues, (value) => {
                        return createVNode("li", {
                          key: value.title,
                          class: "flex items-start"
                        }, [
                          createVNode("div", {
                            class: "text-3xl mr-4",
                            innerHTML: value.icon
                          }, null, 8, ["innerHTML"]),
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-xl font-semibold mb-2" }, toDisplayString(value.title), 1),
                            createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(value.description), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              id: "our-mission",
              class: "glassmorphism"
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500"${_scopeId2}>Our Mission</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500" }, "Our Mission")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(mission)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(mission))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, {
                id: "core-values",
                class: "glassmorphism mb-8"
              }, {
                header: withCtx(() => [
                  createVNode("h2", { class: "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500" }, "Our Core Values")
                ]),
                default: withCtx(() => [
                  createVNode("ul", { class: "space-y-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(coreValues, (value) => {
                      return createVNode("li", {
                        key: value.title,
                        class: "flex items-start"
                      }, [
                        createVNode("div", {
                          class: "text-3xl mr-4",
                          innerHTML: value.icon
                        }, null, 8, ["innerHTML"]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-xl font-semibold mb-2" }, toDisplayString(value.title), 1),
                          createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(value.description), 1)
                        ])
                      ]);
                    }), 64))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UCard, {
                id: "our-mission",
                class: "glassmorphism"
              }, {
                header: withCtx(() => [
                  createVNode("h2", { class: "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500" }, "Our Mission")
                ]),
                default: withCtx(() => [
                  createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(mission))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingAboutUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "LandingContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const contactMethods = [
      {
        icon: "\u{1F4DE}",
        title: "Phone",
        description: "Call us at +254 793858343"
      },
      {
        icon: "\u2709\uFE0F",
        title: "Email",
        description: "Send us an email at genixlsolutions@gmail.com"
      },
      {
        icon: "\u{1F3E2}",
        title: "Office",
        description: "Visit us at Eldoret,Eldoret City"
      }
    ];
    ref({
      name: "",
      email: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact-us",
        class: "mt-20"
      }, _attrs))}><h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Contact Us </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(contactMethods, (method) => {
        var _a;
        _push(`<div class="text-center"><div class="text-5xl mb-4">${(_a = method.icon) != null ? _a : ""}</div><h3 class="text-2xl font-semibold mb-2">${ssrInterpolate(method.title)}</h3><p class="text-gray-600 dark:text-gray-400">${ssrInterpolate(method.description)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingContactUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingPageHero = __nuxt_component_0$1;
      const _component_LandingFeatues = _sfc_main$5;
      const _component_LandingProducts = _sfc_main$3;
      const _component_WhyChooseUs = resolveComponent("WhyChooseUs");
      const _component_LandingAboutUs = _sfc_main$2;
      const _component_LandingContactUs = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-200" }, _attrs))}><main class="flex-1 px-4 py-12 md:px-8">`);
      _push(ssrRenderComponent(_component_LandingPageHero, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFeatues, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingProducts, null, null, _parent));
      _push(ssrRenderComponent(_component_WhyChooseUs, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingAboutUs, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingContactUs, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_YcYRMnh.mjs.map
