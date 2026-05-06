<script setup lang="ts">
import type { Cta } from '~/types/ui';

defineProps<{
  cta: Cta;
}>();

const { generateSlug } = useGenerateSlug();
</script>

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
