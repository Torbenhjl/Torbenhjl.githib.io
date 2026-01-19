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
  import sofaområde from '$lib/images/hvlsofaområde.png';


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
      ""
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Give the general public a low-stakes way to experience fire scenarios so they feel calm during real emergencies, improving emergency preparedness'
    },
    {
      label: 'Impact',
      text: 'Evaluation of the project will be around march 2026. Hopefully gaining insights into needed fidelity for effective training'
    },
    {
      label: 'Challenges',
      text: 'How much and what type of fidelity matters for effective training simulations?'
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
    { alt: 'Lounge area in 3rd floor', src: sofaområde },
  ];

  let fullscreenImage: string | null = $state(null);

 function openFullscreen(src: string) {
    fullscreenImage = src;
}

 function closeFullscreen() {
    fullscreenImage = null;
}
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
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <figure
            class="relative z-10 rounded-3xl bg-gray-50 cursor-pointer hover:shadow-lg transition-shadow"
            onclick={() => openFullscreen(HVLFire)}
          >
            <img src={HVLFire} alt="Screenshot from the VR Fire Escape Game" class="w-full object-cover" />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(15,23,42,0.14)]">
      <h2 class="text-2xl font-semibold">Aim of the MSc project</h2>
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
   

     
    </div>

    <article class="rounded-3xl border border-dashed border-gray-300 bg-white/70 p-8">
      <h3 class="text-xl font-semibold text-gray-900">B-Prepared collaboration</h3>
      <p class="mt-4 text-gray-600">
        The B-Prepared initiative (<a href="https://b-prepared-project.com/" target="_blank" class="text-blue-500 underline">b-prepared-project.com</a>)
        aims to improve the emergency preparedness of the general public with the help of technology through four main channels. RU-prepared, VR-prepared, IM-prepared and Disastropedia. Our contribution is in the VR-prepared category.
      </p>

    </article>

    <div class="grid gap-6 md:grid-cols-3">
      {#each galleryImages as image}
        <figure class="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
        onclick={() => openFullscreen(image.src)}>
          <img src={image.src} alt={image.alt} class="h-56 w-full object-cover" />
          <figcaption class="px-4 py-3 text-sm text-gray-500">{image.alt}</figcaption>
        </figure>
      {/each}
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
        <a href={withBase('/Projects/ProjectView')} class="cta cta-ghost !text-white border-white/40">Browse more projects</a>
      </div>
    </div>
  </section>

<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if fullscreenImage}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onclick={closeFullscreen}>
      <div class="relative max-w-4xl w-full" onclick={(e) => e.stopPropagation()}>
        <img src={fullscreenImage} alt="Fullscreen" class="w-full rounded-lg" />
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button onclick={closeFullscreen} class="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  {/if}
</main>
