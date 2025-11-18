<script lang="ts">
  import mealplanner from '$lib/images/mealplanner.png';
  import picture1 from '$lib/images/Picture1.png';
  import picture2 from '$lib/images/Picture2.png';
  import picture3 from '$lib/images/Picture3.png';
  import picture4 from '$lib/images/Picture4.png';
  import { withBase } from '$lib/utils/paths';

  const project = {
    title: 'Meal Planner App',
    tagline: 'Meal planner app meant to organize meals in advance so you can just look in the calender to see whats for dinner.',
    summary:
      'A fun project i made on my spare time. It lets me make recepies and insert from the list of recepies in an interractive calender.',
    stack: ['Vue', 'Spring boot', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    duration: '8 weeks',
    role: 'Full‑stack dev',
    team: 'Me :)',
    contribution:
      'Designed the UI system, built the spring backend with JPA for storing recipies, users, scheduled meals etc and other features'
  };

  const highlights = [
    {
      label: 'Goal',
      text: 'Wanted to learn spring boot and vue better. Gradually implemented new features such as jwt authentication'
    },
    {
      label: 'Learning outcomes',
      text: 'Got to learn spring and vue a lot better. Also got to use JWT and docker, JPA for storage and more'
    }
  ];


  const galleryImages = [
    { alt: 'List of created recipies', src: picture1 },
    { alt: 'Meal creation', src: picture2 },
    { alt: 'Interractive calender', src: picture4 }
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
  <section class="bg-gradient-to-br from-rose-500 via-amber-400 to-orange-300 text-white">
    <div class="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12 lg:flex-row lg:items-center">
      <div class="space-y-6 max-w-xl">
        <h1 class="text-4xl font-semibold lg:text-5xl">{project.title}</h1>
        <p class="text-xl text-white/90">{project.tagline}</p>
        <p class="text-white/90 leading-relaxed">{project.summary}</p>

        <div class="flex flex-wrap gap-2">
          {#each project.stack as tech}
            <span class="rounded-full border border-white/20 bg-white/15 px-4 py-1 text-sm">{tech}</span>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/Torbenhjl/MealPlanner" target="_blank" class="cta cta-primary">View repo</a>
          <a href={withBase('/Projects/ProjectView')} class="cta cta-secondary">Back to projects</a>
        </div>

        
      </div>

      <div class="relative w-full lg:w-auto">
        <div class="absolute -inset-6 rounded-[32px] bg-white/20 blur-3xl" aria-hidden="true"></div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
         <figure
            class="relative z-10 rounded-3xl bg-gray-50 cursor-pointer hover:shadow-lg transition-shadow"
            onclick={() => openFullscreen(mealplanner)}
          >
            <img src={mealplanner} alt="Screenshot from the VR Fire Escape Game" class="w-full object-cover rounded-3xl" />
          </figure>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto -mt-16 px-6">
    <div class="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(244,114,182,0.2)]">
      <h2 class="text-2xl font-semibold">Summary</h2>
      <p class="mt-4 text-gray-600">{project.contribution}</p>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        {#each highlights as highlight}
          <article class="rounded-2xl border border-rose-50 bg-rose-50/70 p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-rose-400">{highlight.label}</p>
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
        <figure class="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm cursor-pointer hover:shadow-lg transition-shadow" onclick={() => openFullscreen(image.src)}>
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
        <h2 class="text-3xl font-semibold">Deploy?</h2>
        <p class="mt-3 text-gray-300">
       Would be fun to deploy this. For now just a local application.
        </p>
      </div>
      <div class="flex flex-col gap-3 md:items-end">
        <a href={withBase('/Projects/ProjectView')} class="cta cta-ghost text-white border-white/40">Browse more projects</a>
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
