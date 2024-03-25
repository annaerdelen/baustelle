export default {
  title: 'Image',
  name: 'mainImage',
  type: 'image',
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
    prepare(selection) {
      const { filename, dimensions, image } = selection;
      return {
        title: filename,
        subtitle: dimensions ? `(${dimensions.width}px × ${dimensions.height}px)` : '…',
        media: image,
      };
    },
  },
};
