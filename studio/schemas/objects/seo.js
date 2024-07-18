export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters'),
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
    },
  ],
};
