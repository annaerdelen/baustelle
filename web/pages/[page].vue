<template>
  <div>
    <div class="pt-12">
      <Modules :modules="data?.page.content" />
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
</script>
