import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import { defineNuxtConfig } from 'nuxt/config';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-10-20',
  useCdn: false, // Set to true for caching in production
});

export default defineNuxtConfig({
  hooks: {
    'nitro:build:before': async () => {
      console.log('Generating Netlify redirects...');

      const redirects = await client.fetch('*[_type == "redirect"]');
      const redirectsContent = redirects.map(({ from, to, statusCode }) => `${from} ${to} ${statusCode || 301}`).join('\n');

      const redirectsPath = path.resolve('public/_redirects');
      fs.writeFileSync(redirectsPath, redirectsContent);

      console.log('✅ Netlify redirects file created.');
    },
  },

  ssr: true,

  nitro: {
    preset: 'netlify-static',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  routeRules: {
    // '/about': { redirect: '/' },
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

  modules: ['@nuxtjs/sanity', '@nuxt/image'],

  css: ['@/assets/styles/fonts.css', '@/assets/styles/index.css', '@/assets/styles/normalize.css', '@/assets/styles/fallback.css'],

  imports: { dirs: ['./stores'] },

  components: [{ path: '~/components', pathPrefix: false }],

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-10-20',
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
  // router: {
  //   options: {
  //     scrollBehaviorType: 'smooth',
  //   },
  // },
});
