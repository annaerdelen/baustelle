import { FiAlignLeft } from 'react-icons/fi';

export default {
  name: 'copy',
  type: 'object',
  icon: FiAlignLeft,
  // options: {columns: 2},
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'copy',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'text.0.children.0.text',
    },
    prepare({ title, content }) {
      return {
        title: title || content,
        subtitle: 'Copy',
        media: FiAlignLeft,
      };
    },
  },
};
