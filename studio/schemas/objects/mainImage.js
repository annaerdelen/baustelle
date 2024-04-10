import { FiImage } from 'react-icons/fi';

export default {
  title: 'Image',
  name: 'mainImage',
  type: 'image',
  icon: FiImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      description: 'Optional but recommended. A short description of the image that is important for accessibility and SEO.',
    },
  ],
  preview: {
    select: {
      filename: 'asset.originalFilename',
      dimensions: 'asset.metadata.dimensions',
      image: 'asset',
    },
    prepare({ filename, image }) {
      return {
        title: filename,
        media: image,
      };
    },
  },
};
