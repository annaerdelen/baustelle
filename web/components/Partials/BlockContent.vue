<template>
  <div v-if="blocks" class="block-content">
    <PortableText :value="blocks" :components="components" />
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';
import BlockContentLink from './BlockContentLink.vue';

defineProps({
  blocks: Array,
});

const components = {
  // block: {
  //   normal: (_, { slots }) => h('p', { class: 'copy' }, slots.default?.()),
  //   'hl-xl': (_, { slots }) => h('p', { class: 'hl-xl' }, slots.default?.()),
  // },
  styles: {},
  // types: {
  //   mainImage: Image,
  // },
  marks: {
    externalLink: BlockContentLink,
    internalLink: BlockContentLink,
    highlight: (_, { slots }) => h('span', { class: 'block-highlight' }, slots.default?.()),
  },
};
</script>

<style>
@reference "tailwindcss";

.block-content p:not(:last-child),
.block-content ul:not(:last-child) {
  @apply pb-6;
}

.block-content a {
  @apply underline;
}

.block-content ul li {
  margin-left: 15px;
}

.block-content ul li::before {
  content: '•';
  display: inline-block;
  width: 15px;
  margin-left: -15px;
}

.block-highlight::before {
  content: '• ';
}
</style>
