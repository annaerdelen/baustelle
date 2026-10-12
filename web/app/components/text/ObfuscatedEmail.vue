<script setup>
const props = defineProps({
  email: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});

const address = computed(() => getEmailAddress(props.email));
const displayText = computed(() => props.title.trim() || address.value);
const obfuscateLabel = computed(() => isEmailText(displayText.value));
const label = ref(obfuscateLabel.value ? '' : displayText.value);
const href = ref('#');
const placeholder = computed(() => '0'.repeat(displayText.value.length) || '0');

onMounted(() => {
  href.value = toMailtoHref(address.value);
  if (obfuscateLabel.value) label.value = displayText.value;
});
</script>

<template>
  <a v-if="address" class="inline-block underline-link" :href="href">
    <span v-if="label">{{ label }}</span>
    <span v-else class="invisible select-none" aria-hidden="true">{{ placeholder }}</span>
  </a>
</template>
