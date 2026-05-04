import { defineField, defineType } from 'sanity';
import { orderRankField } from '@sanity/orderable-document-list';
import { FiSquare } from 'react-icons/fi';
import { generatePreviewMedia, mediaValidation, slugify, slugValidation } from '../../utils/sanityHelper';
import { MODULES } from '../../utils/sanityConstants';

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: FiSquare,
  fields: [
    orderRankField({ type: 'project', newItemPosition: 'before' }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'isProjectHidden',
      title: 'Hide on Homepage?',
      description: 'The project can still be accessed via the URL',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
      name: 'filter',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
          title: 'Category',
          // options: {  disableNew: true },
        },
      ],
    }),
    defineField({
      title: 'Preview, Hero Media',
      name: 'media',
      type: 'media',
      validation: mediaValidation,
    }),
    defineField({
      name: 'collaborator',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'website',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'mediaGallery',
      type: 'mediaGallery',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: MODULES,
      options: {
        insertMenu: {
          views: [{ name: 'grid', previewImageUrl: (schemaTypeName) => `/static/previews/article/${schemaTypeName}.jpeg` }],
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'media.type',
      image: 'media.image.asset',
      playbackId: 'media.video.asset.playbackId',
    },
    prepare({ title, type, image, playbackId }) {
      return {
        title,
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
});
