<script lang="ts">
  import solarCockpit from '$lib/images/cockpit.png';
  import orbitTrail from '$lib/images/orbitdebug.png';
  import planetLineup from '$lib/images/spaceship.png';
  import shipThrusters from '$lib/images/sun.png';
  import { withBase } from '$lib/utils/paths';

  const project = {
    title: 'VR Solar System',
    tagline: 'Unity XR prototype with a flyable ship, orbiting planets, and Newtonian gravity.',
    summary:
      'I built a simple VR solar system in Unity with scaled planets, elliptical orbits, and a controllable spaceship. Players can throttle thrust, align with orbital planes, and slingshot around bodies while gravity remains stable and predictable. The project is in a very early state and i would like to develop this into something far better.',
    stack: ['Unity', 'XR Interaction Toolkit', 'C#', 'Newtonian physics'],
    duration: '1 week',
    role: 'Gameplay & tools',
    team: 'Solo project',
    contribution:
      'Implemented orbital gravity with newtonian physics, sun shader and controllable spaceship. Inspiration for this project is the amazing programmer Sebastian Lague with the'
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Deliver a VR playground where you can feel the scale of the solar system, hop between planets, and pilot a small ship.'
    },
    {
      label: 'Challenges',
      text: 'Balancing stable physics against comfortable VR: tuned masses, added throttle smoothing, and locked gravity to a fixed timestep so the ship stays predictable at 90 FPS. Still some issues with the ship controls.'
    },
    {
      label: 'Result',
      text: 'Planets orbit the sun, visual debug line renderer for the orbits and the ship can thrust and move in all directions.'
    }
  ];

  const galleryImages = [
    { alt: 'View from the cockpit', src: solarCockpit },
    { alt: 'Orbit debug trail that is visible in edit mode', src: orbitTrail },
    { alt: 'Spaceship model', src: planetLineup }
  ];

  let fullscreenImage: string | null = $state(null);

  function openFullscreen(src: string) {
    fullscreenImage = src;
  }

  function closeFullscreen() {
    fullscreenImage = null;
  }
</script>

<main class="min-h-screen bg-[#edf2ff] text-slate-900">
  <section class="bg-gradient-to-br from-slate-950 via-blue-900 to-slate-800 text-white">
    <div class="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12 lg:flex-row lg:items-center">
      <div class="space-y-6 max-w-xl">
        <h1 class="text-4xl font-semibold lg:text-5xl">{project.title}</h1>
        <p class="text-xl text-white/85">{project.tagline}</p>
        <p class="text-white/80 leading-relaxed">{project.summary}</p>

        <div class="flex flex-wrap gap-2">
          {#each project.stack as tech}
            <span class="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">{tech}</span>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/Torbenhjl/VR-Solar-System" target="_blank" rel="noreferrer" class="cta cta-primary">
            GitHub
          </a>
          <a href={withBase('/Projects/ProjectView')} class="cta cta-secondary">Back to projects</a>
        </div>

        <dl class="grid grid-cols-2 gap-6 text-sm text-white/75 [@media(min-width:520px)]:grid-cols-3">
          <div>
            <dt class="uppercase tracking-[0.3em] text-white/50">Duration</dt>
            <dd class="text-lg text-white">{project.duration}</dd>
          </div>
          <div>
            <dt class="uppercase tracking-[0.3em] text-white/50">Role</dt>
            <dd class="text-lg text-white">{project.role}</dd>
          </div>
          <div>
            <dt class="uppercase tracking-[0.3em] text-white/50">Team</dt>
            <dd class="text-lg text-white">{project.team}</dd>
          </div>
        </dl>
      </div>

      <div class="relative w-full lg:w-auto">
        <div class="absolute -inset-6 rounded-[32px] bg-white/10 blur-3xl" aria-hidden="true"></div>
        <div class="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.55)]">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_60%)]" aria-hidden="true"></div>
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <figure
            class="relative z-10 rounded-3xl bg-gray-50 cursor-pointer hover:shadow-lg transition-shadow"
            onclick={() => openFullscreen(shipThrusters)}
          >
            <img src={shipThrusters} alt="Placeholder hero for the VR spaceship" class="w-full object-cover" />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(79,70,229,0.25)]">
      <h2 class="text-2xl font-semibold">Summary</h2>
      <p class="mt-4 text-gray-600">{project.contribution}
      <a href="https://www.youtube.com/watch?v=7axImc1sxa0&t=305s" target="_blank">Solar System coding adventure series.</a> Some code and spaceship model was used fromt the repository: <a href="https://github.com/SebLague/Solar-System" target="_blank">Github</a></p>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        {#each highlights as highlight}
          <article class="rounded-2xl border border-indigo-50 bg-indigo-50/70 p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-indigo-400">{highlight.label}</p>
            <p class="mt-3 text-gray-700">{highlight.text}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-6 py-16 space-y-12">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="grid gap-6 md:grid-cols-3">
      {#each galleryImages as image}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <figure
          class="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
          onclick={() => openFullscreen(image.src)}
        >
          <img src={image.src} alt={image.alt} class="h-56 w-full object-cover" />
          <figcaption class="px-4 py-3 text-sm text-gray-500">{image.alt}</figcaption>
        </figure>
      {/each}
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-6 pb-16">
    <div class="rounded-[32px] bg-slate-900 text-white p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-gray-400">Next</p>
        <h2 class="text-3xl font-semibold">More orbits to explore</h2>
        <p class="mt-3 text-gray-300">
          Planets are now simple spheres with mass, radius and gravity. I want to terraform the planets so they can be explored. Maybe some interresting terrain, biosphere, atmosphere and some creatures.
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href={withBase('/Projects/ProjectView')} class="cta cta-ghost !text-white border-white/40">Browse more projects</a>
      </div>
    </div>
  </section>

  {#if fullscreenImage}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onclick={closeFullscreen}>
      <div class="relative max-w-4xl w-full" onclick={(e) => e.stopPropagation()}>
        <img src={fullscreenImage} alt="Fullscreen" class="w-full rounded-lg" />
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
          onclick={closeFullscreen}
          class="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  {/if}
</main>
