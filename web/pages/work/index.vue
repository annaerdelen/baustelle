<template>
  <article class="p-2 pt-12 flex flex-col space-y-2">
    <NuxtLink v-for="project in page.projects" :key="project._id" :to="'/work/' + project.slug.current" class="flex">
      <Media :media="project.media" class="w-[30rem]" />
      <h2 class="pl-2">
        {{ project.title }}
      </h2>
    </NuxtLink>
  </article>
</template>

<script setup>
import { global, media } from '@/utils/queries';

const query = groq`{
  ${global}
  "projectsOverview": *[_type == "projectsOverview"][0],
  "projects": *[_type == "project"]|order(orderRank)[]{
    ..., 
    ${media}
  },
}`;

const page = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
page.value = data.value;

useSeo({ global: data.value.global, title: page.value.projectsOverview.title, seo: page.value.projectsOverview.seo });
</script>
