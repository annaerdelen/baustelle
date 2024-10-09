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
