<script setup lang="ts">
type Module = NonNullable<HomepageContent>[number];

defineProps<{
  modules: Module[];
}>();

const chooseModule = (module: Module): string | Component => {
  if (module._type === 'textBlock') return resolveComponent('textBlock');
  if (module._type === 'gallery') return resolveComponent('gallery');
  return 'div';
};
</script>

<template>
  <component :is="chooseModule(block)" v-for="block in modules" :key="block._key" :block="block" />
</template>
