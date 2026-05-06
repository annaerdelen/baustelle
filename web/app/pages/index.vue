<script setup lang="ts">
import type { HomagepageQueryResult } from '~/types/sanity';
import { homagepageQuery } from '~/utils/queries';

const { data } = await useSanityData<HomagepageQueryResult>({ query: homagepageQuery });

// definePageMeta({
//   pageTransition: globalTransition,
// });
</script>

<template>
  <div>
    <header><h1 /></header>

    <section>
      <ul>
        <li
          v-for="project in data?.homepage?.projects"
          :key="project?._id"
          class="h-screen w-full flex justify-center items-center"
          :data-project="project.slug?.current"
        >
          <ProjectPreview :project="project" />
        </li>
      </ul>
    </section>

    <section />
  </div>
</template>
