import { defineStore } from 'pinia';
import Client from 'shopify-buy';

const shopifyCheckoutID = 'shopify_checkout_id';

export const useShopifyStore = defineStore('shopifyStore', () => {
  const client = Client.buildClient({
    domain: useRuntimeConfig().public.shopifyDomain,
    storefrontAccessToken: useRuntimeConfig().public.shopifyStorefrontAccessToken,
  });

  const loading = ref(false);
  const checkout = ref(null);

  const lineItems = computed(() => toRaw(checkout.value)?.lineItems);
  const url = computed(() => toRaw(checkout.value)?.webUrl);
  const totalPrice = computed(() => toRaw(checkout.value)?.totalPrice.amount);
  const totalProductsInCart = computed(() => toRaw(checkout.value)?.lineItems.reduce((total, item) => total + item.quantity, 0));

  async function createCheckout() {
    loading.value = true;

    const newCheckout = await client.checkout.create();
    localStorage.setItem(shopifyCheckoutID, newCheckout.id);
    checkout.value = newCheckout;

    loading.value = false;
  }

  async function fetchCheckout() {
    loading.value = true;

    const existingCheckoutID = localStorage.getItem(shopifyCheckoutID);

    if (existingCheckoutID) {
      const existingCheckout = await client.checkout.fetch(existingCheckoutID);

      // check if cart has already been purchased or if existingCheckout exists
      if (!existingCheckout || existingCheckout.completedAt) {
        await createCheckout();
      } else {
        checkout.value = existingCheckout;
      }
    } else {
      await createCheckout();
    }

    loading.value = false;
  }

  async function addItemToCheckout(payload) {
    const lineItemsToAdd = [{ variantId: payload.variantId, quantity: payload.quantity }];

    const newCheckout = await client.checkout.addLineItems(toRaw(checkout.value).id, lineItemsToAdd);
    checkout.value = newCheckout;
  }

  async function removeLineItem(lineItemIdsToRemove) {
    const newCheckout = await client.checkout.removeLineItems(toRaw(checkout.value).id, [lineItemIdsToRemove]);
    checkout.value = newCheckout;
  }

  async function updateLineItem(payload) {
    const lineItemsToUpdate = [{ id: payload.id, quantity: payload.quantity }];

    const newCheckout = await client.checkout.updateLineItems(toRaw(checkout.value).id, lineItemsToUpdate);
    checkout.value = newCheckout;
  }

  return { loading, lineItems, url, totalPrice, totalProductsInCart, fetchCheckout, addItemToCheckout, removeLineItem, updateLineItem };
});
