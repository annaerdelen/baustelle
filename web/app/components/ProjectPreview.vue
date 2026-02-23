<template>
  <NuxtLink :to="'/work/' + project.slug.current" class="block w-[40rem] group text-center">
    <h2 data-preview-text>{{ project.title }}</h2>
    <Media :media="project.media" class="hauto | group-hover:scale-[1.1] duration-800 ease-out-expo" />
    <p class="pt-1" data-preview-text>● Show Project</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
