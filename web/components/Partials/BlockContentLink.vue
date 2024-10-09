<template>
  <NuxtLink :to="generateSlug" :target="value.type === 'externalLink' ? '_blank' : ''">
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  value: Object,
});

//TODO
const generateSlug = computed(() => {
  if (props.value.type === 'internalLink') {
    if (props.value.page === 'homepage') return '/';
    if (props.value.page === 'project') return `/projects/${props.value.slug}`;
    return props.value.slug;
  }

  if (props.value.type === 'externalLink') return props.value.href;
});
</script>
