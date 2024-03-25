import { FiSidebar } from 'react-icons/fi';
import { slugify, slugValidation } from '../../utils/sanityHelper';

export default {
  name: 'projectsOverview',
  title: 'Projects Overview',
  type: 'document',
  icon: FiSidebar,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects Overview',
        media: FiSidebar,
      };
    },
  },
};
