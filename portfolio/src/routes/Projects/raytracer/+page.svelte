<script lang="ts">
  import raytracerShot from '$lib/images/raystracer.png';
  import { withBase } from '$lib/utils/paths';

  const project = {
    title: 'GPU Ray Tracer',
    tagline: 'Porting "Ray Tracing in One Weekend" to a realtime HLSL compute shader.',
    summary:
      "I translated Peter Shirley's CPU implementation into an HLSL compute shader that runs inside Unity. The build focuses on the fundamentals: sampling BRDFs, bouncing rays, denoising, and exposing everything through lightweight editor tooling.",
    stack: ['Unity', 'HLSL', 'Compute Shaders', 'C#'],
    duration: '3 weeks of evenings',
    role: 'Graphics programmer',
    team: 'Solo project',
    contribution:
      'Recreated the complete renderer on the GPU, built buffer packing utilities in C#, and exposed live controls for bounces, samples per pixel, and depth of field to study how each lever affects convergence.'
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Internalize the math and data flow behind ray tracing by rewriting it from scratch instead of relying on Unity lighting presets.'
    },
    {
      label: 'Porting win',
      text: 'Converted the recursive C++ scenes into iterative GPU-friendly kernels, replacing pointers with packed float4 buffers and struct-of-arrays layouts.'
    },
    {
      label: 'Result',
      text: '1080p frames with metals, dielectrics, motion blur, and depth of field converge in ~2 seconds at 128 spp on an RTX 3060 laptop GPU.'
    }
  ];

  const process = [
    {
      title: 'C++ to HLSL',
      body: 'Rebuilt sphere, material, and camera structs as raw buffers, rewired the RNG, and emulated recursion with a manual stack inside the compute shader.'
    },
    {
      title: 'Material studies',
      body: 'Implemented lambertian, metal, dielectric, and emissive BRDFs plus helper visualizations for normals, ray depth, and albedo to debug sampling.'
    },
    {
      title: 'Unity integration',
      body: 'C# scripts stream scene data to the GPU, accumulate frames over time, and provide pause/save buttons for exporting stills without blocking the editor.'
    }
  ];

  const galleryImages = [
    { alt: 'First converged diffuse render from the compute shader', src: raytracerShot },
    { alt: 'Metals, dielectrics, and emissive spheres with depth of field', src: raytracerShot },
    { alt: 'Debug view showing surface normals and focus plane', src: raytracerShot }
  ];


  const fullHref = (link: (typeof links)[number]) => `${base}${link.href}`;
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
          <img src={raytracerShot} alt="Ray traced spheres rendered in HLSL" class="w-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(79,70,229,0.25)]">
      <h2 class="text-2xl font-semibold">Mission</h2>
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
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(79,70,229,0.2)]">
        <h3 class="text-xl font-semibold text-gray-900">Experience beats</h3>
        <ul class="mt-4 space-y-4 text-gray-600">
          <li>- Progressive accumulation slider to study noise vs. performance.</li>
          <li>- Camera controls for aperture, focus distance, and shutter time to test DOF + motion blur.</li>
          <li>- Debug overlays that display normals, ray depth, or albedo to quickly find sampling bugs.</li>
        </ul>
      </article>

      <article class="rounded-3xl border border-gray-200 bg-white p-8">
        <h3 class="text-xl font-semibold text-gray-900">Compute shader pipeline</h3>
        <p class="mt-4 text-gray-600">
          Rays are launched in tiles to keep thread groups coherent. Each bounce samples the material, updates energy, and decides whether to terminate via
          Russian roulette. The C# side streams scene buffers (spheres, materials, camera) every edit while async GPU readback saves converged frames.
        </p>
      </article>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      {#each galleryImages as image}
        <figure class="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
          <img src={image.src} alt={image.alt} class="h-56 w-full object-cover" />
          <figcaption class="px-4 py-3 text-sm text-gray-500">{image.alt}</figcaption>
        </figure>
      {/each}
    </div>

    <div>
      <h3 class="text-xl font-semibold text-gray-900">Process & learnings</h3>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        {#each process as step}
          <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p class="text-sm uppercase tracking-[0.3em] text-indigo-400">{step.title}</p>
            <p class="mt-3 text-gray-600">{step.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-6 pb-16">
    <div class="rounded-[32px] bg-slate-900 text-white p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-gray-400">Next</p>
        <h2 class="text-3xl font-semibold">Continuing the series</h2>
        <p class="mt-3 text-gray-300">
          I am currently diving into the sequels from the Ray Tracing in One Weekend series (BVHs, textures, quads). If you are exploring similar graphics experiments, let's chat.
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href={withBase('/contact')} class="cta cta-primary">Start a graphics convo</a>
        <a href={withBase('/Projects/projectView')} class="cta cta-ghost text-white border-white/40">Browse more projects</a>
      </div>
    </div>
  </section>
</main>
