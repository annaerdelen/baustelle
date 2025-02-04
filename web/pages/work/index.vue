<template>
  <div>
    <div class="p-2 pt-12 flex flex-col space-y-2 fixed top-0 right-0">
      <NuxtLink v-for="project in data?.projects" :key="project._id" :to="{ path: '/work', hash: '#' + project.slug.current }" class="text-right">
        {{ project.title }}
      </NuxtLink>
    </div>

    <div class="p-2 pt-12 flex flex-col space-y-2">
      <NuxtLink
        v-for="project in data?.projects"
        :key="project._id"
        :to="'/work/' + project.slug.current"
        class="flex scroll-mt-2"
        :id="project.slug.current"
      >
        <Media :media="project.media" class="w-[30rem]" />
        <h2 class="pl-2">
          {{ project.title }}
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const query = groq`{
  ${global}
  "projectsOverview": *[_type == "projectsOverview"][0],
  "projects": *[_type == "project"]|order(orderRank)[]{
    ${media}
    title,
    slug
  },
}`;

const { data } = await useSanityData({ query });

useSeo({ global: data.value?.global, title: data.value?.projectsOverview.title, seo: data.value?.projectsOverview.seo });

const route = useRoute();
</script>
