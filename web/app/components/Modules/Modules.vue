<script setup lang="ts">
import type { Component } from 'vue';
import type { Gallery, TextBlock } from '~/types/sanity';

type Module = {
  _type: 'gallery' | 'textBlock';
  _key: string;
  mediaGallery?: Gallery;
  textBlock?: TextBlock;
};

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
