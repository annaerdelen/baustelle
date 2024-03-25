import { FiFile } from 'react-icons/fi';
import { slugify, slugValidation } from '../../utils/sanityHelper';

export default {
  type: 'document',
  name: 'legal',
  title: 'Legal',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
    },
    {
      title: 'Text',
      name: 'text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiFile,
      };
    },
  },
};
