import { FiGrid } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

const moduleTitle = 'Gallery';
const icon = FiGrid;

export default {
  title: moduleTitle,
  name: 'gallery',
  type: 'object',
  icon,
  fields: [
    {
      name: 'mediaGallery',
      type: 'mediaGallery',
      validation: (Rule) => Rule.required().min(3),
    },
  ],

  preview: {
    select: {
      assets: 'mediaGallery',
      type: 'mediaGallery.0._type',
      image: 'mediaGallery.0.asset',
      imageName: 'mediaGallery.0.asset.originalFilename',
      playbackId: 'mediaGallery.0.video.asset.playbackId',
    },
    prepare({ type, assets, image, playbackId }) {
      return {
        title: `${Object.keys(assets).length || 0} Media Items`,
        subtitle: moduleTitle,
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
