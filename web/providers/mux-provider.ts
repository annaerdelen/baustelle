import type { ProviderGetImage } from '@nuxt/image';

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  // Extract playbackId from src if passed as full URL
  const playbackId = src;

  // Build Mux URL with modifiers
  const width = modifiers.width || '5';
  const time = modifiers.time || '0';

  return {
    url: `https://image.mux.com${playbackId}/thumbnail.webp?time=${time}&width=${width}`,
  };
};
