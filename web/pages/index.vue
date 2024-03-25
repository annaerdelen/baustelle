<template>
  <article>
    <ul>
      <li
        v-for="project in homepage.projects"
        :key="project._id"
        class="h-screen w-full flex justify-center items-center"
        :data-project="project.slug.current"
      >
        <ProjectPreview :project="project" />
      </li>
    </ul>
  </article>
</template>

<script setup>
import { global, media } from '@/utils/queries';

const query = groq`{
  ${global}
  "homepage": *[_type == "homepage"][0]{
    projects[]->{
      slug{current},
      ${media}
    }
  }
}`;

const homepage = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
homepage.value = data.value.homepage;

useSeo({ global: data.value.global });

// definePageMeta({
//   pageTransition: globalTransition,
// });
</script>
