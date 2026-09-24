import type { HomagepageQueryResult, Slug } from './sanity';

export type Cta = {
  _type?: string;
  type: 'internalLink' | 'externalLink' | 'none';
  title?: string | null;
  slug?: Slug | null;
  page?: string | null;
  href?: string | null;
};

type Homepage = NonNullable<HomagepageQueryResult['homepage']>;

export type BlockContentBlocks = NonNullable<Homepage['introText']> | NonNullable<TextBlockModule['text']>;
