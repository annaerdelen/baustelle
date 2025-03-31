<template>
  <div id="root" class="flex flex-col min-h-screen">
    <PreviewBanner v-if="showPreviewBanner" />

    <Header :data />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
useCredits();
const showPreviewBanner = useShowPreviewBanner();

const query = groq`{
  ${global}
}`;

const { data } = await useSanityQuery(query);

useHead({
  htmlAttrs: { lang: 'en' }, //TODO
  meta: [{ name: 'robots', content: 'noindex, nofollow' }], //TODO
  link: [
    data.value?.global?.favicon ? { rel: 'icon', type: 'image/png', href: data.value?.global?.favicon } : { rel: 'icon', href: 'data:image' },
    // { rel: 'apple-touch-icon', href: global.webClip },
  ],
});

useSeoMeta({
  title: data.value?.global?.siteTitle,
  ogTitle: data.value?.global?.siteTitle,
  description: data.value?.global?.metaDescription,
  ogDescription: data.value?.global?.metaDescription,
  ogImage: data.value?.global?.ogImage,
});
</script>
