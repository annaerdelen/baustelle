export default function ({ siteTitle, title, seo, hidden = false }) {
  const pageTitle = seo?.metaTitle || title;
  const description = seo?.metaDescription;
  const image = seo?.ogImage;

  useHead({
    title: pageTitle ? `${pageTitle} • ${siteTitle}` : siteTitle,
    meta: [
      hidden || seo?.notIndexed ? { name: 'robots', content: 'noindex, nofollow' } : {},
      {
        name: 'title',
        content: pageTitle || siteTitle,
      },
      {
        property: 'og:title',
        content: pageTitle || siteTitle,
      },
      description && {
        name: 'description',
        content: description,
      },
      description && {
        property: 'og:description',
        content: description,
      },
      image && {
        property: 'og:image',
        content: image,
      },
    ],
  });
}
