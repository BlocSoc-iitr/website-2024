<template>
  <div class="px-4 mt-12">
    <h2 class="text-2xl font-semibold">Team</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <CardTeam v-for="(member, i) in Team" :key="i" :name="member.name" :designation_a="member.designation_a" :designation_b="member.designation_b" :image="member.image" :github="member.github" :twitter="member.twitter" :linkedin="member.linkedin" :gender="member.gender" />
    </div>

    <h2 class="mt-4 text-2xl font-semibold">Genesis</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <CardTeam v-for="(member, i) in Genesis" :key="i" :name="member.name" :designation_a="member.designation_a" :github="member.github" :twitter="member.twitter" :linkedin="member.linkedin" :gender="member.gender" />
    </div>

    <h2 class="mt-4 text-2xl font-semibold">Alums</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <CardTeam v-for="(member, i) in Alums" :key="i" :name="member.name" :designation_a="member.designation_a" :github="member.github" :twitter="member.twitter" :linkedin="member.linkedin" :gender="member.gender" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {Team} from "@/constants/team";
import {Genesis} from "~/constants/genesis";
import {Alums} from "~/constants/alums";
</script>
