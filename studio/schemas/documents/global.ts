import { defineField, defineType } from 'sanity';
import { PAGES } from '../../utils/sanityConstants';

export default defineType({
  type: 'document',
  name: 'global',
  title: 'Global Settings',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    { name: 'content' },
    { name: 'redirects' },
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters').required(),
      group: 'seo',
    }),
    defineField({
      name: 'favicon',
      type: 'image',
      group: 'seo',
      description: 'Please upload a PNG file with a resolution of max. 400x400px',
    }),
    // {
    //   title: 'Web Clip',
    //   name: 'webClip',
    //   type: 'image',
    //   group: 'seo',
    // },
    defineField({
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      group: 'seo',
      description: '1200x630 recommended',
    }),
    defineField({
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
    }),
    defineField({
      name: 'email',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'content',
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      description: 'Do not include years.',
      group: 'content',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
});
