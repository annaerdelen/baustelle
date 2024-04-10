<template>
  <figure>
    <Img v-if="image && media.image" :media="media" :src="media.image" :alt="media.alt" :class-names="assetClassNames" :width="width" />
    <Video v-if="video && media.src" :src="media.src" :class-names="assetClassNames" />
  </figure>
</template>

<script setup>
const { media } = defineProps({
  media: Object,
  assetClassNames: [String, Object, Array],
  width: Number,
});

const image = media.type === 'image' || media._type === 'mainImage';
const video = media.type === 'video' || media._type === 'mainVideo';
</script>
