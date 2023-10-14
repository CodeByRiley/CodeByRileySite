<script setup lang="ts">
import ProjectCard from "~/components/Projects/ProjectCard";
defineProps({
  project: {
    type: ProjectCard,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow border border-neutral-700 dark:bg-neutral-800">
    <div class="px-2.5 py-1.5">
      <a>
        <h5 class="tracking-tight font-medium text-slate-300 dark:text-slate-300">{{project.name}}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{project.description}}</p>
      <a href="{{project.source}}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View source
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>