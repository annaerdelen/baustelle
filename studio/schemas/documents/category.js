import { FiTag } from 'react-icons/fi';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiTag,
      };
    },
  },
};
