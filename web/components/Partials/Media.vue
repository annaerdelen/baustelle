<template>
  <figure :class="{ 'relative overflow-hidden': video && media.playbackId }">
    <Img v-if="image && media.image" :preload :lazy :width :media :src="media.image" :alt="media.alt" :class-names="assetClassNames" />
    <Video v-if="video && media.playbackId" :media :autoplay :lazy-video :class-names="assetClassNames" />
  </figure>
</template>

<script setup>
const { media } = defineProps({
  media: Object,
  assetClassNames: [String, Object, Array],
  width: Number,
  preload: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
  lazyVideo: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: true },
});

const image = media.type === 'image' || media._type === 'mainImage';
const video = media.type === 'video' || media._type === 'mainVideo';
</script>
