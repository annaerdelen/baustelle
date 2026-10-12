<script setup lang="ts">
const props = defineProps<{
  value: {
    href: string;
    type: 'internalLink' | 'externalLink';
  };
}>();

const { generateSlug } = useGenerateSlug();
const isMailto = computed(() => isMailtoLink(props.value));
const email = computed(() => getEmailFromMailto(props.value?.href));
const isMounted = ref(false);
const href = ref('#');
const placeholder = computed(() => '0'.repeat(email.value?.length || 0) || '0');

onMounted(() => {
  isMounted.value = true;
  if (isMailto.value) href.value = props.value?.href ?? '#';
});
</script>

<template>
  <a v-if="isMailto" :href="href">
    <template v-if="isMounted">
      <slot>{{ email }}</slot>
    </template>
    <span v-else class="invisible select-none" aria-hidden="true">{{ placeholder }}</span>
  </a>
  <NuxtLink v-else :to="generateSlug(value)" :target="value.type === 'externalLink' ? '_blank' : undefined">
    <slot />
  </NuxtLink>
</template>
