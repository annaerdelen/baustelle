<script setup lang="ts">
import type { Component } from 'vue';
import type { HomepageContent } from '~/types/ui';

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
