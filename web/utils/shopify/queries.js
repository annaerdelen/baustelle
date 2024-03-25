export const product = `
  ...,
  'title': store.title,
  'slug': store.slug.current,
  'image': store.previewImageUrl,
  'price': store.priceRange.maxVariantPrice,
  'variants': store.variants[]->{
    ...,
    'id': store.id,
    'title': store.title,
    'price': store.price,
  }
`;
