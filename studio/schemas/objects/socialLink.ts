import { defineType } from 'sanity';
import { FiLink2 } from 'react-icons/fi';

export default defineType({
  name: 'socialLink',
  title: 'Link',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiLink2,
      };
    },
  },
});
