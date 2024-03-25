import { generatePreviewMedia, generatePreviewMediaTitle } from '../../utils/sanityHelper';

export default {
  name: 'media',
  type: 'object',
  initialValue: { type: 'image' },
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'image',
      type: 'mainImage',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'image',
      options: {
        collapsed: false,
        hotspot: true,
      },
    },
    {
      name: 'video',
      type: 'mux.video',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'video',
    },
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
};
