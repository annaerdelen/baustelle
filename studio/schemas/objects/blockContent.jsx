import React from 'react';
import { FiFile, FiLink, FiEdit2 } from 'react-icons/fi';
import { defineType, defineArrayMember } from 'sanity';
import { PAGES } from '../../utils/sanityConstants';

const Highlight = (props) => <span style={{ backgroundColor: 'hsla(50, 100%, 50%, 0.5)' }}>{props.children}</span>;

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  description: 'Create paragraphs with the key combination: shift + enter',
  of: [
    defineArrayMember({
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
            title: 'External Link',
            icon: FiLink,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            icon: FiFile,
            fields: [
              {
                title: 'Page',
                name: 'page',
                type: 'reference',
                to: PAGES,
                options: {
                  disableNew: true,
                },
              },
            ],
          },
        ],
      },
    }),
    // defineArrayMember({
    //   type: 'image',
    //   options: {hotspot: true},
    // }),
  ],
});
