<template>
  <section class="p-2 flex space-x-2">
    <Media v-for="media in module?.assets" :key="media._id" :media="media" class="w-[30rem]" />
  </section>
</template>

<script setup>
defineProps({
  module: Object,
});
</script>
