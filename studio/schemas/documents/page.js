import { FiSidebar } from 'react-icons/fi';
import { MODULES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'page',
  icon: FiSidebar,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slugField',
    },
    {
      name: 'description',
      type: 'blockContent',
    },
    // {
    //   name: 'content',
    //   type: 'array',
    //   of: MODULES,
    // },
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
};
