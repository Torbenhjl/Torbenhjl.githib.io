<script lang="ts">
  export let title: string;
  export let image: string;
  export let link: string;
  export let github: string
</script>

<article
  class="rounded-[32px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center p-6 space-y-6"
>
  <div class="w-full flex justify-center px-4">
    <img
      src={image}
      alt={title}
      class="w-full aspect-square max-w-[500px] object-cover rounded-[28px] shadow-md border border-gray-100"
    />
  </div>

  <h2 class="text-xl font-semibold text-gray-900">{title}</h2>

  <div class="flex gap-4 w-full justify-center">
    {#if github}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        class="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
      >
        Github
      </a>
    {/if}
    {#if link}
      <a
        href={link}
        class="px-6 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
      >
        Details
      </a>
    {/if}
  </div>
</article>
