<script setup lang="ts">
import { PortableText } from '@portabletext/vue';
import type { PortableTextVueComponents } from '@portabletext/vue';
import BlockContentLink from './BlockContentLink.vue';
import type { BlockContent } from '~/types/sanity';

defineProps<{
  blocks: BlockContent;
}>();

const components: PortableTextVueComponents = {
  block: {
    //   normal: (_, { slots }) => h('p', { class: 'copy' }, slots.default?.()),
    //   'hl-xl': (_, { slots }) => h('p', { class: 'hl-xl' }, slots.default?.()),
  },
  types: {
    //   mainImage: Image,
  },
  list: {
    // bullet: (_, { slots }) => h('ul', { class: 'list-bullet' }, slots.default?.()),
  },
  listItem: {
    // bullet: (_, { slots }) => h('ul', { class: 'list-bullet' }, slots.default?.()),
  },
  marks: {
    externalLink: ({ value }, { slots }) => h(BlockContentLink, { value }, () => slots.default?.()),
    internalLink: ({ value }, { slots }) => h(BlockContentLink, { value }, () => slots.default?.()),
    highlight: (_, { slots }) => h('span', { class: 'block-highlight' }, slots.default?.()),
  },
  hardBreak: {},
  unknownMark: {},
  unknownType: {},
  unknownBlockStyle: {},
  unknownList: {},
  unknownListItem: {},
};
</script>

<template>
  <div v-if="blocks" class="block-content">
    <PortableText :value="blocks" :components="components" />
  </div>
</template>

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
