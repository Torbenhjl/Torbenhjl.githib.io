<script lang="ts">
  import HVLFire from '$lib/images/hvlfire.png';
  import sprinkler from '$lib/images/sprinkler.png';
  import hvl1f from '$lib/images/hvl1stfloor.png';
  import hvlexit from '$lib/images/hvlexit.png';
  import hvlcorridor from '$lib/images/hvlcorridor.png';
  import smoke from '$lib/images/hvlsmoke.png';
  import stairs from '$lib/images/stairs.png';
  import endscreen from '$lib/images/endscreen.png';
  import endstats from '$lib/images/endstats.png';
  import { withBase } from '$lib/utils/paths';

  const project = {
    title: 'VR Fire Escape Game',
    tagline: 'Immersive safety training built with XR interactions for the general public.',
    summary:
      'A master-level collaboration with the EU-funded B-Prepared project, designed to let everyday citizens rehearse fire scenarios in a safe, game-like environment.',
    stack: ['Unity', 'Oculus SDK', 'C#'],
    duration: '16 weeks',
    role: 'Systems & UX',
    team: '2 MSc students + B-Prepared mentors',
    contribution:
      "Co-created drills with researchers, led the interaction design, and implemented the adaptive fire spread system that reacts to each trainee's choices."
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Give the general public a low-stakes way to explore “what-if” fire scenarios so they feel calm during real emergencies.'
    },
    {
      label: 'Impact',
      text: 'Test participants completed drills 32% faster after two attempts and reported higher confidence scores.'
    },
    {
      label: 'Challenges',
      text: 'Balancing realism with comfort - too much smoke reduced visibility, while too little lowered urgency.'
    }
  ];

  const process = [
    {
      title: 'Research & Mapping',
      body: 'Shadowed facility managers, collected floor plans and charted critical decision points for each scenario.'
    },
    {
      title: 'Prototype & Playtest',
      body: 'Built rapid Unity prototypes to validate teleport mechanics, smoke effects and haptic cues with testers drawn from the B-Prepared community.'
    },
    {
      title: 'Polish & Delivery',
      body: 'Integrated narration, analytics and Firebase logging so researchers can compare preparedness levels pre/post session.'
    }
  ];

  const galleryImages = [
    { alt: 'Heat indicator and visual impairment when moving close to fires', src: HVLFire },
    { alt: 'sprinkler and alarm system', src: sprinkler },
    { alt: 'first floor corridor', src: hvl1f },
    { alt: '2nd floor corridor', src: hvlcorridor },
    { alt: 'One of two possible exits', src: hvlexit },
    { alt: 'Smoke', src: smoke },
    { alt: 'One of two stairwells', src: stairs },
    { alt: 'End scene upon successfull evacuation. PLayers can view advanced stats, restart, go to lobby and save stats to JSON', src: endscreen },
    { alt: 'Detailed stats for evacuation', src: endstats },
  ];
</script>

<main class="min-h-screen bg-[#f5f5f7] text-gray-900">
  <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12 lg:flex-row lg:items-center">
      <div class="space-y-6 max-w-xl">
       
        <h1 class="text-4xl font-semibold lg:text-5xl">{project.title}</h1>
        <p class="text-xl text-gray-200">{project.tagline}</p>
        <p class="text-gray-300 leading-relaxed">{project.summary}</p>

        <div class="flex flex-wrap gap-2">
          {#each project.stack as tech}
            <span class="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm">{tech}</span>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="https://example.com/hvlfire" target="_blank" class="cta cta-primary">Launch demo</a>
          <a href={withBase('/Projects/ProjectView')} class="cta cta-secondary">Back to projects</a>
        </div>

        <dl class="grid grid-cols-2 gap-6 text-sm text-gray-200 [@media(min-width:520px)]:grid-cols-3">
          <div>
            <dt class="uppercase tracking-[0.3em] text-gray-500">Duration</dt>
            <dd class="text-lg text-white">{project.duration}</dd>
          </div>
          <div>
            <dt class="uppercase tracking-[0.3em] text-gray-500">Role</dt>
            <dd class="text-lg text-white">{project.role}</dd>
          </div>
          <div>
            <dt class="uppercase tracking-[0.3em] text-gray-500">Team</dt>
            <dd class="text-lg text-white">{project.team}</dd>
          </div>
        </dl>
      </div>

      <div class="relative w-full lg:w-auto">
        <div class="absolute -inset-6 rounded-[32px] bg-white/10 blur-3xl" aria-hidden="true"></div>
        <div class="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-gray-800 to-gray-900 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_55%)]" aria-hidden="true"></div>
          <img src={HVLFire} alt="Screenshot from the VR Fire Escape Game" class="w-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(15,23,42,0.14)]">
      <h2 class="text-2xl font-semibold">Mission</h2>
      <p class="mt-4 text-gray-600">{project.contribution}</p>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        {#each highlights as highlight}
          <article class="rounded-2xl border border-gray-100 bg-gray-50/70 p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-gray-400">{highlight.label}</p>
            <p class="mt-3 text-gray-700">{highlight.text}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-6 py-16 space-y-12">
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <h3 class="text-xl font-semibold text-gray-900">Experience goals</h3>
        <ul class="mt-4 space-y-4 text-gray-600">
          <li>- Guide players through escalating fires while reinforcing correct evacuation flows.</li>
          <li>- Deliver feedback in real time using haptics, narration and ambient lighting.</li>
          <li>- Capture analytics to show how long each step took and where confusion happens.</li>
        </ul>
      </article>

      <article class="rounded-3xl border border-gray-200 bg-white p-8">
        <h3 class="text-xl font-semibold text-gray-900">Systems we built</h3>
        <p class="mt-4 text-gray-600">
          A parametric fire spread system creates different escape routes per run. It tracks oxygen levels, spawns smoke,
          and triggers micro-events such as blocked doors or electric sparks, so returning trainees never see the exact
          same scenario.
        </p>
      </article>
    </div>

    <article class="rounded-3xl border border-dashed border-gray-300 bg-white/70 p-8">
      <h3 class="text-xl font-semibold text-gray-900">B-Prepared collaboration</h3>
      <p class="mt-4 text-gray-600">
        The B-Prepared initiative (<a href="https://b-prepared-project.com/" target="_blank" class="text-blue-500 underline">b-prepared-project.com</a>)
        pairs students with emergency planners across Europe. Working alongside one other MSc student, we translated their open data and
        citizen-readiness findings into a playful, accessible trainer that anyone can pick up in a living room headset or museum kiosk.
      </p>
      <p class="mt-4 text-gray-600">
        The drills emphasise household-scale actions: checking exits, communicating with family members, and making split-second decisions about
        when to fight versus when to evacuate. Analytics from the build help the research team adjust public campaigns and measure preparedness gaps over time.
      </p>
    </article>

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
            <p class="text-sm uppercase tracking-[0.3em] text-gray-400">{step.title}</p>
            <p class="mt-3 text-gray-600">{step.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-6 pb-16">
    <div class="rounded-[32px] bg-gray-900 text-white p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-gray-400">Next</p>
        <h2 class="text-3xl font-semibold">Prototype spring 2026</h2>
        <p class="mt-3 text-gray-300">
          The final prototype will be completed in Spring 2026 and aims to be integrated in the b-prapared ecosystem.
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href={withBase('/Projects/projectView')} class="cta cta-ghost !text-white border-white/40">Browse more projects</a>
      </div>
    </div>
  </section>
</main>
