<template>
  <div class="flex flex-row w-full gap-6">
    <div class="w-24 h-24 bg-gray-100">
      <SvgoProject class="w-24 h-24 text-gray-400" />
    </div>
    <div class="flex flex-col w-full gap-2">
      <div class="flex flex-row items-center justify-start gap-2">
      <h3 class="text-base font-semibold">{{ project.title }}</h3>
       <p
        class="text-xs font-medium text-gray-400 cursor-pointer hover:text-gray-500"
      >
        <NuxtLink :to="project.github" target="_blank">
          <SvgoGithub class="w-4 h-4" />
        </NuxtLink>
      </p>
      </div>
      <p class="text-sm font-medium text-gray-500">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
