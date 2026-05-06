export const useSanityData = async <T>({ query, slug = '' }: { query: string; slug?: string }) => {
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

  const { data } = await useSanityQuery<T>(query, { slug });
  const computedData = computed(() => (previewMode.value ? previewData.value : data.value));

  return { data: computedData };
};
