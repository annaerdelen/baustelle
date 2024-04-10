import { FiVideo } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

export default {
  title: 'Video',
  name: 'mainVideo',
  type: 'object',
  icon: FiVideo,
  fields: [
    {
      name: 'video',
      type: 'mux.video',
    },
  ],
  preview: {
    select: {
      filename: 'video.asset.filename',
      playbackId: 'video.asset.playbackId',
    },
    prepare({ playbackId, filename }) {
      return {
        title: filename || 'Video',
        media: generatePreviewMedia({ type: 'video', playbackId }),
      };
    },
  },
};
