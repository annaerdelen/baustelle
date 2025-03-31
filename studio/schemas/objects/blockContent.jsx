import React from 'react';
import { FiEdit2, FiGlobe, FiFile } from 'react-icons/fi';
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
            name: 'externalLink',
            type: 'object',
            icon: FiGlobe,
            fields: [
              {
                name: 'title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                description: 'To link email addresses use "mailto:" infront of the email, for phone numbers use "tel:"',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }).required(),
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            icon: FiFile,
            fields: [
              {
                name: 'title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'page',
                type: 'reference',
                options: { disableNew: true },
                validation: (Rule) => Rule.required(),
                to: PAGES,
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
