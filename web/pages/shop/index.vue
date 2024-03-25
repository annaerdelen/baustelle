<template>
  <article class="p-2 pt-8 flex flex-col space-y-2">
    <Cart />

    <button :class="{ 'opacity-50': shopifyStore.loading }" class="text-left">
      Cart {{ shopifyStore.loading ? ' ' : shopifyStore.totalProductsInCart }}
    </button>

    <NuxtLink v-for="item in products" :key="item._id" :to="'/shop/products/' + item.slug">
      <p>{{ item.title }}</p>
      <p>{{ convertPriceEur(item.price) }}</p>
    </NuxtLink>
  </article>
</template>

<script setup>
import { global } from '@/utils/queries';
import { product } from '@/utils/shopify/queries';
import { convertPriceEur } from '@/utils/shopify/helper';

const query = groq`{
  ${global}
  "products": *[_type == "product"][]{
    ..., 
    ${product}
  },
}`;

const products = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
products.value = data.value.products;

const shopifyStore = useShopifyStore();

// useSeo({ global: data.value.global, title: page.value.projectsOverview.title, seo: page.value.projectsOverview.seo });
</script>
