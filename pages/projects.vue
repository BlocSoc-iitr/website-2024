<template>
    <div class="px-4 mt-12">
       <h2 class="text-2xl font-semibold">Projects</h2>
       <div class="grid grid-cols-1 gap-4 mt-4">
           <CardProject v-for="project in projects" :key="project.title" :project="project" />
       </div>
    </div>
</template>

<script setup>
    const projects = [
        {
            title: 'OpenStylus',
            description: 'Modular and gas-optimized smart contract libraries and frameworks for Stylus Smart contract development.',
            image: 'https://via.placeholder.com/150',
            github: 'https://devfolio.co/projects/open-stylus-0f80'
        },
        {
            title: 'Arcave',
            description: 'Step into an expansive open-world gaming metaverse on L2, boasting low latency and scalable in-game communication with live audio and video.',
            image: 'https://devfolio.co/projects/arcave-e8c0',
            github: '#'
        },
        {
            title: 'FLockChain',
            description: 'A Federated Learning network built on Proof of Stake and micro-rollups.',
            image: '',
            github: 'https://devfolio.co/projects/flockchain-88eb'
        },
        {
            title: 'DappHack',
            description: 'An on-chain web3 hackathon portal for blockchain devs to come together and build something amazing with on-chain interactions.',
            image: 'https://via.placeholder.com/150',
            github: 'https://ethglobal.com/showcase/dapphack-4tjef'
        },
                {
            title: 'HyperLand',
            description: "A 3D Sanbox Game built on top of SUI utilizing it's fluid object based contract apporach.",
            image: 'https://via.placeholder.com/150',
            github: 'https://devfolio.co/projects/hyperland-da6b'
        },
                {
            title: 'HorseRiders',
            description: 'Fast Fourier Transformation Implementation and a Complex Maths Library written in Huff',
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com/BlocSoc-iitr/HorseRiders'
        },
                {
            title: 'ZkMask',
            description: "ZkMask introduces a novel 2FA protocol, leveraging the power of zk-SNARKs and face recognition technology to secure blockchain transactions.",
            image: 'https://via.placeholder.com/150',
            github: 'https://ethglobal.com/showcase/zkmask-0x1z4'
        }
    ]
</script>
