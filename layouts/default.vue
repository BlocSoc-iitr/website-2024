<template>
  <div class="flex items-start justify-center w-full">
    <div class="w-full max-w-2xl mt-8">
      <header class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-start w-full pb-4 border-b border-gray-200"
        >
          <SvgoLogo class="w-24 h-16" />
          <div class="flex flex-col">
            <h2 class="text-2xl font-semibold">Blockchain Society</h2>
            <h3>Indian Institute of Technology Roorkee</h3>
          </div>
        </div>
        <div
          class="flex flex-row text-xs text-gray-500 border-b border-gray-200"
        >
        <div class="flex flex-row items-center justify-start w-full overflow-x-auto font-medium">
          <NuxtLink to="/" class="p-4">Home</NuxtLink>
          <NuxtLink to="/projects" class="p-4">Projects</NuxtLink>
          <!-- <NuxtLink to="/events" class="p-4">Events</NuxtLink> -->
          <NuxtLink to="/achievements" class="p-4">Achievements</NuxtLink>
          <!-- <NuxtLink to="/resources" class="p-4">Resources</NuxtLink> -->
          <NuxtLink to="/team" class="p-4">Team</NuxtLink>
        </div>
        </div>
      </header>
      <slot />
      <footer class="flex flex-row items-center justify-between p-4 mt-4 text-xs text-gray-400 border-t border-gray-200">
        <div>&copy; 2024 Blockchain Society, IIT Roorkee</div>
        <div class="flex flex-row items-center justify-center gap-2">
          <a href="mailto:blocsoc.acm@iitr.ac.in" target="_blank">
            <SvgoEmail class="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://github.com/BlocSoc-iitr" target="_blank">
            <SvgoGithub class="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://twitter.com/BlocSocIITR" target="_blank">
            <SvgoTwitter class="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://www.linkedin.com/company/blockchain-society-iit-roorkee/" target="_blank">
            <SvgoLinkedin class="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://www.instagram.com/blocsociitr/" target="_blank">
            <SvgoInstagram class="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
//#0C21D6
</script>

<style scoped>
  .router-link-exact-active{
    color: #0C21D6;
    @apply font-semibold;
  }
</style>
