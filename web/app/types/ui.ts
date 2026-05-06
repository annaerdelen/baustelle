import type { Slug } from './sanity';

export type Cta = {
  type: 'internalLink' | 'externalLink' | 'none';
  title?: string;
  slug?: Slug;
  page?: string;
  href?: string;
};
