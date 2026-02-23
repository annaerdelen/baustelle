export default function () {
  const isChrome = ref(undefined);
  const isExplorer = ref(undefined);
  const isFirefox = ref(undefined);
  const isBrave = ref(undefined);
  const isSafari = ref(undefined);

  onMounted(() => {
    isChrome.value = navigator.userAgent.includes('Chrome');
    isExplorer.value = navigator.userAgent.includes('MSIE');
    isFirefox.value = navigator.userAgent.includes('Firefox');
    isBrave.value = navigator.brave !== undefined;
    isSafari.value = !isBrave.value && !isChrome.value && navigator.userAgent.includes('Safari');
  });

  return { isChrome, isExplorer, isFirefox, isSafari, isBrave };
}
