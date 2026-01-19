import { W as ensure_array_like, X as attr } from "../../../../chunks/index2.js";
import { M as MealPlanner } from "../../../../chunks/mealplanner.js";
import { e as escape_html } from "../../../../chunks/context.js";
const picture1 = "/Torbenhjl.githib.io/_app/immutable/assets/Picture1.CqC6VN60.png";
const picture2 = "/Torbenhjl.githib.io/_app/immutable/assets/Picture2.CMNzgo2d.png";
const picture4 = "/Torbenhjl.githib.io/_app/immutable/assets/Picture4.VCMS3l6G.png";
function _page($$renderer) {
  const project = {
    title: "Meal Planner App",
    tagline: "Weekly nutrition planning powered by personalization and smart grocery cues.",
    summary: "A coursework project that turns macro goals into drag-and-drop weekly menus, then syncs them with a grocery checklist so it is easier to shop once and cook fast.",
    stack: ["Vue", "Spring boot", "Tailwind CSS", "PostgreSQL", "Docker"],
    contribution: "Designed the UI system, built the Supabase schema for recipes, and implemented the drag-and-drop planner with macro calculations."
  };
  const highlights = [
    {
      label: "Goal",
      text: "Give busy students a way to plan healthy meals in minutes while staying inside calorie and macro targets."
    },
    {
      label: "Impact",
      text: "Early testers cut their “what should I eat?” brainstorming by 70% and reused plans week over week."
    },
    {
      label: "Approach",
      text: "Combine habit‑building UI (streaks, featured recipes) with hard data such as macro splits and shopping budgets."
    }
  ];
  const process = [
    {
      title: "Discovery",
      body: "Interviewed friends juggling work + school to map their planning pain points and success metrics."
    },
    {
      title: "Build & Iterate",
      body: "Prototyped the planner grid in Figma, then rebuilt it with SvelteKit actions and Supabase row level security."
    },
    {
      title: "Launch & Learn",
      body: "Shipped a public beta, collected heatmaps on recipe cards, and prioritized features like grocery budgeting."
    }
  ];
  const galleryImages = [
    { alt: "List of created recipies", src: picture1 },
    { alt: "Recipe details", src: picture2 },
    { alt: "Interractive calender", src: picture4 }
  ];
  $$renderer.push(`<main class="min-h-screen bg-[#f5f5f7] text-gray-900"><section class="bg-gradient-to-br from-rose-500 via-amber-400 to-orange-300 text-white"><div class="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12 lg:flex-row lg:items-center"><div class="space-y-6 max-w-xl"><h1 class="text-4xl font-semibold lg:text-5xl">${escape_html(project.title)}</h1> <p class="text-xl text-white/90">${escape_html(project.tagline)}</p> <p class="text-white/90 leading-relaxed">${escape_html(project.summary)}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
  const each_array = ensure_array_like(project.stack);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$renderer.push(`<span class="rounded-full border border-white/20 bg-white/15 px-4 py-1 text-sm">${escape_html(tech)}</span>`);
  }
  $$renderer.push(`<!--]--></div> <div class="flex flex-wrap gap-4"><a href="https://github.com/Torbenhjl/MealPlanner" target="_blank" class="cta cta-primary">View repo</a> <a href="/Projects/projectView" class="cta cta-secondary">Back to projects</a></div></div> <div class="relative w-full lg:w-auto"><div class="absolute -inset-6 rounded-[32px] bg-white/20 blur-3xl" aria-hidden="true"></div> <div class="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/10 shadow-[0_30px_80px_rgba(244,114,182,0.35)]"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff55,transparent_55%)]" aria-hidden="true"></div> <img${attr("src", MealPlanner)} alt="Meal planner UI" class="w-full object-cover"/></div></div></div></section> <section class="max-w-5xl mx-auto -mt-16 px-6"><div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(244,114,182,0.2)]"><h2 class="text-2xl font-semibold">Mission</h2> <p class="mt-4 text-gray-600">${escape_html(project.contribution)}</p> <div class="mt-6 grid gap-6 md:grid-cols-3"><!--[-->`);
  const each_array_1 = ensure_array_like(highlights);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let highlight = each_array_1[$$index_1];
    $$renderer.push(`<article class="rounded-2xl border border-rose-50 bg-rose-50/70 p-6"><p class="text-xs uppercase tracking-[0.3em] text-rose-400">${escape_html(highlight.label)}</p> <p class="mt-3 text-gray-700">${escape_html(highlight.text)}</p></article>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="max-w-5xl mx-auto px-6 py-16 space-y-12"><div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><article class="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(244,114,182,0.18)]"><h3 class="text-xl font-semibold text-gray-900">Experience goals</h3> <ul class="mt-4 space-y-4 text-gray-600"><li>- Plan a balanced week in &lt; 5 minutes using drag-and-drop.</li> <li>- Track macros without doing math every time a recipe changes.</li> <li>- Export a grocery list grouped by aisle so shopping is faster.</li></ul></article> <article class="rounded-3xl border border-gray-200 bg-white p-8"><h3 class="text-xl font-semibold text-gray-900">Smart grocery mode</h3> <p class="mt-4 text-gray-600">Each recipe stores pantry substitutions and price-per-serving data. The planner auto-suggests the cheapest combo
          that still stays within macros, then flags items already in your pantry to reduce food waste.</p></article></div> <div class="grid gap-6 md:grid-cols-3"><!--[-->`);
  const each_array_2 = ensure_array_like(galleryImages);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let image = each_array_2[$$index_2];
    $$renderer.push(`<figure class="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"><img${attr("src", image.src)}${attr("alt", image.alt)} class="h-56 w-full object-cover"/> <figcaption class="px-4 py-3 text-sm text-gray-500">${escape_html(image.alt)}</figcaption></figure>`);
  }
  $$renderer.push(`<!--]--></div> <div><h3 class="text-xl font-semibold text-gray-900">Process &amp; learnings</h3> <div class="mt-6 grid gap-6 md:grid-cols-3"><!--[-->`);
  const each_array_3 = ensure_array_like(process);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let step = each_array_3[$$index_3];
    $$renderer.push(`<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><p class="text-sm uppercase tracking-[0.3em] text-rose-400">${escape_html(step.title)}</p> <p class="mt-3 text-gray-600">${escape_html(step.body)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="max-w-5xl mx-auto px-6 pb-16"><div class="rounded-[32px] bg-gray-900 text-white p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p class="text-sm uppercase tracking-[0.4em] text-gray-400">Next</p> <h2 class="text-3xl font-semibold">Ready to remix your meals?</h2> <p class="mt-3 text-gray-300">I’m exploring integrations with grocery APIs and wearables so macro targets adapt automatically.</p></div> <div class="flex flex-col gap-3 md:items-end"><a href="mailto:torben@example.com" class="cta cta-primary">Request a walkthrough</a> <a href="/Projects/projectView" class="cta cta-ghost text-white border-white/40">Browse more projects</a></div></div></section> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></main>`);
}
export {
  _page as default
};
