<template>
  <div class="pb-48">
    <section class="h-screen relative pointer-events-none">
      <Media :media="data?.project.media" class="w-full h-full block" />
    </section>

    <copy :title="date" :blocks="data?.project.description" />

    <section class="grid grid-cols-4">
      <Media v-for="item in data?.project.mediaGallery" :key="item._key" :media="item" />
    </section>
  </div>
</template>

<script setup>
const query = groq`{
  ${global}
  "project": *[_type == "project" && slug.current == $slug]|order(_updatedAt desc)[0]{
    ${seo}
    slug,
    title,
    date,
    ${media}
    ${blockContent('description')}
    ${mediaGallery}
    "nextCaseStudy": *[_type == "caseStudy" && orderRank > ^.orderRank] | order(orderRank)[0],
    "firstCaseStudy": *[_type == "caseStudy"] | order(orderRank)[0],
  },
}`;

const { data } = await useSanityData({ query, slug: useRoute().params.project });

if (!data.value?.project) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ global: data.value?.global, title: data.value?.project.title, seo: data.value?.project.seo });

const width = ref(process.client ? window.innerWidth : 0);

const date = computed(() => {
  const date = new Date(data.value?.project.date);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
});

// const getCurrentIndex = () => {
//   const slugs = homepage.value.projects.map((project) => project.slug.current);
//   return slugs.indexOf(project.value.slug.current);
// };

// const prevProject = computed(() => {
//   if (getCurrentIndex() === 0) {
//     return homepage.value.projects[homepage.value.projects.length - 1];
//   } else {
//     return homepage.value.projects[getCurrentIndex() - 1];
//   }
// });

// const nextProject = computed(() => data.value?.caseStudy.nextCaseStudy || data.value?.caseStudy.firstCaseStudy);
</script>
