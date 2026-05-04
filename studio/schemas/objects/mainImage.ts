import { defineField, defineType } from 'sanity';
import { FiImage } from 'react-icons/fi';

export default defineType({
  title: 'Image',
  name: 'mainImage',
  type: 'image',
  icon: FiImage,
  options: { hotspot: true },
  fields: [
    defineField({
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      description: 'Optional but recommended. A short description of the image that is important for accessibility and SEO.',
    }),
  ],
  preview: {
    select: {
      filename: 'asset.originalFilename',
      image: 'asset',
    },
    prepare({ filename, image }) {
      return {
        title: filename,
        media: image,
      };
    },
  },
});
