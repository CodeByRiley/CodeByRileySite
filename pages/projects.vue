<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
import Card from "~/components/Projects/Project-Card.vue";



</script>
<script defer lang="ts">
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
          <h1 class="text-xl font-medium">Check out some projects I'm working on.</h1>
        </div>
        <div class="py-1"></div>
        <div class="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2.5">
          <div v-for="project in projects" class=" col-span-2 ">
            <Card :project="project"/>
          </div>
        </div>
      </div>
    </Transition>

  </div>


</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>