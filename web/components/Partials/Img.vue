<template>
  <NuxtImg
    v-if="!width"
    provider="sanity"
    loading="lazy"
    :placeholder="placeholder"
    :width="dimensions.width"
    :height="dimensions.height"
    sizes="640:320px 768:640px 1024:768px 1280:1024px 1536:1280px 1920:1536px 2560:1920px 3200:2560px 3201:3200px"
    densities="x1"
    :src="src"
    :alt="alt || 'TODO'"
    :class="[
      classNames,
      {
        portrait: dimensions.width < dimensions.height,
        landscape: dimensions.width > dimensions.height,
      },
    ]"
    :modifiers="modifiers"
  />
  <NuxtImg
    v-if="width"
    provider="sanity"
    loading="lazy"
    :placeholder="placeholder"
    :width="width"
    densities="x1"
    :src="src"
    :alt="alt || 'TODO'"
    :class="[
      classNames,
      {
        portrait: dimensions.width < dimensions.height,
        landscape: dimensions.width > dimensions.height,
      },
    ]"
    :modifiers="modifiers"
  />
</template>

<script setup>
const { $urlFor } = useNuxtApp();

const props = defineProps({
  src: String,
  classNames: [String, Array, Object],
  style: [String, Array, Object],
  alt: String,
  media: Object,
  width: Number,
  preload: {
    type: Boolean,
    default: false,
  },
});

const placeholder = computed(() =>
  $urlFor(props.src)
    .rect(dimensions.value.cropLeft || 0, dimensions.value.cropTop || 0, dimensions.value.width, dimensions.value.height)
    .width(30)
    .blur(30)
    .auto('format')
    .url()
);

const modifiers = computed(() => ({ crop: props.media.crop || '', hotspot: props.media.hotspot || '' }));

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
</script>

<style scoped>
img {
  @apply w-full h-full object-cover;
}

.hauto img {
  @apply w-full h-auto;
}

.wauto img {
  @apply w-auto h-full;
}
</style>
