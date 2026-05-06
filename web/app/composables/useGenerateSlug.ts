import type { Cta } from '~/types/ui';

//TODO
export const useGenerateSlug = () => {
  const generateSlug = (cta: Cta) => {
    if (cta.type === 'externalLink') return cta.href;

    if (cta.type === 'internalLink') {
      if (cta.page === 'homepage') return '/';

      let path: string | undefined = '';

      if (cta.page === 'project') {
        path = `work/${cta.slug?.current}`;
      } else {
        path = cta.slug?.current;
      }

      return '/' + path;
    }
  };

  return {
    generateSlug,
  };
};
