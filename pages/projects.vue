<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
import Card from "~/components/Projects/Project-Card.vue";

interface Project {
  name: string;
  description: string;
  source: string;
}

const projects = ref<Project[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Fetch projects with caching
const fetchProjects = async () => {
  // Check for cached data on client side
  if (process.client) {
    const cached = sessionStorage.getItem('projects-cache');
    const cacheTimestamp = sessionStorage.getItem('projects-cache-timestamp');
    
    // Cache is valid for 1 hour
    const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
    const now = Date.now();
    const isCacheValid = cached && cacheTimestamp && (now - parseInt(cacheTimestamp)) < CACHE_DURATION;

    if (isCacheValid) {
      try {
        projects.value = JSON.parse(cached);
        loading.value = false;
        return; // Use cached data, no need to fetch
      } catch (e) {
        // If parsing fails, clear cache
        sessionStorage.removeItem('projects-cache');
        sessionStorage.removeItem('projects-cache-timestamp');
      }
    }
  }

  // Fetch fresh data
  try {
    const data = await $fetch<Project[]>('/api/projects');
    projects.value = data;
    
    // Cache the data on client side
    if (process.client) {
      const now = Date.now();
      sessionStorage.setItem('projects-cache', JSON.stringify(data));
      sessionStorage.setItem('projects-cache-timestamp', now.toString());
    }
  } catch (err) {
    error.value = 'Failed to fetch projects';
    console.error('Error fetching projects:', err);
    
    // Try to use stale cache as fallback
    if (process.client) {
      const cached = sessionStorage.getItem('projects-cache');
      if (cached) {
        try {
          projects.value = JSON.parse(cached);
        } catch (e) {
          // Clear corrupted cache
          sessionStorage.removeItem('projects-cache');
          sessionStorage.removeItem('projects-cache-timestamp');
        }
      }
    }
  } finally {
    loading.value = false;
  }
};

// Fetch projects on page load
await fetchProjects();
</script>
<script defer lang="ts">

</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="py-1" />
    <div class="flex-grow flex flex-col">
      <Transition name="fade" mode="out-in">
        <div class="flex-grow flex flex-col">
          <div class="py-2 text-center rounded mx-4 md:mx-[30.5em]">
            <h1 class="text-xl font-medium flex-wrap">Check out some projects I'm working on.</h1>
          </div>
          <div class="py-1"></div>
          <div v-if="loading" class="flex justify-center items-center py-8">
            <div class="text-slate-300">Loading projects...</div>
          </div>

          <div v-else-if="error" class="flex justify-center items-center py-8">
            <div class="text-red-400">{{ error }}</div>
          </div>

          <TransitionGroup v-else name="fade" tag="div" class="w-full grid justify-center p-4 projects-grid"
            style="gap: 0.55em;">
            <div v-for="(project, i) in projects" :key="project.source"
              class="transform transition-transform duration-300" :style="{ transitionDelay: (i * 100) + 'ms' }">
              <Card :project="project" />
            </div>
          </TransitionGroup>
        </div>
      </Transition>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.projects-grid {
  grid-template-columns: 18em;
  justify-content: center;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, 18em);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>