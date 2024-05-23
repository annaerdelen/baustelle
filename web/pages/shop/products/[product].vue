<template>
  <article class="p-2 pt-8">
    <div>
      <p>{{ data?.product.title }}</p>
      <p>{{ convertPriceEur(data?.product.variants[0].price) }}</p>
    </div>

    <div v-if="data?.product.variants.length !== 1">
      <button v-for="(variant, i) in data?.product.variants" :key="variant.id" :class="{ underline: i === activeVariant }" @click="activeVariant = i">
        {{ variant.title }}
      </button>
    </div>

    <button :class="{ loading: loading }" @click="addToCart">{{ loading ? 'Adding ...' : 'Add to cart' }}</button>
  </article>
</template>

<script setup>
import { Buffer } from 'buffer';
import { seo, global } from '@/utils/queries';
import { product as productQuery } from '@/utils/shopify/queries';
import { convertPriceEur } from '@/utils/shopify/helper';

const query = groq`{
  ${global}
  "product": *[_type == "product" && store.slug.current == $slug][0]{
    ...,
    ${seo}
    ${productQuery}
  },
}`;

const { data } = await useSanityQuery(query, { slug: useRoute().params.product });

if (!data.value?.product) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

const shopifyStore = useShopifyStore();

const loading = ref(false);
const activeVariant = ref(0);

const addToCart = async () => {
  loading.value = true;

  await shopifyStore.addItemToCheckout({
    variantId: Buffer.from(`gid://shopify/ProductVariant/${data.value?.product.variants[activeVariant.value].id}`).toString('base64'),
    quantity: 1,
  });

  loading.value = false;
};

// useSeo({ global: data.value.global, title: product.value.title, seo: product.value.seo });
</script>
