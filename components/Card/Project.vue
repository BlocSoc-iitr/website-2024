<template>
  <NuxtLink :to="`/project/${title.toLowerCase()}`">
    <div class="flex flex-row gap-4 w-80">
      <div class="w-24 h-24 self-stretch">
        <img v-if="image" :src="image" :alt="title" class="w-24 h-full" />
        <SvgoProject v-else class="w-24 h-24 text-gray-400" />
      </div>
      <div class="flex flex-col gap-1 justify-between w-40 self-stretch">
        <h3 class="text-base font-semibold">{{title}}</h3>
        <p class="text-sm font-medium text-gray-500 break-words">{{description}}</p>
        <p class="flex flex-row items-center justify-start gap-2 text-xs font-medium text-gray-400">
          <!--        <NuxtLink v-if="project.github" :to="project.github" target="_blank">-->
          <!--          <SvgoGithub class="w-4 h-4 cursor-pointer hover:text-gray-600" />-->
          <!--        </NuxtLink>-->
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  image?: string;
  github?: string;
  website?: string;
}>();
</script>
