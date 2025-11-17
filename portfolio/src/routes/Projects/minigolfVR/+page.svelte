<script lang="ts">
  import minigolf from '$lib/images/MinigolfVR.png';

  const project = {
    title: 'Minigolf VR',
    tagline: 'Playful physics playground with custom tracks and multiplayer ghost races.',
    summary:
      'A Unity VR prototype that blends calm environments with trickshot challenges. Built to explore tactile interactions, haptics, and networked scoreboards.',
    stack: ['Unity', 'C#' ],
    duration: '10 weeks',
    role: 'Gameplay programmer',
    team: 'Solo project',
    contribution:
      '9 hole VR minigolf game in a cozy mountain valley'
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Make VR feel cozy—inviting enough for casual players yet deep for speedrunners chasing trickshots.'
    },
    {
      label: 'Experiment',
      text: 'Used custom shaders for day/night moods and reactive foliage that wobbles when the ball passes.'
    },
    {
      label: 'Results',
      text: 'Friends kept replaying holes to beat ghost times, validating the asynchronous multiplayer concept.'
    }
  ];

  const process = [
    {
      title: 'Feel first',
      body: 'Started with putter physics, haptic pulses, and spatial audio before worrying about art polish.'
    },
    {
      title: 'World building',
      body: 'Kitbashed stylized assets, added animated waterfalls, and sculpted terrain splines for smooth curves.'
    },
    {
      title: 'Playtests',
      body: 'Hosted remote playtests, captured telemetry for shot counts, and iterated on par balancing.'
    }
  ];

  const galleryImages = [
    { alt: 'Luminous canyon course placeholder', src: minigolf },
    { alt: 'Night mode course placeholder', src: minigolf },
    { alt: 'Ghost race HUD placeholder', src: minigolf }
  ];
</script>

<main class="min-h-screen bg-[#edf2ff] text-slate-900">
  <section class="bg-gradient-to-br from-indigo-900 via-blue-800 to-slate-900 text-white">
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
          <a href="https://example.com/minigolf" target="_blank" class="cta cta-primary">Watch demo</a>
          <a href="/Projects/ProjectView" class="cta cta-secondary">Back to projects</a>
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
          <img src={minigolf} alt="Minigolf VR environment" class="w-full object-cover" />
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
          <li>- Reading the slope via controller haptics before you swing.</li>
          <li>- Unlocking “zen gardens” after streaks of par or better.</li>
          <li>- Challenging ghost recordings from friends to learn new trick lines.</li>
        </ul>
      </article>

      <article class="rounded-3xl border border-gray-200 bg-white p-8">
        <h3 class="text-xl font-semibold text-gray-900">Ghost race netcode</h3>
        <p class="mt-4 text-gray-600">
          Photon records position + club velocity each stroke, compresses it, and replays it as a translucent ghost.
          Players feel competitive pressure without requiring synchronous multiplayer.
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
        <h2 class="text-3xl font-semibold">Open to collabs</h2>
        <p class="mt-3 text-gray-300">
          Looking at seasonal events, course builder tools, and Steam demo prep. Reach out if you want to send golfers through your world.
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href="mailto:torben@example.com" class="cta cta-primary">Chat about VR</a>
        <a href="/Projects/ProjectView" class="cta cta-ghost text-white border-white/40">Browse more projects</a>
      </div>
    </div>
  </section>
</main>
