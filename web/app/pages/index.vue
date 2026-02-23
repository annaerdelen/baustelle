<template>
  <div>
    <header><h1 /></header>

    <section>
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
    </section>

    <section />
  </div>
</template>

<script setup>
const query = groq`{
  "homepage": *[_type == "homepage"][0]{
    projects[]->{
      slug{current},
      ${media}
    }
  }
}`;

const { data } = await useSanityData({ query });

// definePageMeta({
//   pageTransition: globalTransition,
// });
</script>
