<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import { useAsyncData } from '#app'
import Navbar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
import Card from "~/components/Projects/Project-Card.vue";
import ProjectCard from "~/components/Projects/ProjectCard";
import { Octokit } from "@octokit/rest";

const { data: projects } = await useAsyncData('projects', async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const { data: repos } = await octokit.rest.repos.listForUser({
    username: "codebyriley"
  });
  return repos.map(repo => ({
    name: repo.name,
    description: repo.description == null ? "No description provided" : repo.description,
    source: repo.html_url
  }));
});
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
          <TransitionGroup name="fade" tag="div" class="w-full grid justify-center p-4 projects-grid"
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