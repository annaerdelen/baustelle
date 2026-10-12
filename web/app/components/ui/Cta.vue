<script setup lang="ts">
import type { Cta } from '~/types/ui';

const props = defineProps<{
  cta: Cta;
}>();

const { generateSlug } = useGenerateSlug();
const isMailto = computed(() => isMailtoLink(props.cta));
const email = computed(() => getEmailFromMailto(props.cta?.href));
const isMounted = ref(false);
const href = ref('#');
const placeholder = computed(() => '0'.repeat(props.cta?.title?.length || email.value?.length || 0) || '0');

onMounted(() => {
  isMounted.value = true;
  if (isMailto.value) href.value = props.cta?.href ?? '#';
});
</script>

<template>
  <a v-if="isMailto" :href="href">
    <template v-if="isMounted">
      {{ cta.title }}
    </template>
    <span v-else class="invisible select-none" aria-hidden="true">{{ placeholder }}</span>
  </a>

  <NuxtLink v-else-if="cta && (cta.slug || cta.page || cta.href)" :to="generateSlug(cta)" :target="cta.type === 'externalLink' ? '_blank' : ''">
    {{ cta.title }}
  </NuxtLink>
</template>
