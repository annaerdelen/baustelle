import { FiLink } from 'react-icons/fi';
import { PAGES } from '../../utils/sanityConstants';

export default {
  name: 'cta',
  type: 'object',
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internalLink' },
          { title: 'External Link', value: 'externalLink' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'page',
      type: 'reference',
      to: PAGES,
      hidden: ({ parent }) => !parent?.type || parent.type !== 'internalLink',
      options: { disableNew: true },
    },
    {
      name: 'href',
      type: 'url',
      title: 'URL',
      description: 'To link email addresses use "mailto:" infront of the email, for phone numbers use "tel:"',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'externalLink',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiLink,
      };
    },
  },
};
