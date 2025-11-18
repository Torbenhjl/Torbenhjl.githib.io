<script lang="ts">
  import raytracerShot from '$lib/images/raystracer.png';
  import rt1 from '$lib/images/rt2.png';
  import rt2 from '$lib/images/rt3.png';
  import rtcontrols from '$lib/images/rtcontrols.png';
  import { withBase } from '$lib/utils/paths';

  const project = {
    title: 'GPU Ray Tracer',
    tagline: 'Porting "Ray Tracing in One Weekend" to a realtime HLSL compute shader.',
    summary:
      "I translated Peter Shirley's CPU implementation into an HLSL compute shader that runs inside Unity. The project focuses on the core building blocks of ray tracing: BRDF sampling, ray bounces, basic denoising, and experimenting with different material types like diffuse, metallic, and dielectric surfaces.",
    stack: ['Unity', 'HLSL', 'Compute Shaders', 'C#'],
    duration: '2 weeks',
    role: 'Graphics programmer',
    team: 'Solo project',
    contribution:
      'Made 10 different shaders, each corresponding to a chapter in the book. Starting with a simple gradient shader and finnishing with a functional raytracer with movable camera'
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Internalize the math and data flow behind ray tracing by rewriting it from scratch instead of relying on Unity lighting presets.'
    },
    {
      label: 'Challenges',
      text: 'One challenge was that HLSL doesn’t have a built-in random function, so I had to implement my own. Along the way I learned how pseudo-randomness actually works on the GPU'
    },
    {
      label: 'Result',
      text: 'Completed making the final raytracer of the book including different materials, random function, movable camera and anti-aliasing'
    }
  ];


  const galleryImages = [
    { alt: 'Final shader and a C# script for controls with WASD CTRL and SPACE', src: rtcontrols },
    { alt: 'Chapter six: surface normals and multiple spheres', src: rt1 },
    { alt: 'Chapter seven: diffuse materials', src: rt2 }
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
          <a
            href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
            target="_blank"
            rel="noreferrer"
            class="cta cta-primary"
          >
            Read the book
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
            onclick={() => openFullscreen(raytracerShot)}
          >
            <img src={raytracerShot} alt="Ray traced spheres rendered in HLSL" class="w-full object-cover" />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(79,70,229,0.25)]">
      <h2 class="text-2xl font-semibold">Summary</h2>
      <p class="mt-4 text-gray-600">{project.contribution}</p>
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
        <h2 class="text-3xl font-semibold">Continuing the series</h2>
        <p class="mt-3 text-gray-300">
          I would like to dive into the sequels from the Ray Tracing in One Weekend series (BVHs, textures, quads).
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href={withBase('/Projects/ProjectView')} class="cta cta-ghost text-white border-white/40">Browse more projects</a>
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
