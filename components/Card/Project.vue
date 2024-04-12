<template>
  <div class="flex flex-row gap-6 w-full">
    <div class="w-24 h-24 bg-gray-600" />
    <div class="flex flex-col gap-2 w-full">
      <h3 class="text-base font-semibold">{{ project.title }}</h3>
      <p class="text-sm font-medium text-gray-500">{{ project.description }}</p>
      <p
        class="text-xs text-gray-400 font-medium hover:text-gray-500 cursor-pointer"
      >
        <NuxtLink :to="project.github" target="_blank">
          <SvgoGithub class="h-4 w-4" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
