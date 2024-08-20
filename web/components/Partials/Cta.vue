<template>
  <NuxtLink
    v-if="cta && (cta.slug || cta.page || cta.href)"
    class="bg-black text-white"
    :to="cta.type === 'internalLink' ? cta.slug || cta.page : cta.href"
    :target="cta.type === 'externalLink' ? '_blank' : ''"
  >
    {{ cta.title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  cta: Object,
});
</script>
