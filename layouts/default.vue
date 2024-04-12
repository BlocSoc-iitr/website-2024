<template>
  <div class="flex justify-center items-start w-full">
    <div class="max-w-2xl w-full mt-4">
      <header class="flex flex-col w-full">
        <div
          class="flex flex-row w-full justify-start items-center border-gray-200 border-b pb-4"
        >
          <SvgoLogo class="h-16 w-24" />
          <div class="flex flex-col">
            <h2 class="font-semibold text-2xl">Blockchain Society</h2>
            <h3>Indian Institute of Technology Roorkee</h3>
          </div>
        </div>
        <div
          class="flex flex-row text-gray-500 border-b border-gray-200 text-xs"
        >
        <div class="overflow-x-auto flex flex-row w-full justify-start items-center">
          <NuxtLink to="/" class="p-4 text-[#0C21D6]">Home</NuxtLink>
          <NuxtLink to="/projects" class="p-4">Projects</NuxtLink>
          <NuxtLink to="/events" class="p-4">Events</NuxtLink>
          <NuxtLink to="/achievements" class="p-4">Achievements</NuxtLink>
          <NuxtLink to="/resources" class="p-4">Resources</NuxtLink>
          <NuxtLink to="/team" class="p-4">Team</NuxtLink>
          <NuxtLink to="/contact" class="p-4">Contact</NuxtLink>
        </div>
        </div>
      </header>
      <slot />
      <footer class="mt-8 border-t border-gray- p-4 text-gray-400 text-xs">
        &copy; 2024 Blockchain Society, IIT Roorkee
      </footer>
    </div>
  </div>
</template>

<script setup></script>
