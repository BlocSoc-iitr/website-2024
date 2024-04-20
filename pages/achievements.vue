<template>
  <div class="px-4 mt-12">
    <h2 class="text-2xl font-semibold">Achievements</h2>
  </div>
  <div class="mt-4" v-for="(achievement, i) in Achievements" :key="i">
    <div class="flex flex-row items-start justify-start w-full gap-4">
      <div
        class="flex flex-col items-center justify-center w-5 h-full gap-3 py-2"
      >
        <div class="w-[8px] h-[8px] rounded-full bg-gray-300" />
        <div class="h-full min-h-[30px] border-r border-gray-300" />
        <div v-if="i === Achievements.length - 1" class="w-[8px] h-[8px] rounded-full bg-gray-300" />
      </div>
      <div class="flex flex-row items-center justify-center w-full h-full gap-2">
        <div class="flex flex-col items-start justify-center w-full gap-1">
          <div class="text-sm font-medium">{{achievement.title}}</div>
          <div class="text-xs font-medium text-gray-400">
            <p>{{achievement.year}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Achievements } from "@/constants/achievements";
</script>
