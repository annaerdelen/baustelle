import { PAGES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'global',
  title: 'Global Settings',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    },
    {
      name: 'metaDescription',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters').required(),
      group: 'seo',
    },
    {
      name: 'favicon',
      type: 'image',
      group: 'seo',
    },
    // {
    //   title: 'Web Clip',
    //   name: 'webClip',
    //   type: 'image',
    //   group: 'seo',
    // },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      group: 'seo',
      description: '1200x630 recommended',
    },
    {
      name: 'navigation',
      title: 'Navigation/Pages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: PAGES,
          title: 'Pages',
        },
      ],
      group: 'content',
    },
    {
      name: 'email',
      type: 'string',
      group: 'content',
    },
    {
      name: 'social',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'content',
    },
    {
      name: 'copyright',
      type: 'string',
      description: 'Do not include years.',
      group: 'content',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
};
