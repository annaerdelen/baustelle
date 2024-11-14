export default function () {
  const showPreviewBanner = useShowPreviewBanner();
  const sanity = useSanity();
  const previewMode = ref(false);
  const previewData = ref(null);

  const startPreviewMode = async (query, slug) => {
    showPreviewBanner.value = true;
    previewMode.value = true;

    // modify the sanity client to use preview mode
    const previewClient = sanity.client.withConfig({ useCdn: false, withCredentials: true, perspective: 'previewDrafts' });

    try {
      const data = await previewClient.fetch(query, { slug });
      previewData.value = data;
    } catch (err) {
      console.log('preview error:', err.message);
    }
  };

  const stopPreviewMode = () => {
    showPreviewBanner.value = false;
    useRouter()?.push({});

    previewMode.value = false;
    previewData.value = null;

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return {
    previewMode,
    previewData,
    startPreviewMode,
    stopPreviewMode,
  };
}
