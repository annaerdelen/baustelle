<script setup lang="ts">
import type { Cta } from '~/types/ui';

defineProps<{
  value: Cta;
}>();

//TODO
const { generateSlug } = useGenerateSlug();
</script>

<template>
  <NuxtLink :to="generateSlug(value)" :target="value.type === 'externalLink' ? '_blank' : ''">
    <slot />
  </NuxtLink>
</template>
