<template>
  <component :is="chooseModule(block)" v-for="block in modules" :key="block._key" :block />
</template>

<script setup>
defineProps({
  modules: Array,
});

const chooseModule = (module) => {
  if (module._type === 'copy') return resolveComponent('copy');
  if (module._type === 'gallery') return resolveComponent('gallery');
};
</script>
