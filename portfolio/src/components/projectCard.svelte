<script lang="ts">
  export let title: string;
  export let image: string;
  export let link: string;
</script>

<a
  href={link}
  class="block rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-shadow duration-200"
>
  <img src={image} alt={title} class="aspect-square object-cover" />

  <div class="p-4">
    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
      {title}
    </h2>
  </div>
</a>
