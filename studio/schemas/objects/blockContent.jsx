import React from 'react';
import { FiLink, FiEdit2 } from 'react-icons/fi';
import { PAGES } from '../../utils/sanityConstants';

const Highlight = (props) => <span style={{ backgroundColor: 'hsla(50, 100%, 50%, 0.5)' }}>{props.children}</span>;

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  description: 'Create paragraphs with the key combination: shift + enter',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      // styles: [
      //   {title: 'Regular', value: 'normal'},
      //   {title: 'Headline', value: 'h3'},
      // ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: FiEdit2,
            component: Highlight,
          },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            icon: FiLink,
            fields: [
              {
                name: 'type',
                type: 'string',
                options: {
                  list: [
                    { title: 'External Link', value: 'externalLink' },
                    { title: 'Internal Link', value: 'internalLink' },
                  ],
                  layout: 'radio',
                  direction: 'horizontal',
                },
                initialValue: 'externalLink',
                validation: (Rule) =>
                  Rule.custom((type, context) => {
                    const href = context.parent?.href;
                    if (!href) return true;

                    const linkType = context.parent?.type;

                    if (href && !linkType) {
                      return 'Please select a link type (Internal or External)';
                    }

                    return true;
                  }),
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
          },
        ],
      },
    },
    // defineArrayMember({
    //   type: 'image',
    //   options: {hotspot: true},
    // }),
  ],
};
