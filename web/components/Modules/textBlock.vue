<template>
  <section>
    <BlockContent :blocks="block.text" />
  </section>
</template>

<script setup>
defineProps({
  block: Object,
});
</script>
