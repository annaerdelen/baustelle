import { FiImage } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

export default {
  name: 'gallery',
  type: 'object',
  icon: FiImage,
  fields: [
    {
      name: 'assets',
      type: 'mediaGallery',
    },
  ],
  preview: {
    select: {
      type: 'assets.0._type',
      image: 'assets.0.asset',
      imageName: 'assets.0.asset.originalFilename',
      playbackId: 'assets.0.video.asset.playbackId',
    },
    prepare({ type, image, playbackId }) {
      return {
        title: 'Gallery',
        media: generatePreviewMedia({ type, image, playbackId }),
        subtitle: 'Gallery',
      };
    },
  },
};
