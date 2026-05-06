<script setup lang="ts">
import type { PageQueryResult } from '~/types/sanity';
import { pageQuery } from '~/utils/queries';

const { data } = await useSanityData<PageQueryResult>({ query: pageQuery, slug: useRoute().params.page as string });

if (!data.value?.page) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ siteTitle: data.value?.global?.siteTitle || '', title: data.value?.page?.title || '', seo: data.value?.page?.seo });
</script>

<template>
  <div>
    <div class="pt-12 px-2">
      <h1>About</h1>
    </div>
  </div>
</template>
