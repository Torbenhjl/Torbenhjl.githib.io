<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/navbar.svelte';
	
	export const prerender = true;
	export const ssr = false;
	
	let { children } = $props();
</script>
<Navbar/>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
