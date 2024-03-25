<template>
  <nav class="space-x-4 hidden md:block">
    <NuxtLink v-for="page in sanityStore.global?.navigation" :key="page._id" :to="'/' + page.slug.current">{{ page.title }}</NuxtLink>
  </nav>
</template>

<script setup>
const sanityStore = useSanityStore();
</script>

<style scoped>
nav .router-link-exact-active {
  @apply underline;
}
</style>
