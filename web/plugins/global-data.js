export default defineNuxtPlugin(async () => {
  const globalStore = useGlobalStore();

  const { data } = await useSanityQuery(groq`{
    "global": *[_type == "global"][0]{
      siteTitle,
      mainNavigation[]->{
        _id,
        _type,
        title,
        slug,
      },
      social[]{
        ...,
      },
      copyright,
      navigation[]->,
    },
  }`);

  globalStore.value = data.value?.global;
});
