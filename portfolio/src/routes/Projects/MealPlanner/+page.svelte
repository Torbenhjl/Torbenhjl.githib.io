<script lang="ts">
import github from '$lib/images/github-mark-white.png';
import mealplanner from '$lib/images/mealplanner.png';

</script>

<main class="max-w-4xl mx-auto px-4 py-10 flex flex-col min-h-screen">
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Meal planner app</h1>
    <a
      href="https://github.com/Torbenhjl/MealPlanner"
      target="_blank"
      class="inline-flex items-center gap-2"
    >
      <span>Github:</span>
      <img src={github} alt="GitHub logo" class="h-8 w-8 hover:opacity-80 transition bg-black mb-2" />
    </a>
  </div>

   <img src={mealplanner} alt="VR Fire Escape Game" class="w-full rounded-xl shadow-md" />
   <a href="/" class="border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded-xl inline-block mt-auto self-start">
    Go back
  </a>
</main>
