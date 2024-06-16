<template>
  <div class="px-4 mt-12">
    <h2 class="text-2xl font-semibold">Projects</h2>
    <div class="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <CardProject v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </div>
</template>

<script setup>

const projects = [
  // {
  //   title: 'Selene',
  //   description: 'Selene project',
  //   image: '',
  //   github: 'https://github.com/BlocSoc-iitr/selene'
  // },
  // {
  //   title: 'Beskar',
  //   description: 'Beskar project',
  //   image: '',
  //   github: 'https://github.com/BlocSoc-iitr/Beskar'
  // },
  {
    title: 'OpenStylus',
    description: 'Gas Optimised library for Arbitrum Stylus',
    image: '/project_images/openstylus.webp',
    github: 'https://devfolio.co/projects/open-stylus-0f80'
  },
  {
    title: 'HorseRiders',
    description: 'Complex math and FFT library for huff',
    image: '/project_images/horseriders.png',
    github: 'https://github.com/BlocSoc-iitr/HorseRiders'
  },
  {
    title: 'EaStore',
    description: 'Decentralized Storage Solution on Filecoin',
    image: '/project_images/eastore.webp',
    github: 'https://www.eastore.xyz/'
  },
  {
    title: 'FLockChain',
    description: 'Federated learning on proof of stake',
    image: '/project_images/flockchain.png',
    github: 'https://devfolio.co/projects/flockchain-88eb'
  },
  // {
  //   title: 'DappHack',
  //   description: 'Dapphack project.',
  //   image: '',
  //   github: 'https://ethglobal.com/showcase/dapphack-4tjef'
  // },
  // {
  //   title: 'ETHTools',
  //   description: 'ETHTools project',
  //   image: '',
  //   github: ''
  // },
  // {
  //   title: 'zkQuest',
  //   description: 'zkQuest project',
  //   image: '',
  //   github: ''
  // },
  {
    title: 'zkMask',
    description: "zk face recognition for 2FA",
    image: '/project_images/zkmask_.jpeg',
    github: 'https://ethglobal.com/showcase/zkmask-0x1z4'
  },
  // {
  //   title: 'Arcave',
  //   description: 'Arcave project',
  //   image: '',
  //   github: ''
  // },
  {
    title: 'HyperLand',
    description: "A 3D sandbox game built on SUI",
    image: '/project_images/hyperland.webp',
    github: 'https://devfolio.co/projects/hyperland-da6b'
  }
]
</script>
