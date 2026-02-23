<template>
  <section>
    <Media v-for="media in block.assets" :key="media._id" :media="media" class="w-[30rem]" />
  </section>
</template>

<script setup>
defineProps({
  block: Object,
});
</script>
