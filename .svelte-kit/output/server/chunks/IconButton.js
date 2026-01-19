import { X as attr, $ as bind_props, a0 as attributes, a1 as clsx, a2 as spread_props, a3 as element } from "./index2.js";
import { c as ssr_context, f as fallback, e as escape_html, s as setContext, g as getContext } from "./context.js";
import { ponyfill, events } from "@material/dom";
import "clsx";
import { MDCRippleFoundation, util } from "@material/ripple";
import { o as on } from "./events.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function ProjectCard($$renderer, $$props) {
  let title = $$props["title"];
  let image = $$props["image"];
  let link = $$props["link"];
  let github = fallback(
    $$props["github"],
    null
    // URL or null
  );
  let onGithubClick = fallback(
    $$props["onGithubClick"],
    null
    // callback from parent
  );
  $$renderer.push(`<article class="rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(15,23,42,0.12)] flex flex-col gap-6 text-center"><div class="w-full overflow-hidden rounded-[28px] border border-gray-100 bg-gray-50"><img${attr("src", image)}${attr("alt", title)} class="h-64 w-full object-cover"/></div> <div class="space-y-3"><h2 class="text-2xl font-semibold text-gray-900">${escape_html(title)}</h2></div> <div class="flex flex-wrap items-center justify-center gap-4">`);
  if (github) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr("href", github)} target="_blank" rel="noreferrer" class="card-link">Github</a>`);
  } else {
    $$renderer.push("<!--[!-->");
    if (onGithubClick) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<button type="button" class="card-link cursor-pointer">Github</button>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--> `);
  if (link) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr("href", link)} class="card-link card-link--dark">Details</a>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></article>`);
  bind_props($$props, { title, image, link, github, onGithubClick });
}
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element2, eventType, detail, eventInit = { bubbles: true }) {
  if (typeof Event === "undefined") {
    throw new Error("Event not defined.");
  }
  if (!element2) {
    throw new Error("Tried to dispatch event without element.");
  }
  const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
  element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(event);
  return event;
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
class SvelteEventManager {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(element2, event, handler, options) {
    if (!this.elementMap.has(element2)) {
      this.elementMap.set(element2, {});
    }
    const eventMap = this.elementMap.get(element2);
    if (eventMap == null) {
      throw new Error("Event map couldn't be created.");
    }
    if (!(event in eventMap)) {
      eventMap[event] = /* @__PURE__ */ new Map();
    }
    const handlerMap = eventMap[event];
    handlerMap.set(handler, on(element2, event, handler, options));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(element2, event, handler) {
    const eventMap = this.elementMap.get(element2);
    if (eventMap == null || !(event in eventMap)) {
      return;
    }
    const handlerMap = eventMap[event];
    const unlisten = handlerMap.get(handler);
    if (unlisten != null) {
      unlisten();
      handlerMap.delete(handler);
      if (handlerMap.size === 0) {
        delete eventMap[event];
        if (Object.keys(eventMap).length === 0) {
          this.elementMap.delete(element2);
        }
      }
    }
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((eventMaps, _element) => {
      for (let [_event, eventMap] of Object.entries(eventMaps)) {
        eventMap.forEach((unlisten, _handler) => {
          unlisten();
        });
      }
    });
    this.elementMap.clear();
  }
}
let waiting = Promise.resolve();
function Snackbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { closest } = ponyfill;
    let uninitializedValue = () => {
    };
    let {
      use = [],
      class: className = "",
      variant,
      leading = false,
      timeoutMs = 5e3,
      closeOnEscape = true,
      labelText = uninitializedValue,
      actionButtonText = uninitializedValue,
      surface$use = [],
      surface$class = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let element2;
    let instance = void 0;
    let internalClasses = {};
    let closePromise = new Promise((resolve) => resolve);
    setContext("SMUI:label:context", "snackbar");
    function open() {
      waiting = waiting.then(() => {
        return closePromise;
      });
    }
    function forceOpen() {
      return instance?.open();
    }
    function close(reason) {
      return instance?.close(reason);
    }
    function isOpen() {
      {
        throw new Error("Instance is undefined.");
      }
    }
    function getLabelElement() {
      return getElement().querySelector(".mdc-snackbar__label") ?? document.createElement("div");
    }
    function getActionButtonElement() {
      return getElement().querySelector(".mdc-snackbar__action") ?? document.createElement("button");
    }
    function getElement() {
      return element2;
    }
    $$renderer2.push(`<aside${attributes({
      class: clsx(classMap({
        "mdc-snackbar": true,
        "mdc-snackbar--stacked": variant === "stacked",
        "mdc-snackbar--leading": leading,
        ...internalClasses,
        [className]: true
      })),
      ...exclude(restProps, ["surface$"])
    })}><div${attributes({
      class: clsx(classMap({ "mdc-snackbar__surface": true, [surface$class]: true })),
      role: "status",
      "aria-relevant": "additions",
      ...prefixFilter(restProps, "surface$")
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></aside>`);
    bind_props($$props, {
      open,
      forceOpen,
      close,
      isOpen,
      getLabelElement,
      getActionButtonElement,
      getElement
    });
  });
}
function CommonLabel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      use = [],
      class: className = "",
      component: MyComponent = SmuiElement,
      tag = "span",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let element2;
    const context = getContext("SMUI:label:context");
    const tabindex = getContext("SMUI:label:tabindex");
    function getElement() {
      return element2.getElement();
    }
    $$renderer2.push(`<!---->`);
    MyComponent($$renderer2, spread_props([
      {
        tag,
        use,
        class: classMap({
          "mdc-button__label": context === "button",
          "mdc-fab__label": context === "fab",
          "mdc-tab__text-label": context === "tab",
          "mdc-image-list__label": context === "image-list",
          "mdc-snackbar__label": context === "snackbar",
          "mdc-banner__text": context === "banner",
          "mdc-segmented-button__label": context === "segmented-button",
          "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
          "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell",
          [className]: true
        })
      },
      context === "snackbar" ? { "aria-atomic": "false" } : {},
      { tabindex },
      restProps,
      {
        children: ($$renderer3) => {
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$renderer2.push(`<!---->`);
    bind_props($$props, { getElement });
  });
}
function SmuiElement($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      use = [],
      tag = "div",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const selfClosing = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(tag) > -1;
    let element$1;
    function getElement() {
      return element$1;
    }
    if (tag === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg${attributes({ ...restProps }, void 0, void 0, void 0, 3)}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (selfClosing) {
        $$renderer2.push("<!--[-->");
        element($$renderer2, tag, () => {
          $$renderer2.push(`${attributes({ ...restProps })}`);
        });
      } else {
        $$renderer2.push("<!--[!-->");
        element(
          $$renderer2,
          tag,
          () => {
            $$renderer2.push(`${attributes({ ...restProps })}`);
          },
          () => {
            children?.($$renderer2);
            $$renderer2.push(`<!---->`);
          }
        );
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { getElement });
  });
}
function ClassAdder($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      use = [],
      class: className = "",
      component: MyComponent = SmuiElement,
      tag = "div",
      _smuiClass = "",
      _smuiClassMap = {},
      _smuiContexts = {},
      _smuiProps = {},
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let element2;
    const smuiClassUnsubscribes = [];
    Object.entries(_smuiClassMap).forEach(([name, context]) => {
      const store = getContext(context);
      if (store && "subscribe" in store) {
        smuiClassUnsubscribes.push(store.subscribe((value) => {
          _smuiClassMap[name] = value;
        }));
      }
    });
    for (let context in _smuiContexts) {
      if (_smuiContexts.hasOwnProperty(context)) {
        setContext(context, _smuiContexts[context]);
      }
    }
    onDestroy(() => {
      for (const unsubscribe of smuiClassUnsubscribes) {
        unsubscribe();
      }
    });
    function getElement() {
      return element2.getElement();
    }
    $$renderer2.push(`<!---->`);
    MyComponent($$renderer2, spread_props([
      {
        tag,
        use,
        class: classMap({ [_smuiClass]: true, ..._smuiClassMap, [className]: true })
      },
      _smuiProps,
      restProps,
      {
        children: ($$renderer3) => {
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$renderer2.push(`<!---->`);
    bind_props($$props, { getElement });
  });
}
function Actions($$renderer, $$props) {
  let { children, $$slots, $$events, ...restProps } = $$props;
  let element2;
  function getElement() {
    return element2.getElement();
  }
  ClassAdder($$renderer, spread_props([
    {
      _smuiClass: "mdc-snackbar__actions",
      _smuiProps: { "aria-atomic": "true" },
      _smuiContexts: {
        "SMUI:button:context": "snackbar:actions",
        "SMUI:icon-button:context": "snackbar:actions",
        "SMUI:label:context": void 0
      },
      tag: "div"
    },
    restProps,
    {
      children: ($$renderer2) => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { getElement });
}
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let eventManager = new SvelteEventManager();
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => eventManager.off(document.documentElement, evtType, handler),
        deregisterInteractionHandler: (evtType, handler) => eventManager.off(eventTarget || node, evtType, handler),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => {
          var _a, _b;
          return {
            x: (_a = window.pageXOffset) !== null && _a !== void 0 ? _a : window.scrollX,
            y: (_b = window.pageYOffset) !== null && _b !== void 0 ? _b : window.scrollY
          };
        },
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(document.documentElement, evtType, handler, typeof opts === "boolean" ? { capture: opts } : opts);
        },
        registerInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(eventTarget || node, evtType, handler, typeof opts === "boolean" ? { capture: opts } : opts);
        },
        registerResizeHandler: (handler) => eventManager.on(window, "resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
          eventManager.clear();
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        eventManager.clear();
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
function IconButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let uninitializedValue = () => {
    };
    function isUninitializedValue(value) {
      return value === uninitializedValue;
    }
    let {
      use = [],
      class: className = "",
      style = "",
      ripple = true,
      color,
      toggle = false,
      pressed = uninitializedValue,
      ariaLabelOn,
      ariaLabelOff,
      touch = false,
      displayFlex = true,
      size = "normal",
      href,
      action,
      component: MyComponent = SmuiElement,
      tag = href == null ? "button" : "a",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let element2;
    let internalClasses = {};
    let internalStyles = {};
    let internalAttrs = {};
    let context = getContext("SMUI:icon-button:context");
    let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
    const actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header" || context === "dialog:sheet") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    !!restProps.disabled;
    setContext("SMUI:icon:context", "icon-button");
    onDestroy(() => {
    });
    function addClass(className2) {
      if (!internalClasses[className2]) {
        internalClasses[className2] = true;
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        internalClasses[className2] = false;
      }
    }
    function addStyle(name, value) {
      if (internalStyles[name] != value) {
        if (value === "" || value == null) {
          delete internalStyles[name];
        } else {
          internalStyles[name] = value;
        }
      }
    }
    function getElement() {
      return element2.getElement();
    }
    $$renderer2.push(`<!---->`);
    MyComponent($$renderer2, spread_props([
      {
        tag,
        use: [
          [
            Ripple,
            {
              ripple,
              unbounded: true,
              color,
              disabled: !!restProps.disabled,
              addClass,
              removeClass,
              addStyle
            }
          ],
          ...use
        ],
        class: classMap({
          "mdc-icon-button": true,
          "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
          "mdc-icon-button--touch": touch,
          "mdc-icon-button--display-flex": displayFlex,
          "smui-icon-button--size-button": size === "button",
          "smui-icon-button--size-mini": size === "mini",
          "mdc-icon-button--reduced-size": size === "mini" || size === "button",
          "mdc-card__action": context === "card:action",
          "mdc-card__action--icon": context === "card:action",
          "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
          "mdc-top-app-bar__action-item": context === "top-app-bar:action",
          "mdc-snackbar__dismiss": context === "snackbar:actions",
          "mdc-data-table__pagination-button": context === "data-table:pagination",
          "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
          "mdc-dialog__close": (context === "dialog:header" || context === "dialog:sheet") && action === "close",
          ...internalClasses,
          [className]: true
        }),
        style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "),
        "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null,
        "aria-label": pressed ? ariaLabelOn : ariaLabelOff,
        "data-aria-label-on": ariaLabelOn,
        "data-aria-label-off": ariaLabelOff,
        "aria-describedby": ariaDescribedby,
        href
      },
      actionProp,
      internalAttrs,
      restProps,
      {
        onclick: (e) => {
          if (context === "top-app-bar:navigation") {
            dispatch(getElement(), "SMUITopAppBarIconButtonNav");
          }
          restProps.onclick?.(e);
        },
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mdc-icon-button__ripple"></div> `);
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
          if (touch) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="mdc-icon-button__touch"></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$renderer2.push(`<!---->`);
    bind_props($$props, { pressed, getElement });
  });
}
export {
  Actions as A,
  CommonLabel as C,
  IconButton as I,
  ProjectCard as P,
  Snackbar as S
};
