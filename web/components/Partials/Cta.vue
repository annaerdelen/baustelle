<template>
  <NuxtLink
    v-if="cta && (cta.slug || cta.page || cta.href)"
    class="bg-black text-white"
    :to="generateSlug(cta)"
    :target="cta.type === 'externalLink' ? '_blank' : ''"
  >
    {{ cta.title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  cta: Object,
});

const { generateSlug } = useGenerateSlug();
</script>
