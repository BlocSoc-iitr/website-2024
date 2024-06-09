<template>
  <div class="flex flex-col justify-between items-start bg-zinc-900 h-[100svh] w-[18%] text-white">
    <div
      class="flex flex-row items-start justify-start w-full px-6 py-4"
    >
      <SvgoLogo class="w-20 h-16" />
      <div class="flex flex-col mt-1">
        <h2 class="text-sm font-semibold">Blockchain Society</h2>
        <h3 class="text-xs">Indian Institute of Technology Roorkee</h3>
      </div>
    </div>
    
    <div class="flex flex-col w-full h-full gap-2 mt-10">
        <div class="px-6 py-2 text-black cursor-pointer bg-slate-100">Overview</div>
        <div class="px-6 py-2 cursor-pointer">Projects</div>
        <div class="px-6 py-2 cursor-pointer">Achievements</div>
        <div class="px-6 py-2 cursor-pointer">Team</div>
        <div class="px-6 py-2 text-red-500 transition-all cursor-pointer hover:bg-red-500 hover:bg-opacity-10 ">Superuser</div>
    </div>
    <div class="flex flex-row items-center justify-start gap-1 px-6 py-4 text-sm cursor-pointer hover:underline">
        <SvgoLogout class="w-4 h-4" />
        Logout
    </div>
  </div>
</template>