<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  let open = false;

  const links = [
    { href: '/', label: 'Home', type: 'path' },
    { href: '/Experience', label: 'Experience', type: 'path' },
    { href: '/Projects/projectView', label: 'Projects', type: 'path' },
    { href: '/contact', label: 'Contact', type: 'path' }
  ];

  $: pathname = $page.url.pathname;

  const activeClasses = 'text-blue-600 after:w-full after:bg-blue-600';
  const inactiveClasses = 'text-gray-700';

  // full href including base
  const fullHref = (link: (typeof links)[number]) => `${base}${link.href}`;

  const isActive = (link: (typeof links)[number]) =>
    pathname === fullHref(link) ? activeClasses : inactiveClasses;
</script>

<nav class="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex h-16 items-center justify-between">
      <a href="{base}/" class="flex items-center gap-2 font-semibold text-xl">
        <span class="inline-block rounded bg-blue-600 px-2 py-1 text-sm text-white">TP</span>
        <span>Torben's Portfolio</span>
      </a>

      <!-- Desktop -->
      <div class="hidden items-center gap-8 text-sm font-semibold md:flex">
        {#each links as link}
          <a
            href={fullHref(link)}
            class={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all hover:text-gray-500 hover:after:w-full ${isActive(
              link
            )}`}
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Mobile menu button -->
      <button
        class="inline-flex items-center justify-center rounded-full border border-gray-300 p-2 text-gray-700 md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={open}
        on:click={() => (open = !open)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {#if open}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class={`md:hidden ${open ? 'block' : 'hidden'}`}>
      <div class="space-y-1 border-t border-gray-100 py-3 text-sm font-semibold">
        {#each links as link}
          <a
            href={fullHref(link)}
            class={`block rounded-full px-4 py-2 transition-colors ${isActive(link)} hover:bg-gray-100`}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>
