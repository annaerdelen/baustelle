<template>
  <article class="p-2 pt-8">
    <p>{{ collection.store.title }}</p>

    <ul>
      <li v-for="product in products" :key="product._id">{{ product?.title }}</li>
    </ul>
  </article>
</template>

<script setup>
import { seo, global } from '@/utils/queries';
import { product as productQuery } from '@/utils/shopify/queries';

const { $shopifyClient } = useNuxtApp();

const query = groq`{
  ${global}
  "collection": *[_type == "collection" && store.slug.current == $slug][0]{
    ...,
    ${seo}
  },
}`;

const productsQuery = groq`{
  "product": *[_type == "product" && store.slug.current == $slug][0]{
    ...,
    ${productQuery}
  },
}`;

const collection = ref(undefined);
const products = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query, { slug: useRoute().params.collection }));
collection.value = data.value.collection;

if (!collection.value) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

const shopifyCollection = await $shopifyClient.collection.fetchWithProducts(collection.value.store.gid);

const sanityProducts = await Promise.all(
  shopifyCollection.products.map(async (product) => {
    return useAsyncData(product.handle, () => useSanity().fetch(productsQuery, { slug: product.handle })).data;
  })
);

products.value = sanityProducts.map((product) => toRaw(product.value)?.product);

// useSeo({ global: data.value.global, title: collection.value.title, seo: collection.value.seo });
</script>
