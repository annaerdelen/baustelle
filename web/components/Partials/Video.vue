<template>
  <video ref="video" :class="classNames" :poster="thumbnail" :playsinline :muted :loop />
</template>

<script setup>
import { gsap } from 'gsap';
import Hls from 'hls.js';

const props = defineProps({
  src: String,
  classNames: [String, Object, Array],
  autoplay: { type: Boolean, default: true },
  playsinline: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  bgImg: { type: Boolean, default: false },
});

const video = ref(null);

const thumbnail = computed(() => `https://image.mux.com/${props.src}/thumbnail.webp?time=0`);

onMounted(() => {
  const videoSrc = `https://stream.mux.com/${props.src}.m3u8`;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video.value);
    // hls.startLevel = 3;
  } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
    video.value.src = videoSrc;
  }

  if (props.bgImg)
    gsap.set(video.value, {
      backgroundImage: `url("${thumbnail.value}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });

  if (props.autoplay)
    video.value
      .play()
      .then(function () {
        // autoplay was successful!
      })
      .catch((error) => console.log('video autoplay', error));
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
