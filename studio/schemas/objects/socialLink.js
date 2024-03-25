import { FiLink2 } from 'react-icons/fi';

export default {
  name: 'socialLink',
  title: 'Link',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
    // {
    //   title: 'Icon',
    //   name: 'icon',
    //   type: 'image',
    // },
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
};
