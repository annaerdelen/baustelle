<template>
  <article class="pt-12">
    <Modules :modules="data?.page.content" />
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

const { data } = await useSanityQuery(query, { slug: useRoute().params.page });

if (!data.value?.page) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ global: data.value.global, title: data.value?.page.title, seo: data.value?.page.seo });
</script>
