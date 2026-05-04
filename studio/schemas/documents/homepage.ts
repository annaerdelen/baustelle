import { defineField, defineType } from 'sanity';
import { FiHome } from 'react-icons/fi';

export default defineType({
  type: 'document',
  name: 'homepage',
  icon: FiHome,
  fields: [
    defineField({
      title: 'Options',
      name: 'options',
      type: 'object',
      options: { columns: 2 },
      fields: [
        defineField({
          title: 'Option 1?',
          name: 'isOption',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: true,
        }),
        defineField({
          title: 'Option 1?',
          name: 'isOption2',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          title: 'Project',
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiHome,
      };
    },
  },
});
