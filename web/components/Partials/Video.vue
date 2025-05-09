<template>
  <NuxtImg
    v-show="showPoster"
    :src="props.media.playbackId"
    :class="classNames"
    loading="lazy"
    class="absolute inset-0"
    :style="styles"
    provider="mux"
    alt="TODO"
  />
  <video ref="video" :class="classNames" :playsinline="playsinline" :muted="muted" :loop="loop" :style="styles" />
</template>

<script setup>
import Hls from 'hls.js';

const props = defineProps({
  media: Object,
  classNames: [String, Object, Array],
  lazyVideo: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: true },
  playsinline: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
});

const { isInView } = useInView(() => (props.lazyVideo ? video.value : null));
const showPoster = ref(true);
const video = ref(null);

const thumbnail = computed(() => `https://image.mux.com/${props.media.playbackId}/thumbnail.webp?time=${props.media.thumbTime}&width=5`);

const styles = `aspect-ratio:${props.media.aspectRatio.split(':')[0] / props.media.aspectRatio.split(':')[1]}`;

const playVideo = () => {
  video.value.play().catch((error) => console.log('video play error', error));
};

onMounted(() => {
  const { playbackId } = props.media;

  if (props.media.mp4Supported) {
    const mp4Url = `https://stream.mux.com/${playbackId}/high.mp4`;
    video.value.src = mp4Url;
  } else {
    const streamUrl = `https://stream.mux.com/${playbackId}.m3u8`;

    if (Hls.isSupported()) {
      // const hls = new Hls({
      //   startLevel: 3,
      //   capLevelToPlayerSize: true,
      //   maxBufferLength: 30,
      //   enableWorker: true,
      //   maxLoadingDelay: 4,
      //   manifestLoadingTimeOut: 10000,
      // });
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video.value);

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        const highestQuality = data.levels.length - 1;
        hls.currentLevel = highestQuality;
      });
    } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
      video.value.src = streamUrl;
    }
  }

  video.value.addEventListener('loadeddata', () => (showPoster.value = false));

  if (!props.lazyVideo && props.autoplay) playVideo();
});

watch(isInView, (value) => {
  if (value && props.lazyVideo) playVideo();
});

// onBeforeUnmount(() => {
//   if (video.value) {
//     video.value.src = '';
//     video.value.pause();
//     video.value.load();
//   }
// });
</script>

<style scoped>
@reference "tailwindcss";

video,
img {
  @apply w-full h-full object-cover;
}

.hauto video,
.hauto img {
  @apply w-full h-auto;
}

.wauto video,
.wauto img {
  @apply w-auto h-full;
}
</style>
