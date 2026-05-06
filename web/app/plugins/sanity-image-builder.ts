import { createImageUrlBuilder, type SanityProjectDetails } from '@sanity/image-url';

export default defineNuxtPlugin(() => {
  const builder = createImageUrlBuilder(useSanity().config as SanityProjectDetails);

  function urlFor(source: string) {
    return builder.image(source).auto('format');
  }

  return {
    provide: { urlFor },
  };
});
