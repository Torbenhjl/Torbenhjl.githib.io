import { W as ensure_array_like, X as attr } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const skills = [
    {
      category: "Frontend",
      items: [
        "Svelte (2nd best js framework)",
        "JavaScript",
        "TypeScript",
        "Vue (best js framework)",
        "React"
      ]
    },
    {
      category: "Backend",
      items: ["Postgres", "MongoDB", "Spring", "FastAPI"]
    },
    {
      category: "Dev & Tools",
      items: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Postman "]
    },
    {
      category: "Languages",
      items: ["Java", "C#", "Python", "JavaScript"]
    },
    {
      category: "Game dev",
      items: ["Unity", "Blender", "C#", "VR"]
    },
    {
      category: "What i know best",
      items: ["Unity", "Java", "C#", "Spring", "Vue"]
    }
  ];
  const experience = [
    {
      role: "Full-Stack Developer - Summer internship",
      company: "Sikt",
      period: "Summer 2025",
      details: [
        "Built responsive single-page apps with React and FastAPI",
        "Collected DOI data from serpAPI",
        "Automated the process with a montly cronjob, running the serpAPI script",
        "Hosting the application with AWS"
      ]
    },
    {
      role: "Student Assistant",
      company: "HVL",
      period: "August 2024 - december 2024",
      details: [
        "Further developed the bachelors project HVLFire, now my masters project"
      ]
    },
    {
      role: "Assitant at Supported living community",
      period: "November 2020 - Present",
      details: ["Part time helping people with disabileties."]
    },
    {
      role: "Hackathon winner",
      period: "17-19 september 2025",
      details: [
        "Won the b-prepared hackathon in Budapest in the VR category. Me and two teammates implemented sprinklers and alarm system in the VR fire escape game and showing if the player was successfull in avtivating the alarm or not in the end screen."
      ]
    }
  ];
  let expanded = {};
  $$renderer.push(`<main class="mx-auto max-w-4xl my-8 p-4" aria-label="Experience page"><header class="mb-4"><h1 class="text-2xl font-semibold text-slate-900 mb-1">Experience &amp; Skills</h1> <p class="text-sm text-slate-600">An overview of languages i know, tools i've used and work experience</p></header> <section class="mt-6" aria-labelledby="skills-heading"><h2 id="skills-heading" class="text-lg font-medium text-slate-900 mb-3">Skills</h2> <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  const each_array = ensure_array_like(skills);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let s = each_array[$$index_1];
    $$renderer.push(`<div class="bg-white rounded-lg p-4 shadow-sm"><h3 class="text-base font-medium text-slate-900 mb-2">${escape_html(s.category)}</h3> <ul class="list-disc list-inside text-slate-600 text-sm"><!--[-->`);
    const each_array_1 = ensure_array_like(s.items);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let item = each_array_1[$$index];
      $$renderer.push(`<li>${escape_html(item)}</li>`);
    }
    $$renderer.push(`<!--]--></ul></div>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="mt-8" aria-labelledby="experience-heading"><h2 id="experience-heading" class="text-lg font-medium text-slate-900 mb-3">Experience</h2> <ol class="list-none m-0 p-0 space-y-3"><!--[-->`);
  const each_array_2 = ensure_array_like(experience);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let exp = each_array_2[i];
    $$renderer.push(`<li class="bg-white rounded-lg p-4 shadow-sm"><div class="flex flex-col md:flex-row md:justify-between md:items-center gap-3"><div><strong class="block text-base text-slate-900">${escape_html(exp.role)}</strong> <div class="text-sm text-slate-600">${escape_html(exp.company)}</div></div> <div class="flex flex-col items-start md:items-end gap-1"><time class="text-sm text-slate-500">${escape_html(exp.period)}</time> <button class="text-sm px-2 py-1 border border-slate-200 rounded-md hover:bg-slate-50"${attr("aria-expanded", !!expanded[i])}${attr("aria-controls", "details-" + i)}>${escape_html(expanded[i] ? "Hide" : "Details")}</button></div></div> `);
    if (expanded[i]) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<ul${attr("id", "details-" + i)} class="mt-3 pl-5 text-slate-600 list-disc space-y-1"><!--[-->`);
      const each_array_3 = ensure_array_like(exp.details);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let d = each_array_3[$$index_2];
        $$renderer.push(`<li>${escape_html(d)}</li>`);
      }
      $$renderer.push(`<!--]--></ul>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></li>`);
  }
  $$renderer.push(`<!--]--></ol></section></main>`);
}
export {
  _page as default
};
