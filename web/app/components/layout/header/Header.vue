<script setup lang="ts">
import type { DefaultQueryResult } from '~/types/sanity';

defineProps<{
  data: DefaultQueryResult;
}>();
</script>

<template>
  <header class="fixed top-0 w-full flex justify-between p-2 z-40">
    <NuxtLink to="/">
      <h1>{{ data?.global?.siteTitle }}</h1>
    </NuxtLink>

    <NavDesktop :data />
    <NavMobile :data />
  </header>
</template>
