<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
    validator: (value: any) => {
      return value && typeof value.name === 'string' &&
        typeof value.description === 'string' &&
        typeof value.source === 'string';
    }
  }
});

class ProjectCard {
  name: string;
  description: string;
  source: string;
  constructor(name: string, description: string, source: string) {
    this.name = name;
    this.description = description;
    this.source = source;
  }
}

let url = props.project.source;
let fadeIn: boolean = false;
</script>
<template>
  <div
    class="flex flex-col justify-between bg-white rounded-lg shadow border border-neutral-700 dark:bg-neutral-800 h-[12em] w-[18em] hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 relative overflow-hidden">
    <span class="flex-nowrap block">
      <a :href="project.source">
        <div class="flex h-full" style="z-index: 2">
          <div class="px-2.5 py-1.5 w-full">
            <a>
              <h5 class="tracking-tight font-medium text-slate-300 dark:text-slate-300">{{ project.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{{ project.description }}</p>
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
.fade-in {
  @apply bg-neutral-800;
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}

.fade-in:not(:hover) {
  @apply bg-neutral-800;
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}

.fade-in:hover {
  @apply bg-neutral-800;
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}

.fade-out {
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}

.fade-out:hover {
  opacity: 0;
  transition: opacity 220ms ease-in-out;
}

.fade-out:not(:hover) {
  opacity: 100;
  transition: opacity 220ms ease-in-out;
}
</style>