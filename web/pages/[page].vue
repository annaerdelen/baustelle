<template>
  <div>
    <div class="pt-12 px-2">
      <h1>About</h1>
    </div>
  </div>
</template>

<script setup>
const query = groq`{
  ${global}
  "page": *[_type == "page" && slug.current == $slug][0]{
    ${seo}
    ${media}
    _id,
    title,
    content[]{
      ${modules}
    }
  }
}`;

const { data } = await useSanityData({ query, slug: useRoute().params.page });

if (!data.value?.page) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ global: data.value?.global, title: data.value?.page.title, seo: data.value?.page.seo });
</script>
