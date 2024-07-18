<template>
  <div class="p-2 pt-8">
    <p>{{ data?.collection.store.title }}</p>

    <ul>
      <li v-for="product in data?.products" :key="product._id">{{ product?.title }}</li>
    </ul>
  </div>
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

const products = ref(null);

const { data } = await useSanityQuery(query, { slug: useRoute().params.collection });

if (!data.value?.collection) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

const shopifyCollection = await $shopifyClient.collection.fetchWithProducts(data.value?.collection.store.gid);

const sanityProducts = await Promise.all(
  shopifyCollection.products.map(async (product) => {
    return useAsyncData(product.handle, () => useSanity().fetch(productsQuery, { slug: product.handle })).data;
  }),
);

products.value = sanityProducts.map((product) => toRaw(product.value)?.product);

// useSeo({ global: data.value.global, title: collection.value.title, seo: collection.value.seo });
</script>
