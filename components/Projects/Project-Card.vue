<script setup lang="ts">
import ProjectCard from "~/components/Projects/ProjectCard";
import {querySelector} from "ultrahtml/selector";
const props = defineProps({
  project: {
    type: ProjectCard,
    required: true
  }
});
let url = props.project.source;
let fadeIn:boolean = false;

</script>
<template>

  <div class="bg-white rounded-lg shadow border border-neutral-700 dark:bg-neutral-800 h-[10em] hover:bg-neutral-700 dark:hover:bg-neutral-700">
    <span class="flex-nowrap block">
      <a :href="project.source">
        <div class="flex h-32" style="z-index: 2">
          <div class="px-2.5 py-1.5">
            <a>
              <h5 class="tracking-tight font-medium text-slate-300 dark:text-slate-300">{{project.name}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{project.description}}</p>
          </div>
        </div>
        <p class="opacity-10 text-center">view source</p>
      </a>
    </span>
  </div>
</template>
<script lang="ts">

</script>
<style scoped>
.fade-in{
  @apply bg-neutral-800;
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}
.fade-in:not(:hover){
  @apply bg-neutral-800;
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}
.fade-in:hover{
  @apply bg-neutral-800;
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}
.fade-out {
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}
.fade-out:hover{
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}
.fade-out:not(:hover) {
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}
</style>