export default async function ({ query, slug = '' }) {
  const route = useRoute();
  const { previewMode, previewData, startPreviewMode, stopPreviewMode } = useSanityPreview();

  onMounted(() => {
    if (route.query.preview) {
      console.log('🏃‍♀️ Start Preview Mode');
      startPreviewMode(query, slug);
    }
  });

  onUnmounted(() => {
    if (previewMode.value) {
      console.log('🛑 Stop Preview Mode');
      stopPreviewMode();
    }
  });

  const { data } = await useSanityQuery(query, { slug });
  const computedData = computed(() => (previewMode.value ? previewData.value : data.value));

  return { data: computedData };
}
