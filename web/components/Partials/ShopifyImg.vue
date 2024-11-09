<template>
  <figure class="w-[9rem]">
    <img :src="asset + '&width=500'" :alt="alt" loading="lazy" />
  </figure>
</template>

<script setup>
defineProps({
  asset: String,
  alt: String,
});
</script>

<style scoped>
img {
  @apply w-full h-full object-cover;
}
</style>
