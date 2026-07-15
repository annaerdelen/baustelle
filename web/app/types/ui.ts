import type { HomagepageQueryResult, Slug } from './sanity';

export type Cta = {
  _type?: string;
  type: 'internalLink' | 'externalLink' | 'none';
  title?: string;
  slug?: Slug;
  page?: string;
  href?: string;
};

type Homepage = NonNullable<HomagepageQueryResult['homepage']>;

export type BlockContentBlocks = NonNullable<Homepage['introText']> | NonNullable<TextBlockModule['text']>;
