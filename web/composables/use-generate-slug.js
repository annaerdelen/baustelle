export default function () {
  const generateSlug = (cta) => {
    if (cta.type === 'externalLink' || cta._type === 'externalLink') return cta.href;

    if (
      cta.type === 'internalLink' ||
      cta._type === 'internalLink' ||
      cta._type === 'page' ||
      cta._type === 'articlePage' ||
      cta._type === 'contact'
    ) {
      if (cta.page === 'homepage') return '/';

      let path = '';

      if (cta.page === 'project') {
        path = `projects/${cta.slug.current || cta.slug}`;
      } else {
        path = cta.slug.current || cta.slug;
      }

      return '/' + path;
    }
  };

  return {
    generateSlug,
  };
}
