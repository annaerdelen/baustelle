<template>
  <section class="fixed top-0 pt-8 right-0 w-1/3 h-screen flex justify-end">
    <div class="w-full bg-white z-10 p-2 h-full flex justify-between flex-col">
      <div>
        <div v-if="shopifyStore.lineItems?.length !== 0">
          <ul>
            <CartItem v-for="item in shopifyStore.lineItems" :key="item.id" :item="item" />
          </ul>
        </div>

        <p v-else>Your cart is empty</p>
      </div>

      <div>
        <div class="flex justify-between">
          <a v-if="shopifyStore.lineItems?.length !== 0" :href="shopifyStore.url" @click="clickedCheckoutBtn = true">{{
            clickedCheckoutBtn ? 'Redirecting...' : 'Checkout ↗'
          }}</a>
          <p>{{ total }}</p>
        </div>

        <p>You will be redirected to Shopify. Shipping, taxes, and discounts will be calculated at checkout.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { convertPriceEur } from '~/utils/shopify/helper';

const shopifyStore = useShopifyStore();

const clickedCheckoutBtn = ref(false);

const total = computed(() => convertPriceEur(shopifyStore.totalPrice));
</script>
