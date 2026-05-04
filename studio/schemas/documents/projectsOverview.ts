import { defineField, defineType } from 'sanity';
import { FiSidebar } from 'react-icons/fi';
import { slugify, slugValidation } from '../../utils/sanityHelper';

export default defineType({
  name: 'projectsOverview',
  title: 'Projects Overview',
  type: 'document',
  icon: FiSidebar,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
      hidden: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects Overview',
        media: FiSidebar,
      };
    },
  },
});
