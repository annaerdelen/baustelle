import debounce from 'just-debounce-it';
import { BREAKPOINTS } from '@/utils/constants';

export default function () {
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

  const debouncedResize = debounce(onResize, 300, true);

  onMounted(() => {
    onResize();

    window.addEventListener('resize', debouncedResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize);
  });

  return { width, height, isMobile, isTablet };
}
