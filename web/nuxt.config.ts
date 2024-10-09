export default defineNuxtConfig({
  ssr: true,

  routeRules: {
    '/information': { redirect: '/about' },
    '/work/**': { redirect: '/projects' },
  },

  app: {
    //TODO
    head: {
      // script: [
      //   { defer: true, 'data-domain': 'domain.de', src: 'https://plausible.io/js/plausible.js' }
      // ],
      // link: [
      // {
      //   rel: 'preload',
      //   as: 'font',
      //   type: 'font/woff2',
      //   crossorigin: true,
      //   href: '/fonts/PFDasGroteskMonoPro-Light.woff2',
      // },
      // ],
      noscript: [{ children: 'Please enable JavaScript to view this website.' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  //TODO
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@pinia/nuxt', '@nuxt/image'],
  // '@nuxtjs/algolia'

  css: [
    '@/assets/styles/fallback.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/index.css',
    '@/assets/styles/normalize.css',
    '@/assets/styles/utilities.css',
    '@/assets/styles/variables.css',
  ],

  imports: { dirs: ['./stores'] },

  components: [{ path: '~/components', pathPrefix: false }],

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-24',
    useCdn: false,
  },

  image: {
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID,
    },
    screens: {
      320: 320,
      640: 640,
      768: 768,
      1024: 1024,
      1280: 1280,
      1536: 1536,
      1920: 1920,
      2560: 2560,
      3200: 3200,
      3201: 3201,
    },
  },

  //TODO
  // algolia: {
  //   recommend: true,
  //   apiKey: '',
  //   applicationId: process.env.ALGOLIA_APPLICATION_ID,
  //   instantSearch: { theme: 'reset' },
  // },

  //TODO
  // runtimeConfig: {
  //   public: {
  //     shopifyDomain: process.env.SHOPIFY_DOMAIN,
  //     shopifyStorefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  //   },
  // },
});
