export default {
  name: 'mediaGallery',
  type: 'array',
  description: 'Drag & Drop Images from Finder/File Explorer',
  of: [{ type: 'mainImage' }, { type: 'mainVideo' }],
  options: { layout: 'grid' },
};
