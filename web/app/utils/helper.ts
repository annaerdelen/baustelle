import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Media } from '~/types/media';
import type { SanityImageDimensions } from '~/types/sanity';
import type { Cta } from '~/types/ui';

export function select(selector: string, container: Document = document) {
  return container.querySelector(selector);
}

export function selectAll(selector: string, container: Document = document) {
  return container.querySelectorAll(selector);
}

export const removeDuplicates = (array: string[]) => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
};

export const slugToString = (slug: string) => {
  const slugArray = slug.split('-');
  const stringArray = slugArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return stringArray.join(' ');
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((st) => st.refresh());
};

export const videoAspect = (video: { aspectRatio?: string | null }) => {
  const aspectRatio = String(video.aspectRatio);

  return `aspect-ratio:${Number(aspectRatio.split(':')[0]) / Number(aspectRatio.split(':')[1])}`;
};

export const imageAspect = (image: { dimensions?: SanityImageDimensions | null }) => {
  const originalWidth = image.dimensions?.width || 0;
  const originalHeight = image.dimensions?.height || 0;

  return `aspect-ratio:${originalWidth / originalHeight}`;
};

export const mediaAspect = (media: Media) => {
  return media?.type === 'video' ? videoAspect(media) : imageAspect(media);
};

export const checkIfMediaExists = (media: Media) => {
  return (media?.type === 'image' && media?.image) || (media?.type === 'video' && media?.playbackId);
};

export const checkIfCtaExists = (cta: Cta) => {
  return cta?.type !== 'none' && cta?.title && (cta?.slug || cta?.page || cta?.href);
};
