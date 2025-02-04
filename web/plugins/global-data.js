export default defineNuxtPlugin(async () => {
  const globalStore = useGlobalStore();

  const { data } = await useSanityQuery(groq`{
    "global": *[_type == "global"][0]{
      mainNavigation[]->{
        _id,
        _type,
        title,
        slug,
      },
      socials[]{
        ...,
      },
      copyright,
    },
  }`);

  globalStore.value = data.value?.global;
});
