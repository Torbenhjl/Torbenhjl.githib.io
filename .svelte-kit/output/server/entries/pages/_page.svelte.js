import { X as attr } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
import { P as ProjectCard, S as Snackbar, C as CommonLabel, A as Actions, I as IconButton } from "../../chunks/IconButton.js";
import { i as image } from "../../chunks/MinigolfVR.js";
import { r as raytracerShot } from "../../chunks/raystracer.js";
import { H as HVLFire } from "../../chunks/hvlfire.js";
import { M as MealPlanner } from "../../chunks/mealplanner.js";
const portrait = "/Torbenhjl.githib.io/_app/immutable/assets/profile.CeVhKskY.jpg";
const CV = "/Torbenhjl.githib.io/_app/immutable/assets/CV.CO4rYaNJ.pdf";
function _page($$renderer) {
  let snackbarWithClose;
  const noGithubSnackbar = () => {
    snackbarWithClose.open();
  };
  $$renderer.push(`<main class="min-h-screen bg-white text-gray-900"><section class="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-12 pb-8"><div class="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center"><div class="max-w-xl text-center md:text-left"><p class="text-sm uppercase tracking-[0.4em] text-gray-400">Hello, I'm</p> <h1 class="mt-4 text-5xl font-semibold text-gray-900">Torben Lund</h1> <p class="mt-4 text-2xl text-gray-500">Software engineering student at HVL</p> <p class="mt-6 text-lg text-gray-600 leading-relaxed">Welcome to my portfolio page. Here i showcase some of my projects and skills as a developer.
          Feel free to look around.</p> <div class="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"><a download="CV.pdf"${attr("href", CV)} class="cta cta-primary">Download CV</a> <a href="/contact" class="cta cta-secondary">Contact Info</a></div> <div class="mt-8 flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center"><span class="uppercase tracking-[0.3em] text-gray-400 text-center md:text-left">Find me on</span> <div class="flex justify-center gap-3 md:justify-start"><a href="https://www.linkedin.com/in/torben-lund-43b036273/" target="_blank" rel="noreferrer" class="social-pill" aria-label="LinkedIn profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="img" class="h-5 w-5 fill-current text-gray-700"><path d="M20.45 20.45h-3.51v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.41V9h3.37v1.56h.05c.47-.89 1.64-1.84 3.38-1.84 3.62 0 4.29 2.38 4.29 5.48v6.25ZM5.34 7.43a2.04 2.04 0 1 1 0-4.08 2.04 2.04 0 0 1 0 4.08Zm1.76 13.02H3.58V9h3.52v11.45Z"></path></svg></a> <a href="https://github.com/Torbenhjl" target="_blank" rel="noreferrer" class="social-pill" aria-label="GitHub profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="img" class="h-5 w-5 fill-current text-gray-700"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.45 9.45 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65a3.79 3.79 0 0 1 1.02 2.69c0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 12 2z"></path></svg></a></div></div></div> <div class="relative"><div class="absolute inset-0 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 blur-3xl" aria-hidden="true"></div> <div class="relative h-72 w-72 md:h-100 md:w-100"><img${attr("src", portrait)} alt="Portrait of Torben Pettersen" class="h-full w-full rounded-full border-[10px] border-white object-cover shadow-[0_25px_70px_rgba(15,23,42,0.15)]"/></div></div></div></section> <section id="projects" class="bg-gray-50 py-16"><div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p class="text-sm uppercase tracking-[0.5em] text-gray-400">Projects</p> <h2 class="mt-2 text-3xl font-semibold text-gray-900">Selected Work</h2> <p class="mt-2 text-gray-500">A mix of personal projects and school work</p></div> <button class="cta cta-ghost self-start md:self-auto">${escape_html("Hide projects")}</button></div> `);
  {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">`);
    ProjectCard($$renderer, {
      title: "VR Fire Escape Game",
      image: HVLFire,
      link: "/Projects/HVLFire",
      onGithubClick: noGithubSnackbar
    });
    $$renderer.push(`<!----> `);
    ProjectCard($$renderer, {
      title: "Meal Planner App",
      image: MealPlanner,
      link: "/Projects/MealPlanner",
      github: "https://github.com/Torbenhjl/MealPlanner"
    });
    $$renderer.push(`<!----> `);
    ProjectCard($$renderer, {
      title: "Minigolf VR",
      image,
      link: "/Projects/minigolfVR",
      onGithubClick: noGithubSnackbar
    });
    $$renderer.push(`<!----> `);
    ProjectCard($$renderer, {
      title: "Raytracer",
      image: raytracerShot,
      link: "/Projects/raytracer",
      github: "https://github.com/Torbenhjl/lecture9UnityCodeStartRaytracer"
    });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div></section></main> `);
  Snackbar($$renderer, {
    children: ($$renderer2) => {
      CommonLabel($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->No github repo, unity projects use unity version control`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Actions($$renderer2, {
        children: ($$renderer3) => {
          IconButton($$renderer3, {
            class: "material-icons",
            title: "Dismiss",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->close`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
