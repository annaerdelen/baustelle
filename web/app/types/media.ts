import type { SanityImageCrop, SanityImageDimensions, SanityImageHotspot } from './sanity';

export type Media = {
  _key: string | null;
  type: 'image' | 'video' | null;
  image?: string | null;
  alt?: string | null;
  dimensions?: SanityImageDimensions | null;
  hotspot?: SanityImageHotspot | null;
  crop?: SanityImageCrop | null;
  playbackId?: string | null;
  aspectRatio?: string | null;
  mp4Supported?: boolean | null;
};
