import type { HomepageQueryResult, Slug } from './sanity';

export type Cta = {
  _type?: string;
  type: 'internalLink' | 'externalLink' | 'none';
  title?: string | null;
  slug?: Slug | null;
  page?: string | null;
  href?: string | null;
};

type Homepage = NonNullable<HomepageQueryResult['homepage']>;
export type HomepageContent = NonNullable<Homepage['content']>;

export type BlockContentBlocks = NonNullable<Homepage['introText']> | NonNullable<TextBlockModule['text']>;
