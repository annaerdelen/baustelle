export default {
  name: 'mediaGallery',
  type: 'array',
  description: 'Drag & Drop Images from Finder/File Explorer, Videos need to be uploaded manually with "Add item..."',
  of: [{ type: 'mainImage' }, { type: 'mainVideo' }],
  options: { layout: 'grid' },
};
