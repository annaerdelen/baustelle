import { defineField, defineType } from 'sanity';
import { FiMinus } from 'react-icons/fi';

export default defineType({
  name: 'category',
  type: 'document',
  icon: FiMinus,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
    }),
  },
});
