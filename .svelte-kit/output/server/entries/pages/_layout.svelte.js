import { V as store_get, W as ensure_array_like, X as attr, Y as attr_class, Z as unsubscribe_stores, _ as head, $ as bind_props } from "../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const favicon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let pathname, isActive;
    let open = false;
    const links = [
      { href: "/", label: "Home", type: "path" },
      { href: "/Experience", label: "Experience", type: "path" },
      {
        href: "/Projects/projectView",
        label: "Projects",
        type: "path"
      },
      { href: "/contact", label: "Contact", type: "path" }
    ];
    const activeClasses = "text-blue-600 after:w-full after:bg-blue-600";
    const inactiveClasses = "text-gray-700";
    pathname = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    isActive = (link) => {
      return pathname === link.href ? activeClasses : inactiveClasses;
    };
    $$renderer2.push(`<nav class="sticky top-0 z-40 border-b bg-white/90 backdrop-blur"><div class="mx-auto max-w-6xl px-4"><div class="flex h-16 items-center justify-between"><a href="/" class="flex items-center gap-2 font-semibold text-xl"><span class="inline-block rounded bg-blue-600 px-2 py-1 text-sm text-white">TP</span> <span>Torben's Portfolio</span></a> <div class="hidden items-center gap-8 text-sm font-semibold md:flex"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all hover:text-gray-500 hover:after:w-full ${isActive(link)}`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="inline-flex items-center justify-center rounded-full border border-gray-300 p-2 text-gray-700 md:hidden" aria-label="Toggle navigation"${attr("aria-expanded", open)}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
    }
    $$renderer2.push(`<!--]--></svg></button></div> <div${attr_class(`md:hidden ${"hidden"}`)}><div class="space-y-1 border-t border-gray-100 py-3 text-sm font-semibold"><!--[-->`);
    const each_array_1 = ensure_array_like(links);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`block rounded-full px-4 py-2 transition-colors ${isActive(link)} hover:bg-gray-100`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  const prerender = true;
  const ssr = false;
  let { children } = $$props;
  head($$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> `);
  children?.($$renderer);
  $$renderer.push(`<!---->`);
  bind_props($$props, { prerender, ssr });
}
export {
  _layout as default
};
