import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function (getTrigger) {
  const isInView = ref(false);
  let scrollTrigger;

  onMounted(() => {
    const trigger = getTrigger();

    if (!trigger) return;

    scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top bottom',
      onEnter: () => (isInView.value = true),
      once: true,
    });
  });

  onUnmounted(() => {
    if (scrollTrigger) scrollTrigger.kill();
  });

  return { isInView };
}

// USAGE
// const { isInView } = useInView(() => video.value);
