<template>
  <div class="p-2 pt-12 flex flex-col space-y-2">
    <NuxtLink v-for="project in data?.projects" :key="project._id" :to="'/work/' + project.slug.current" class="flex">
      <Media :media="project.media" class="w-[30rem]" />
      <h2 class="pl-2">
        {{ project.title }}
      </h2>
    </NuxtLink>
  </div>
</template>

<script setup>
const query = groq`{
  ${global}
  "projectsOverview": *[_type == "projectsOverview"][0],
  "projects": *[_type == "project"]|order(orderRank)[]{
    ..., 
    ${media}
  },
}`;

const { data } = await useSanityQuery(query);

useSeo({ global: data.value?.global, title: data.value?.projectsOverview.title, seo: data.value?.projectsOverview.seo });
</script>
