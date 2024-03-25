import { FiHome } from 'react-icons/fi';

export default {
  type: 'document',
  name: 'homepage',
  title: 'Hompage',
  icon: FiHome,
  fields: [
    {
      title: 'Options',
      name: 'options',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          title: 'Option 1?',
          name: 'isOption',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: true,
        },
        {
          title: 'Option 1?',
          name: 'isOption2',
          type: 'boolean',
          options: { layout: 'checkbox' },
          initialValue: false,
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
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
    },
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
};
