<template>
  <section class="p-2 flex">
    <p class="flex-1">{{ module?.title || title }}</p>

    <div class="flex-1">
      <div class="max-w-[50rem]">
        <BlockContent :blocks="module?.text || blocks" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  module: Object,
  title: String,
  blocks: Array,
});
</script>
