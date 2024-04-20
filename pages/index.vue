<template>
  <div class="px-4">
    <Suspense>
      <div
        class="flex flex-row items-center justify-center w-full gap-2 mt-4 h-100"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full gap-2"
        >
          <div class="w-full h-full bg-gray-400">
            <img src="@/assets/images/1.JPG" class="object-fill transition-all grayscale hover:grayscale-0" />
          </div>
          <div class="w-full h-full bg-gray-400">
            <img src="@/assets/images/2.JPG" class="object-fill transition-all grayscale hover:grayscale-0" />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full h-full gap-2"
        >
          <div class="w-full h-full bg-gray-400">
            <img src="@/assets/images/3.JPG" class="object-fill transition-all grayscale hover:grayscale-0" />
          </div>
          <div class="w-full h-full bg-gray-400">
            <img src="@/assets/images/4.JPG" class="object-fill transition-all grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>
      <template #fallback>
        <div
          class="flex flex-row items-center justify-center w-full gap-2 mt-4 h-100"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full gap-2"
          >
            <div class="w-full h-full bg-gray-400"></div>
            <div class="w-full h-full bg-gray-400"></div>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full h-full gap-2"
          >
            <div class="w-full h-full bg-gray-400"></div>
            <div class="w-full h-full bg-gray-400"></div>
          </div>
        </div>
      </template>
    </Suspense>
    <div class="mt-4 text-xl font-semibold">
      An Open Community to increase interaction among Blockchain enthusiasts and
      bitcoin-dev enthusiasts and to spread the word about 'Web 3.0'
    </div>
    <div class="mt-4">
      We are a group of Blockchain enthusiasts aiming to unite the blockchain
      community of IIT Roorkee, in a highly collaborative environment that is
      open for all. We are always open to collaborations on fun projects, and
      quirky discussions on crypto, Defi, Web3.0 and beyond.
    </div>
    <div class="mt-4 text-sm text-gray-400">
      Contact us at
      <a href="mailto:blocsoc.acm@iitr.ac.in" class="font-semibold"
        >blocsoc.acm@iitr.ac.in</a
      >
    </div>
  </div>
</template>