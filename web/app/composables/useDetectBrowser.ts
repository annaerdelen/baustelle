export const useDetectBrowser = () => {
  const isChrome = ref<boolean | undefined>(undefined);
  const isExplorer = ref<boolean | undefined>(undefined);
  const isFirefox = ref<boolean | undefined>(undefined);
  const isSafari = ref<boolean | undefined>(undefined);

  onMounted(() => {
    isChrome.value = navigator.userAgent.includes('Chrome');
    isExplorer.value = navigator.userAgent.includes('MSIE');
    isFirefox.value = navigator.userAgent.includes('Firefox');
    isSafari.value = !isChrome.value && navigator.userAgent.includes('Safari');
  });

  return { isChrome, isExplorer, isFirefox, isSafari };
};
