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
<template>
  <Head>
    <Title> Projects </Title>
  </Head>
  <Navbar />

  <div class="grid grid-cols-4 py-1.5 px-2.5">
    <div v-for="project in projects" class="px-0.5">
      <Card :project="project"/>
    </div>
  </div>

</template>
<style scoped>

</style>