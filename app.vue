<template>
  <div>
    <NuxtLayout >
    <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: 'Blockchain Society IIT Roorkee',
    meta: [
      {
        name: 'description',
        content: 'An Open Community to increase interaction among Blockchain enthusiasts and bitcoin-dev enthusiasts and to spread the word about Web 3.0',
      },
    ],
  });
</script>
