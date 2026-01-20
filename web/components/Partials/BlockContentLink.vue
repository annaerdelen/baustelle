<template>
  <NuxtLink :to="generateSlug(value)" :target="value._type === 'externalLink' ? '_blank' : ''">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  value: Object,
});

//TODO
const { generateSlug } = useGenerateSlug();
</script>
