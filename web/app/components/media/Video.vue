<script setup lang="ts">
import type { Media } from '~/types/media';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hls from 'hls.js';

const props = withDefaults(
  defineProps<{
    media: Media;
    classNames?: string;
    lazyVideo?: boolean;
    autoplay?: boolean;
    playsinline?: boolean;
    muted?: boolean;
    loop?: boolean;
  }>(),
  {
    classNames: '',
    lazyVideo: true,
    autoplay: true,
    playsinline: true,
    muted: true,
    loop: true,
  },
);

const showPoster = ref(true);
const video = ref<HTMLVideoElement | null>(null);
const st = ref<ScrollTrigger | null>(null);

const thumbnail = computed(() => `https://image.mux.com/${props.media.playbackId}/thumbnail.webp?time=0&width=2`);

const aspectRatio = computed(() => {
  const aspectRatio = String(props.media.aspectRatio);
  return Number(aspectRatio.split(':')[0]) / Number(aspectRatio.split(':')[1]);
});

const styles = `aspect-ratio:${aspectRatio.value}`;

const sizes = '640:320px 768:640px 1024:768px 1280:1024px 1536:1280px 1920:1536px 2560:1920px 3200:2560px 3201:3200px';

const playVideo = () => {
  video.value?.play().catch(() => {
    // console.log('video play error', error)
  });
};

const pauseVideo = () => {
  video.value?.pause();
};

onMounted(() => {
  const { playbackId } = props.media;

  if (props.media.mp4Supported) {
    const mp4Url = `https://stream.mux.com/${playbackId}/high.mp4`;
    if (video.value) video.value.src = mp4Url;
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
      if (video.value) hls.attachMedia(video.value);

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        const highestQuality = data.levels.length - 1;
        hls.currentLevel = highestQuality;
      });
    } else if (video.value?.canPlayType('application/vnd.apple.mpegurl')) {
      if (video.value) video.value.src = streamUrl;
    }
  }

  video.value?.addEventListener('loadeddata', () => (showPoster.value = false));

  if (props.lazyVideo) {
    st.value = ScrollTrigger.create({
      trigger: video.value,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: ({ isActive }) => {
        if (isActive) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
    });
  } else {
    if (props.autoplay) playVideo();
  }
});

onBeforeUnmount(() => {
  st.value?.kill();
});

// onBeforeUnmount(() => {
//   if (video.value) {
//     video.value.src = '';
//     video.value.pause();
//     video.value.load();
//   }
// });
</script>

<template>
  <NuxtImg
    v-show="showPoster"
    :src="props.media.playbackId"
    :placeholder="thumbnail"
    :class="classNames"
    class="absolute inset-0"
    densities="x1"
    :style="styles"
    provider="mux"
    alt="TODO"
    :sizes="sizes"
  />
  <!-- TODO lazy loading  -->

  <video ref="video" :class="classNames" :playsinline="playsinline" :muted="muted" :loop="loop" :style="styles" />
</template>

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
