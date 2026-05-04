import { defineField, defineType } from 'sanity';
import { FiSidebar } from 'react-icons/fi';
import { MODULES } from '../../utils/sanityConstants';

export default defineType({
  type: 'document',
  name: 'page',
  icon: FiSidebar,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slugField',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: MODULES,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description.0.children.0.text',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: FiSidebar,
      };
    },
  },
});
