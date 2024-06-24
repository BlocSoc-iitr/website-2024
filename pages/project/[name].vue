<template>
  <div class="mt-10" v-if="project">
    <img class="w-64 h-64" :src="project.image" :alt="project.title" />
    <div class="mt-5 text-gray-500 text-sm">{{ project.year }}</div>
    <h1 class="mt-2 font-semibold text-4xl">{{ project.title }}</h1>
    <p class="mt-5">{{ project.desca }}</p>
    <p class="mt-5">{{ project.descb }}</p>
    <div class="mt-5 mb-6">
      <a v-if="project.website" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.website" target="_blank">Website</a>
      <a v-if="project.devfolio" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.devfolio" target="_blank">Devfolio</a>
      <a v-if="project.ethereum" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.ethereum" target="_blank">Eth Global</a>
      <a v-if="project.devpost" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.devpost" target="_blank">Devpost</a>
      <a v-if="project.github" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.github" target="_blank">GitHub</a>
      <a v-if="project.twitter" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.twitter" target="_blank">Twitter</a>
      <a v-if="project.linkedin" class="mr-1 bg-[#dce6f0] text-[#19232d] px-[0.9rem] py-[0.35rem] rounded-[0.4rem] text-sm cursor-pointer hover:bg-[#19232d] hover:text-[#fff] transition duration-250 ease-in-out" :href="project.linkedin" target="_blank">LinkedIn</a>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/constants/projects';
import {startups} from "~/constants/projects";

const route = useRoute();
const project = ref<any | null>(null);

onMounted(() => {
  const projectName = route.params.name.toString().toLowerCase();

  const findProject = (arr: any[]) => arr.find(p => p.title.toLowerCase() === projectName);
  project.value = findProject(startups) || findProject(projects) || null;
});
</script>
