<template>
  <img class="lazyload" :src="`${asset}&width=2`" :data-src="asset" :alt="alt" />
</template>

<script setup>
defineProps({
  asset: String,
  alt: {
    type: String,
    default: 'Product Image',
  },
});
</script>

<style scoped>
img {
  @apply w-full h-full object-cover;
}
</style>
