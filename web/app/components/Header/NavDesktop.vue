<template>
  <nav class="space-x-4 hidden md:block">
    <NuxtLink v-for="page in data?.global.navigation" :key="page._id" :to="'/' + page.slug.current">{{ page.title }}</NuxtLink>
  </nav>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
@reference "tailwindcss";

nav .router-link-exact-active {
  @apply underline;
}
</style>
