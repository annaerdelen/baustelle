<template>
  <div>
    <ul>
      <li
        v-for="project in data?.homepage.projects"
        :key="project._id"
        class="h-screen w-full flex justify-center items-center"
        :data-project="project.slug.current"
      >
        <ProjectPreview :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const query = groq`{
  ${global}
  "homepage": *[_type == "homepage"][0]{
    projects[]->{
      slug{current},
      ${media}
    }
  }
}`;

const { data } = await useSanityQuery(query);

useSeo({ global: data.value?.global });

// definePageMeta({
//   pageTransition: globalTransition,
// });
</script>
