//TODO
import Client from 'shopify-buy';

export default defineNuxtPlugin(() => {
  const shopifyClient = Client.buildClient({
    domain: useRuntimeConfig().public.shopifyDomain,
    storefrontAccessToken: useRuntimeConfig().public.shopifyStorefrontAccessToken,
  });

  return {
    provide: { shopifyClient },
  };
});
