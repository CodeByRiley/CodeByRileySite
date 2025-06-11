<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
import Card from "~/components/Projects/Project-Card.vue";
import ProjectCard from "~/components/Projects/ProjectCard";
import {Octokit} from "@octokit/rest";
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});
let projects: ProjectCard[] = [];


const {data: repos} = await octokit.rest.repos.listForUser({
  username: "viadot"
});
for(const repo of repos){
  console.log(repo.html_url);
  projects.push(new ProjectCard(repo.name, repo.description == null ? "No description provided" : repo.description, repo.html_url));
}
</script>
<script defer lang="ts">

</script>
<template>
  <div>
    <Head>
      <Title> Projects </Title>
    </Head>
    <Navbar />
    <div class="py-1" />
    <Transition name="fade" mode="out-in">
      <div>
        <div class="py-2 text-center rounded mx-[30.5em]">
          <h1 class="text-xl font-medium flex-wrap">Check out some projects I'm working on.</h1>
        </div>
        <div class="py-1"></div>
        <TransitionGroup name="fade" tag="div" class="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 p-4">
          <div v-for="(project, i) in projects" :key="project.source" class="col-span-2 transform transition-transform duration-300" :style="{ transitionDelay: (i * 100) + 'ms' }">
            <Card :project="project"/>
          </div>
        </TransitionGroup>
      </div>
    </Transition>

  </div>


</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 100ms;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>