<script lang="ts">
  export let title: string;
  export let image: string;
  export let link: string;
  export let github: string | undefined = undefined;
</script>

<article
  class="rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(15,23,42,0.12)] flex flex-col gap-6 text-center"
>
  <div class="w-full overflow-hidden rounded-[28px] border border-gray-100 bg-gray-50">
    <img src={image} alt={title} class="h-64 w-full object-cover" />
  </div>

  <div class="space-y-3">
    
    <h2 class="text-2xl font-semibold text-gray-900">{title}</h2>
  </div>

  <div class="flex flex-wrap items-center justify-center gap-4">  
    {#if github}
      <a href={github} target="_blank" rel="noreferrer" class="card-link">Github</a>
    {/if}
    {#if link}
      <a href={link} class="card-link card-link--dark">Details</a>
    {/if}
  </div>
</article>
