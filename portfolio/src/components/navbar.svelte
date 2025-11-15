<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let open = false;

  // Close the mobile menu when route changes
  let unsubscribe: () => void;
  onMount(() => {
    unsubscribe = page.subscribe(() => (open = false));
    return () => unsubscribe?.();
  });

  // Helper to highlight active links
  $: pathname = $page.url.pathname;
  const isActive = (href: string) =>
    pathname === href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200';
</script>

<nav class="">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex h-16 items-center justify-between">
      <!-- Brand -->
      <a href="/" class="flex items-center gap-2 font-semibold text-xl">
        <span class="inline-block rounded bg-blue-600 text-white px-2 py-1 text-sm">TP</span>
        <span>Torben’s Portfolio</span>
      </a>

      <!-- Desktop links -->
     <nav class="flex justify-between items-center px-8 py-4 text-xl">
  <ul class="flex space-x-8  font-medium">
  <li><a href="#about" class="relative text-gray-700 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-400 hover:text-gray-500 hover:after:w-full">About</a></li>
  <li><a href="/Experience" class="relative text-gray-700 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-400 hover:text-gray-500 hover:after:w-full">Experience</a></li>
  <li><a href="/Projects/ProjectView" class="relative text-gray-700 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-400 hover:text-gray-500 hover:after:w-full">Projects</a></li>
  <li><a href="#contact" class="relative text-gray-700 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-400 hover:text-gray-500 hover:after:w-full">Contact</a></li>
</ul>

</nav>
   
    </div>
  </div>


</nav>
