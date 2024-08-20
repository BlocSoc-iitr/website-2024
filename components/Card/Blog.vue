<template>
  <div class="border-b pb-8">
    <a :href="link">
      <div>
        <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
        <p class="text-gray-600 mb-4">{{ description }}</p>
      </div>
    </a>
      <div>
        <p class="text-sm text-gray-500">
          by {{ author }} on {{ date }}
        </p>
        <a :href="link" class="text-blue-500 hover:underline">
          Read more →
        </a>
      </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  author: string,
  date: string,
  slug: string,
  link: string,
}>();
</script>
