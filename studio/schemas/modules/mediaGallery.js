import { FiImage } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

export default {
  name: 'mediaGallery',
  type: 'object',
  icon: FiImage,
  fields: [
    {
      name: 'assets',
      type: 'array',
      of: [{ type: 'media' }],
      options: { layout: 'grid' },
    },
  ],
  preview: {
    select: {
      type: 'assets.0.type',
      image: 'assets.0.image.asset',
      playbackId: 'assets.0.video.asset.playbackId',
      assets: 'assets',
    },
    prepare({ type, image, playbackId, assets }) {
      return {
        title: Object.values(assets).length + ' Assets',
        subtitle: 'Media Gallery',
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
