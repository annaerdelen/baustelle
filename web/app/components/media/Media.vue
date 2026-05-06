<script setup lang="ts">
import type { Media } from '~/types/media';

const props = withDefaults(
  defineProps<{
    media: Media;
    assetClassNames?: string;
    width?: number;
    preload?: boolean;
    fetchpriority?: boolean;
    lazy?: boolean;
    lazyVideo?: boolean;
    autoplay?: boolean;
    fullscreen?: boolean;
    isRelative?: boolean;
  }>(),
  {
    assetClassNames: '',
    width: 0,
    preload: false,
    fetchpriority: false,
    lazy: false,
    lazyVideo: true,
    autoplay: true,
    fullscreen: false,
    isRelative: true,
  },
);

const image = props.media.type === 'image';
const video = props.media.type === 'video';
</script>

<template>
  <figure :class="{ 'overflow-hidden': video && props.media.playbackId, relative: video && props.media.playbackId && isRelative }">
    <Img v-if="image && props.media.image" :preload :fetchpriority :lazy :width :fullscreen :media :class-names="assetClassNames" />
    <Video v-if="video && props.media.playbackId" :media :autoplay :lazy-video :class-names="assetClassNames" />
  </figure>
</template>
