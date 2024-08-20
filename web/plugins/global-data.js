//TODO
// import { useShopifyStore } from '../stores/shopifyStore';
import { global as globalQuery } from '@/utils/queries';

export default defineNuxtPlugin(async () => {
  const global = groq`{
    ${globalQuery}
  }`;

  const { data: globalData } = await useSanityQuery(global);
  const globalStore = useGlobalStore();
  globalStore.value = globalData.value.global;

  // if (process.server) return;
  // const shopifyStore = useShopifyStore(nuxtApp.$pinia);
  // shopifyStore.fetchCheckout();
});
