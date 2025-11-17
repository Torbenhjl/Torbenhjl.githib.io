<script lang="ts">
  import Card from "../../../components/projectCard.svelte";
  import image from '$lib/images/MinigolfVR.png';
  import HVLFire from '$lib/images/hvlfire.png';
  import MealPlanner from '$lib/images/mealplanner.png';
  import raytracer from '$lib/images/raystracer.png';
  import { withBase } from '$lib/utils/paths';
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import IconButton from '@smui/icon-button';

  let snackbarWithClose: Snackbar;

  const noGithubSnackbar = () => {
    snackbarWithClose.open();
  };
</script>

<h1 class="font-sans text-5xl font-bold text-center mt-10">Some of my projects</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-5">
  <Card
    title="VR Fire Escape Game"
    image={HVLFire}
    link={withBase('/Projects/HVLFire')}
    onGithubClick={noGithubSnackbar}
  />

  <Card
    title="Meal Planner App"
    image={MealPlanner}
    link={withBase('/Projects/MealPlanner')}
    github="https://github.com/Torbenhjl/MealPlanner"
  />

  <Card
    title="Minigolf VR"
    image={image}
    link={withBase('/Projects/minigolfVR')}
    onGithubClick={noGithubSnackbar}
  />

  <Card
    title="Raytracer"
    image={raytracer}
    link={withBase('/Projects/raytracer')}
    github="https://github.com/Torbenhjl/lecture9UnityCodeStartRaytracer"
  />
</div>

<Snackbar bind:this={snackbarWithClose}>
  <Label>No github repo, unity projects use unity version control</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>
