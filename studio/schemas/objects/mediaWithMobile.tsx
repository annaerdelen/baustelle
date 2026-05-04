import { defineField, defineType } from 'sanity';
import { generatePreviewMedia, generatePreviewMediaTitle } from '../../utils/sanityHelper';

export default defineType({
  name: 'mediaWithMobile',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      type: 'media',
      options: { collapsible: true, collapsed: false },
    }),
    defineField({
      name: 'mediaMobile',
      type: 'media',
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    select: {
      title: 'image.alt',
      type: 'type',
      image: 'image.asset',
      imageName: 'image.asset.originalFilename',
      playbackId: 'video.asset.playbackId',
    },
    prepare({ type, imageName, image, playbackId }) {
      return {
        title: generatePreviewMediaTitle({ type, image, imageName, playbackId }),
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
});
