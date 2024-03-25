<template>
  <component :is="chooseModule(module)" v-for="module in modules" :key="module._key" :module="module" />
</template>

<script setup>
defineProps({
  modules: Array,
});

const chooseModule = (module) => {
  if (module._type === 'accordion') return resolveComponent('accordion');
  if (module._type === 'headlineCopy') return resolveComponent('headlineCopy');
  if (module._type === 'copy') return resolveComponent('copy');
  if (module._type === 'mediaGallery') return resolveComponent('mediaGallery');
};
</script>
