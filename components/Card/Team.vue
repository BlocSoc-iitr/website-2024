<template>
  <div class="flex flex-row gap-4 w-80">
    <div class="w-24 h-24 bg-gray-100 self-stretch">
      <img v-if="image" :src="image" :alt="name" class="w-24 h-full object-cover" />
      <SvgoProfileMale v-else-if="gender === 'male'" class="w-24 h-24 text-gray-400"/>
      <SvgoProfileFemale v-else class="w-24 h-24 text-gray-400"/>
    </div>
    <div class="flex flex-col gap-1 justify-between w-40 self-stretch">
      <h3 class="text-base font-semibold">{{name}}</h3>
      <p class="text-sm font-medium text-gray-500 break-words">{{designation_a}}</p>
      <p v-if="designation_b" class="text-sm font-medium text-gray-500 break-words">{{designation_b}}</p>
      <p class="flex flex-row items-center justify-start gap-2 text-xs font-medium text-gray-400">
        <NuxtLink v-if="github" :to="github" target="_blank">
          <SvgoGithub class="w-4 h-4 cursor-pointer hover:text-gray-600" />
        </NuxtLink>
        <NuxtLink v-if="twitter" :to="twitter" target="_blank">
          <SvgoTwitter class="w-4 h-4 cursor-pointer hover:text-gray-600" />
        </NuxtLink>
        <NuxtLink v-if="linkedin" :to="linkedin" target="_blank">
          <SvgoLinkedin class="w-4 h-4 cursor-pointer hover:text-gray-600" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  designation_a: string;
  designation_b?: string;
  image?: string;
  github: string;
  twitter: string;
  linkedin: string;
  gender: string;
}>();
</script>
