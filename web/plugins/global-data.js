//TODO
import { useShopifyStore } from '../stores/shopifyStore';
import { useSanityStore } from '../stores/sanityStore';

export default defineNuxtPlugin((nuxtApp) => {
  const sanityStore = useSanityStore(nuxtApp.$pinia);
  sanityStore.setGlobal();
  // if (process.server) return;
  // const shopifyStore = useShopifyStore(nuxtApp.$pinia);
  // shopifyStore.fetchCheckout();
});
