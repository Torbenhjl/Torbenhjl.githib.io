<!-- src/routes/+page.svelte -->
<script lang="ts">
import Profile from "./profile.svelte";
import Card from '../components/projectCard.svelte';
import image from '$lib/images/MinigolfVR.png'
import HVLFire from '$lib/images/hvlfire.png'
import MealPlanner from '$lib/images/mealplanner.png'
import FAM from '$lib/images/theFam.jpg'

let status: 'OPEN' | 'CLOSED' = $state('OPEN');

function toggle() {
  status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
}

</script>
<h1 class="font-sans text-5xl font-bold text-center mt-10">
  Portfolio Page


  <p class="mt-10 text-lg">Welcome to my portfolio page. Take a look around at my awesome and not so awesome projects</p>
  <button class="border-2 border-blue-500 hover:bg-blue-500
   hover:text-white transition-colors px-4 py-2 rounded-xl mt-10 cursor-pointer" onclick={toggle}>{status === 'OPEN' ? 'Hide projects'
   : 'Show projects'} </button>
</h1>


{#if status === 'OPEN'}
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-5 px-30"> 
   

  <Card
    title="VR Fire Escape Game"
    image={HVLFire}
    link="/Projects/HVLFire"
  />
    
  <Card
    title="Meal Planner App"
    image={MealPlanner}
    link="/Projects/MealPlanner"
  />

  <Card
    title="Minigolf VR"
    image={image}
    link="/Projects/minigolfVR"
    github="Github"
  />
</div>
{:else}
<div class="justify-items-center mt-10">
  <h2>This my gang</h2>
<img src={FAM} alt="Family photo" class="w-100 max-w-full rounded-xl mx-auto" >
</div>
{/if}
