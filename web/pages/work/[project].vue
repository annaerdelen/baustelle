<template>
  <article class="pb-48">
    <section class="h-screen relative pointer-events-none">
      <Media :media="project.media" class="w-full h-full block" />
    </section>

    <copy :title="date" :blocks="project.description" />

    <section class="grid grid-cols-4">
      <Media v-for="item in project.mediaGallery" :key="item._key" :media="item" />
    </section>
  </article>
</template>

<script setup>
import { seo, global, blockContent, media, mediaGallery } from '@/utils/queries';

const query = groq`{
  ${global}
  "project": *[_type == "project" && slug.current == $slug]|order(_updatedAt desc)[0]{
    ...,
    ${seo}
    ${media}
    description[]{
      ...,
      ${blockContent}
    },
    ${mediaGallery}
  },
}`;

const project = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query, { slug: useRoute().params.project }));
project.value = data.value.project;

if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ global: data.value.global, title: project.value.title, seo: project.value.seo });

const width = ref(process.client ? window.innerWidth : 0);

const date = computed(() => {
  const date = new Date(project.value.date);
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

// const nextProject = computed(() => {
//   if (getCurrentIndex() === homepage.value.projects.length - 1) {
//     return homepage.value.projects[0];
//   } else {
//     return homepage.value.projects[getCurrentIndex() + 1];
//   }
// });
</script>
