<script lang="ts">
import Card from "../../../components/projectCard.svelte"
import image from '$lib/images/MinigolfVR.png'
import HVLFire from '$lib/images/hvlfire.png'
import MealPlanner from '$lib/images/mealplanner.png'
</script>

<h1 class="font-sans text-5xl font-bold text-center mt-10">Her er noen kule prosjekter</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-5"> 
   

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
    title="Portfolio Page"
    image={image}
    link="/"
  />
</div>