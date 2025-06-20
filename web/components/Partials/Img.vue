<template>
  <NuxtImg
    provider="sanity"
    :preload="preload && !lazy ? true : false"
    :loading="!preload && lazy ? 'lazy' : 'eager'"
    :placeholder
    placeholder-class="placeholder-active"
    :width="width ? width : dimensions.width"
    :height="width ? '' : dimensions.height"
    densities="x1"
    :src
    :modifiers
    :alt="alt || 'TODO'"
    :class="[classNames, { portrait: dimensions.width < dimensions.height, landscape: dimensions.width > dimensions.height }]"
    :style="styles"
    :sizes="width ? false : fullscreen ? fullscreenSizes : sizes"
  />
</template>

<script setup>
const { $urlFor } = useNuxtApp();

const props = defineProps({
  src: String,
  alt: String,
  media: Object,
  width: Number,
  classNames: [String, Array, Object],
  width: Number,
  preload: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
  fullscreen: { type: Boolean, default: false },
});

const placeholder = computed(() =>
  $urlFor(props.src)
    .rect(dimensions.value.cropLeft || 0, dimensions.value.cropTop || 0, dimensions.value.width, dimensions.value.height)
    .width(10)
    .blur(10)
    .quality(10)
    .auto('format')
    .url(),
);

const setHotspot = computed(() => {
  if (!props.media.hotspot) return { x: 50, y: 50 };
  return { x: props.media.hotspot?.x * 100, y: props.media.hotspot?.y * 100 };
});

const dimensions = computed(() => {
  const originalWidth = props.media.dimensions.width;
  const originalHeight = props.media.dimensions.height;

  const cropLeft = Math.floor(originalWidth * props.media.crop?.left);
  const cropTop = Math.floor(originalHeight * props.media.crop?.top);
  const cropWidth = Math.floor(originalWidth - originalWidth * props.media.crop?.left - originalWidth * props.media.crop?.right);
  const cropHeight = Math.floor(originalHeight - originalHeight * props.media.crop?.top - originalHeight * props.media.crop?.bottom);

  const width = cropWidth || originalWidth;
  const height = cropHeight || originalHeight;

  return { width, height, cropLeft, cropTop };
});

const modifiers = computed(() => ({ crop: props.media.crop || '', hotspot: props.media.hotspot || '' }));

const styles = `aspect-ratio:${dimensions.value.width / dimensions.value.height}; object-position: ${setHotspot.value.x}% ${setHotspot.value.y}%`;

const sizes = '640:320px 768:640px 1024:768px 1280:1024px 1536:1280px 1920:1536px 2560:1920px 3200:2560px 3201:3200px';
const fullscreenSizes = '640:1024px 768:1024px 1024:1280px 1280:1536px 1536:1536px 1920:1920px 2560:2560px 3200:3200px 3201:4000px';
</script>

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
