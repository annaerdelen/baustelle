import { FiMinus } from 'react-icons/fi';

export default {
  name: 'category',
  type: 'document',
  icon: FiMinus,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
    }),
  },
};
