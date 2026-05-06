<script setup lang="ts">
import type { Media } from '~/types/media';
const { $urlFor } = useNuxtApp();

const props = withDefaults(
  defineProps<{
    media: Media;
    classNames?: string;
    width?: number;
    preload?: boolean;
    fetchpriority?: boolean;
    lazy?: boolean;
    fullscreen?: boolean;
  }>(),
  {
    classNames: '',
    width: 0,
    preload: false,
    fetchpriority: false,
    lazy: false,
    fullscreen: false,
  },
);

const dimensions = computed(() => {
  const originalWidth = props.media.dimensions?.width || 0;
  const originalHeight = props.media.dimensions?.height || 0;
  const cropLeft = props.media.crop?.left || 0;
  const cropTop = props.media.crop?.top || 0;
  const cropRight = props.media.crop?.right || 0;
  const cropBottom = props.media.crop?.bottom || 0;

  const cropWidth = Math.floor(originalWidth - originalWidth * cropLeft - originalWidth * cropRight);
  const cropHeight = Math.floor(originalHeight - originalHeight * cropTop - originalHeight * cropBottom);

  const width = cropWidth || originalWidth;
  const height = cropHeight || originalHeight;

  return { width, height, cropLeft, cropTop };
});

const placeholder = computed(() =>
  $urlFor(props.media.image || '')
    .rect(dimensions.value.cropLeft || 0, dimensions.value.cropTop || 0, dimensions.value.width, dimensions.value.height)
    .width(10)
    .blur(10)
    .quality(10)
    .auto('format')
    .url(),
);

const setHotspot = computed(() => {
  if (!props.media.hotspot) return { x: 50, y: 50 };

  const x = props.media.hotspot?.x || 0;
  const y = props.media.hotspot?.y || 0;

  return { x: x * 100, y: y * 100 };
});

const modifiers = computed(() => ({ crop: props.media.crop || '', hotspot: props.media.hotspot || '' }));

const styles = `aspect-ratio:${dimensions.value.width / dimensions.value.height}; object-position: ${setHotspot.value.x}% ${setHotspot.value.y}%`;

const sizes = '640:320px 768:640px 1024:768px 1280:1024px 1536:1280px 1920:1536px 2560:1920px 3200:2560px 3201:3200px';
const fullscreenSizes = '640:1024px 768:1024px 1024:1280px 1280:1536px 1536:1536px 1920:1920px 2560:2560px 3200:3200px 3201:4000px';
</script>

<template>
  <NuxtImg
    provider="sanity"
    :preload="preload && !lazy ? true : false"
    :loading="!preload && lazy ? 'lazy' : 'eager'"
    :fetchpriority="fetchpriority ? 'high' : 'auto'"
    :placeholder
    placeholder-class="placeholder-active"
    :width="width ? width : dimensions.width"
    :height="width ? '' : dimensions.height"
    densities="x1"
    :src="media.image || ''"
    :modifiers
    :alt="media.alt || 'TODO'"
    :class="[classNames, { portrait: dimensions.width < dimensions.height, landscape: dimensions.width > dimensions.height }]"
    :style="styles"
    :sizes="width ? '' : fullscreen ? fullscreenSizes : sizes"
  />
</template>

<style scoped>
@reference "tailwindcss";

img {
  @apply w-full h-full object-cover;
}

.hauto img:not(.placeholder-active) {
  @apply w-full h-auto;
}

.wauto img:not(.placeholder-active) {
  @apply w-auto h-full;
}
</style>
