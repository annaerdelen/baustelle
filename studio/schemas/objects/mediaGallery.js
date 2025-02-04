export default {
  name: 'mediaGallery',
  type: 'array',
  description:
    'Drag & drop multiple images from the finder/file explorer into the field below. Videos need to be uploaded manually with "add item..."',
  of: [{ type: 'mainImage' }, { type: 'mainVideo' }],
  options: { layout: 'grid' },
};
