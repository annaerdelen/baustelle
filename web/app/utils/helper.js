import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function select(selector, container = document) {
  return container.querySelector(selector);
}

export function selectAll(selector, container = document) {
  return container.querySelectorAll(selector);
}

export const removeDuplicates = (array) => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
};

export const slugToString = (slug) => {
  const slugArray = slug.split('-');
  const stringArray = slugArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return stringArray.join(' ');
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((st) => st.refresh());
};

export const videoAspect = (video) => {
  return `aspect-ratio:${video.aspectRatio.split(':')[0] / video.aspectRatio.split(':')[1]}`;
};

export const imageAspect = (image) => {
  return `aspect-ratio:${image.dimensions.width / image.dimensions.height}`;
};

export const mediaAspect = (media) => {
  return media.type === 'video' ? videoAspect(media) : imageAspect(media);
};

export const checkIfMediaExists = (media) => {
  return (media?.type === 'image' && media?.image) || (media?.type === 'video' && media?.playbackId);
};

export const checkIfCtaExists = (cta) => {
  return cta?.type !== 'none' && cta?.title && (cta?.slug || cta?.page || cta?.href);
};
