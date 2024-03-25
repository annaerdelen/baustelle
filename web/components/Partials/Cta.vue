<template>
  <div v-if="cta && (cta.slug || cta.page || cta.href)">
    <NuxtLink v-if="cta.type === 'internalLink'" :class="[classes]" :to="cta.slug || cta.page">
      {{ cta.title }}
    </NuxtLink>
    <a v-if="cta.type === 'externalLink'" :class="[classes]" :href="cta.href" target="_blank" rel="noopener noreferrer">
      {{ cta.title }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  cta: Object,
});

const classes = 'bg-black text-white';
</script>
