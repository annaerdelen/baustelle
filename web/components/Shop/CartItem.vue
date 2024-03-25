<template>
  <li :class="{ 'opacity-50': loading }" class="flex pb-8 w-full">
    <figure class="w-[70px] aspect-square">
      <ShopifyImg :asset="item.variant.image.src" />
    </figure>

    <div class="pl-8 w-full">
      <div class="flex justify-between">
        <p>{{ item.title }}</p>
        <p>{{ price }}</p>
      </div>

      <div class="flex">
        <button :class="{ loading: loadingQty }" @click="updateQuantity(item.quantity - 1)">–</button>

        <p>{{ item.quantity }}</p>

        <button :class="{ loading: loadingQty }" @click="updateQuantity(item.quantity + 1)">+</button>

        <button class="ml-8" @click="removeFromCart">remove</button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { convertPriceEur } from '~/utils/shopify/helper';

const shopifyStore = useShopifyStore();

const props = defineProps({
  item: Object,
});

const loading = ref(false);
const loadingQty = ref(false);

const price = computed(() => convertPriceEur(props.item.variant.price.amount * props.item.quantity));

const removeFromCart = async () => {
  loading.value = true;
  await shopifyStore.removeLineItem(props.item.id);
  loading.value = false;
};

const updateQuantity = async (quantity) => {
  loadingQty.value = true;
  await shopifyStore.updateLineItem({ id: props.item.id, quantity });
  loadingQty.value = false;
};
</script>

<style scoped>
.loading {
  @apply opacity-50 pointer-events-none;
}
</style>
