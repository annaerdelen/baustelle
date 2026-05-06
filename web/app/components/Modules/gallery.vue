<script setup lang="ts">
import type { Media } from '~/types/media';

type GalleryItem = {
  _key: string;
} & Media;

defineProps<{
  block: {
    mediaGallery: GalleryItem[];
  };
}>();
</script>

<template>
  <section>
    <Media v-for="media in block.mediaGallery" :key="media._key" :media="media" class="w-[30rem]" />
  </section>
</template>
