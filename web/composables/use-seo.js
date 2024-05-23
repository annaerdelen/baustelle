export default function ({ global, title, seo, hidden = false }) {
  const lang = 'en'; //TODO
  const description = seo?.metaDescription || global.metaDescription;
  const image = seo?.ogImage || global.ogImage || '';

  useHead({
    title: title ? `${title} • ${global.siteTitle}` : global.siteTitle,
    htmlAttrs: {
      lang,
    },
    meta: [
      (hidden || seo?.notIndexed) && { name: 'robots', content: 'noindex, nofollow' },
      { name: 'robots', content: 'noindex, nofollow' }, //TODO
      {
        name: 'title',
        content: global.siteTitle,
      },
      {
        property: 'og:title',
        content: global.siteTitle,
      },
      description && {
        name: 'description',
        content: description,
      },
      image && {
        property: 'og:image',
        content: image,
      },
    ],
    link: [
      global.favicon ? { rel: 'icon', type: 'image/png', href: global.favicon } : { rel: 'icon', href: 'data:image' },
      // { rel: 'apple-touch-icon', href: global.webClip },
      //TODO
      // {
      //   rel: 'preload',
      //   as: 'font',
      //   type: 'font/woff2',
      //   crossorigin: true,
      //   href: '/fonts/PFDasGroteskMonoPro-Light.woff2',
      // },
    ],
    // script: [{ defer: true, 'data-domain': 'domain.de', src: 'https://plausible.io/js/plausible.js' }],
  });
}
