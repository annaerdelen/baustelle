<template>
  <figure>
    <Img
      v-if="media.type === 'image' && media.image"
      :media="media"
      :src="media.image"
      :alt="media.alt"
      :class-names="assetClassNames"
      :width="width"
    />
    <Video v-if="media.type === 'video' && media.src" :src="media.src" :class-names="assetClassNames" />
  </figure>
</template>

<script setup>
import Img from './Img.vue';
import Video from './Video.vue';

defineProps({
  media: Object,
  assetClassNames: [String, Object, Array],
  width: Number,
});
</script>
