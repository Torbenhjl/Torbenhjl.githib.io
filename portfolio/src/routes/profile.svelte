<script lang="ts">

let {name}: {name: String} = $props();
</script>


<input type="text" bind:value={name} class=""/>