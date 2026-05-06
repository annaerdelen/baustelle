<script setup lang="ts">
import type { ProjectsQueryResult } from '~/types/sanity';
import { projectsQuery } from '~/utils/queries';

const { data } = await useSanityData<ProjectsQueryResult>({ query: projectsQuery });

useSeo({ siteTitle: data.value?.global?.siteTitle, title: data.value?.projectsOverview?.title, seo: data.value?.projectsOverview?.seo });
</script>

<template>
  <div>
    <div class="p-2 pt-12 flex flex-col space-y-2 fixed top-0 right-0">
      <NuxtLink v-for="project in data?.projects" :key="project._id" :to="{ path: '/work', hash: '#' + project.slug?.current }" class="text-right">
        {{ project.title }}
      </NuxtLink>
    </div>

    <div class="p-2 pt-12 flex flex-col space-y-2">
      <NuxtLink
        v-for="project in data?.projects"
        :id="project.slug?.current"
        :key="project._id"
        :to="'/work/' + project.slug?.current"
        class="flex scroll-mt-2"
      >
        <Media v-if="project.media" :media="project.media" class="w-[30rem]" />
        <h2 class="pl-2">
          {{ project.title }}
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>
