export default {
  name: 'author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
    },
    {
      title: 'Portrait',
      name: 'media',
      type: 'media',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
