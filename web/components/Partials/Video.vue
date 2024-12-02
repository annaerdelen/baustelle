<template>
  <video ref="video" :class="classNames" :poster="thumbnail" :playsinline="playsinline" :muted="muted" :loop="loop" />
</template>

<script setup>
import { gsap } from 'gsap';
import Hls from 'hls.js';

const props = defineProps({
  media: Object,
  classNames: [String, Object, Array],
  lazyVideo: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: true },
  playsinline: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  bgImg: { type: Boolean, default: false },
});

const video = ref(null);
const { isInView } = useInView(() => video.value);

const thumbnail = computed(() => `https://image.mux.com/${props.media.playbackId}/thumbnail.webp?time=0&w=1200`);

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
      //   startLevel: props.quality === 'auto' ? -1 : parseInt(props.quality),
      //   capLevelToPlayerSize: true,
      //   maxBufferLength: 30,
      // });
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video.value);

      // hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      //   console.log('Available qualities:', data.levels.map(l => l.height));
      // });
    } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
      video.value.src = streamUrl;
    }
  }

  if (props.bgImg)
    gsap.set(video.value, {
      backgroundImage: `url("${thumbnail.value}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });

  if (!props.lazyVideo && props.autoplay) playVideo();
});

// onBeforeUnmount(() => {
//   if (video.value) {
//     video.value.pause();
//     video.value.src = '';
//     video.value.load();
//   }
// });

watch(isInView, (value) => {
  if (value && props.lazyVideo) playVideo();
});
</script>

<style scoped>
video {
  @apply w-full h-full object-cover;
}

.hauto video {
  @apply w-full h-auto;
}

.wauto video {
  @apply w-auto h-full;
}
</style>
