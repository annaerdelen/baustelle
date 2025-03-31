import { FiAlignLeft } from 'react-icons/fi';
import { ctaValidation } from '../../utils/sanityHelper';

const moduleTitle = 'Text Block';
const icon = FiAlignLeft;

export default {
  title: moduleTitle,
  name: 'textBlock',
  type: 'object',
  icon,
  fields: [
    {
      name: 'text',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      validation: ctaValidation,
    },
  ],
  preview: {
    select: {
      title: 'text.0.children[0].text',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: moduleTitle,
        media: icon,
      };
    },
  },
};
