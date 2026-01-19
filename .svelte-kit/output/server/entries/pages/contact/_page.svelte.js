import { _ as head, W as ensure_array_like, X as attr } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const primaryEmail = "torbenhjl.50@gmail.com";
  const contactMethods = [
    {
      title: "Email",
      value: primaryEmail,
      description: "Fastest way to reach me",
      href: `mailto:${primaryEmail}`,
      actionLabel: "Write an email"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/torben-lund-43b036273",
      description: "Yeah i know my Linkedin is almost empty",
      href: "https://www.linkedin.com/in/torben-lund-43b036273/",
      actionLabel: "Send a message"
    },
    {
      title: "GitHub",
      value: "github.com/Torbenhjl",
      description: "My personal project except the unity games",
      href: "https://github.com/Torbenhjl",
      actionLabel: "View my work"
    }
  ];
  const availability = [
    {
      label: "Current focus",
      value: "Writing master thesis and developing fire escape game"
    },
    { label: "Open to", value: "JOB PLS" },
    { label: "Response time", value: "Usually within 1-2 days" }
  ];
  let name = "";
  let replyTo = "";
  let subject = "";
  let message = "";
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact | Torben Lund</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Get in touch with Torben Lund for collaboration, internships, or new opportunities."/>`);
  });
  $$renderer.push(`<main class="min-h-screen bg-gray-50 py-16 text-gray-900"><section class="mx-auto max-w-6xl px-6 md:px-8 lg:px-12"><div class="grid gap-12 lg:grid-cols-[1fr_0.9fr]"><div class="space-y-8"><div><p class="text-sm uppercase tracking-[0.4em] text-gray-400">Get in touch</p> <h1 class="mt-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">Hello there stranger</h1> <p class="mt-4 text-lg text-gray-600">Whether you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open.
            I really want to work on complex, meaningful and exciting software, whatever that may be.</p></div> <div class="grid gap-6 sm:grid-cols-2"><!--[-->`);
  const each_array = ensure_array_like(contactMethods);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let method = each_array[$$index];
    $$renderer.push(`<div class="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"><p class="text-xs uppercase tracking-[0.35em] text-gray-400">${escape_html(method.title)}</p> <p class="mt-3 text-md font-semibold text-gray-900">${escape_html(method.value)}</p> <p class="mt-2 text-sm text-gray-500">${escape_html(method.description)}</p> `);
    if (method.href) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<a class="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:underline"${attr("href", method.href)}${attr("target", method.href.startsWith("http") ? "_blank" : void 0)}${attr("rel", method.href.startsWith("http") ? "noreferrer" : void 0)}>${escape_html(method.actionLabel)} <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"></path></svg></a>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 p-8 text-white shadow-[0_20px_60px_rgba(59,130,246,0.35)]"><p class="text-sm uppercase tracking-[0.4em] text-white/70">Availability</p> <h2 class="mt-4 text-3xl font-semibold">Currently welcoming new opportunities</h2> <ul class="mt-6 space-y-3"><!--[-->`);
  const each_array_1 = ensure_array_like(availability);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$renderer.push(`<li><p class="text-sm uppercase tracking-[0.3em] text-white/70">${escape_html(item.label)}</p> <p class="text-lg font-semibold">${escape_html(item.value)}</p></li>`);
  }
  $$renderer.push(`<!--]--></ul></div></div> <div class="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"><h2 class="text-2xl font-semibold text-gray-900">Send a quick message</h2> <p class="mt-2 text-sm text-gray-500">This will open your default mail app with a pre-filled draft.</p> <form class="mt-8 space-y-5"><div class="grid gap-4 md:grid-cols-2"><label class="flex flex-col gap-2 text-sm font-medium text-gray-700">Name <input class="rounded-2xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" type="text" placeholder="John Doe"${attr("value", name)} required/></label> <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">Email <input class="rounded-2xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" type="email" placeholder="you@example.com"${attr("value", replyTo)} required/></label></div> <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">Subject <input class="rounded-2xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" type="text" placeholder="Project idea, opportunity, etc."${attr("value", subject)}/></label> <label class="flex flex-col gap-2 text-sm font-medium text-gray-700">Message <textarea class="min-h-[180px] rounded-2xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" placeholder="Whats good in the hood" required>`);
  const $$body = escape_html(message);
  if ($$body) {
    $$renderer.push(`${$$body}`);
  }
  $$renderer.push(`</textarea></label> <button type="submit" class="cta cta-primary w-full justify-center md:w-auto">Compose email</button></form></div></div></section></main>`);
}
export {
  _page as default
};
