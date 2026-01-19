import "clsx";
import { P as ProjectCard, S as Snackbar, C as CommonLabel, A as Actions, I as IconButton } from "../../../../chunks/IconButton.js";
import { i as image } from "../../../../chunks/MinigolfVR.js";
import { H as HVLFire } from "../../../../chunks/hvlfire.js";
import { M as MealPlanner } from "../../../../chunks/mealplanner.js";
import { r as raytracerShot } from "../../../../chunks/raystracer.js";
function _page($$renderer) {
  let snackbarWithClose;
  const noGithubSnackbar = () => {
    snackbarWithClose.open();
  };
  $$renderer.push(`<h1 class="font-sans text-5xl font-bold text-center mt-10">Some of my projects</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-5">`);
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
  $$renderer.push(`<!----></div> `);
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
