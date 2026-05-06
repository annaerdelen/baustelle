<script setup lang="ts">
import type { TextBlock } from '~/types/sanity';

defineProps<{
  block: TextBlock;
}>();
</script>

<template>
  <section>
    <BlockContent :blocks="block.text || []" />
  </section>
</template>
