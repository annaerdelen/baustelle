import { FiImage } from 'react-icons/fi';
import { generatePreviewMedia, generatePreviewMediaTitle, mediaValidation } from '../../../utils/sanityHelper';

const moduleTitle = 'Single Media (with Video Player Option)';
const icon = FiImage;

export default {
  title: moduleTitle,
  name: 'singleMedia',
  type: 'object',
  icon,
  fields: [
    {
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Fullscreen', value: 'fullscreen' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'small',
    },
    {
      name: 'media',
      type: 'media',
      validation: mediaValidation,
    },
    {
      name: 'useVideoPlayer',
      title: 'Display as Video Player',
      description: 'When enabled, this will display video controls (play, pause, timeline, etc.)',
      type: 'boolean',
      hidden: ({ parent }) => !parent?.media?.type || parent.media.type !== 'video',
      initialValue: true,
    },
  ],

  preview: {
    select: {
      title: 'image.alt',
      type: 'media.type',
      image: 'media.image.asset',
      imageName: 'media.image.asset.originalFilename',
      playbackId: 'media.video.asset.playbackId',
    },
    prepare({ type, imageName, image, playbackId }) {
      return {
        title: generatePreviewMediaTitle({ type, image, imageName, playbackId }),
        subtitle: moduleTitle,
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
