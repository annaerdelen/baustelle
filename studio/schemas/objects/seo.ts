import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      title: 'Hide this Page from Search Engine Indexing?',
      name: 'notIndexed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'metaTitle',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters'),
    }),
    defineField({
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
    }),
  ],
});
