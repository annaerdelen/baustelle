<template>
  <article class="pt-12">
    <Modules :modules="page.content" />
  </article>
</template>

<script setup>
import { seo, global, blockContent, media, modules } from '@/utils/queries';

const query = groq`{
  ${global}
  "page": *[_type == "page" && slug.current == $slug][0]{
    ...,
    ${seo}
    ${media}
    description[]{
      ...,
      ${blockContent}
    },
    content[]{
      ...,
      ${modules}
    }
  },
}`;

const page = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query, { slug: useRoute().params.page }));
page.value = data.value.page;

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ global: data.value.global, title: page.value.title, seo: page.value.seo });
</script>
