<script setup lang="ts">
import type { ProjectQueryResult } from '~/types/sanity';
import { projectQuery } from '~/utils/queries';

const { data } = await useSanityData<ProjectQueryResult>({ query: projectQuery, slug: useRoute().params.project as string });

if (!data.value?.project) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ siteTitle: data.value?.global?.siteTitle, title: data.value?.project?.title, seo: data.value?.project?.seo });

// const width = ref(import.meta.client ? window.innerWidth : 0);

// const date = computed(() => {
//   const date = new Date(data.value?.project.date);
//   return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
// });

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

<template>
  <div class="pb-48">
    <section v-if="data?.project" class="h-screen relative pointer-events-none">
      <Media :media="data?.project?.media" class="w-full h-full block" fullscreen />
    </section>

    <BlockContent :blocks="data?.project?.description" />

    <section class="grid grid-cols-4">
      <Media v-for="item in data?.project?.mediaGallery" :key="item._key" :media="item" />
    </section>
  </div>
</template>
