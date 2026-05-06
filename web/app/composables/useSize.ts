import { useDebounceFn } from '@vueuse/core';

export const useSize = () => {
  const BREAKPOINTS = {
    xs: 450,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
    '3xl': 1920,
  };

  const width = ref(0);
  const height = ref(0);
  const isMobile = ref(false);
  const isTablet = ref(false);

  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;

    isTablet.value = width.value < BREAKPOINTS.lg;
    isMobile.value = width.value < BREAKPOINTS.md;
  }

  const debouncedResize = useDebounceFn(onResize, 300);

  onMounted(() => {
    onResize();

    window.addEventListener('resize', debouncedResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', debouncedResize);
  });

  return { BREAKPOINTS, width, height, isMobile, isTablet };
};
