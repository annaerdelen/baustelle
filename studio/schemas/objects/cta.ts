import { defineField, defineType } from 'sanity';
import { FiLink } from 'react-icons/fi';
import { PAGES } from '../../utils/sanityConstants';

// defineField({
//   title: 'CTA',
//   name: 'cta',
//   type: 'cta',
//   validation: ctaValidation,
// }),

export default defineType({
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internalLink' },
          { title: 'External Link', value: 'externalLink' },
          { title: 'None', value: 'none' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'internalLink',
    }),
    defineField({
      name: 'title',
      type: 'string',
      hidden: ({ parent }) => !parent?.type || parent.type === 'none',
    }),
    defineField({
      name: 'page',
      type: 'reference',
      to: PAGES,
      hidden: ({ parent }) => !parent?.type || parent.type === 'none' || parent.type !== 'internalLink',
      options: { disableNew: true },
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      description: 'For email addresses use "mailto:" in front of the email (e.g. mailto:example@email.com), for phone numbers use "tel:"',
      hidden: ({ parent }) => !parent?.type || parent.type === 'none' || parent.type !== 'externalLink',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
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
});
