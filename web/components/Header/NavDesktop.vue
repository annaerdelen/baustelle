<template>
  <nav class="space-x-4 hidden md:block">
    <NuxtLink v-for="page in globalStore.navigation" :key="page._id" :to="'/' + page.slug.current">{{ page.title }}</NuxtLink>
  </nav>
</template>

<script setup>
const globalStore = useGlobalStore();
</script>

<style scoped>
nav .router-link-exact-active {
  @apply underline;
}
</style>
