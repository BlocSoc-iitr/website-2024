<template>
  <div class="flex-grow px-4 mt-12">
    <h2 class="text-2xl font-semibold">Start-ups</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 mb-4 md:grid-cols-2">
      <CardProject v-for="startup in startups" :key="startup.title" :title="startup.title" :description="startup.description" :image="startup.image" :github="startup.github" :website="startup.website" />
    </div>

    <h2 class="text-2xl font-semibold">Projects</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <CardProject v-for="project in projects" :key="project.title" :title="project.title" :description="project.description" :image="project.image" :github="project.github" :website="project.website" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {projects} from "~/constants/projects"
import {startups} from "~/constants/projects"
</script>
