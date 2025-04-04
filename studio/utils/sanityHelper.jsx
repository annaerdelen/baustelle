import React from 'react';

export const slugify = (slug) => {
  return slug
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .slice(0, 200);
};

export const slugValidation = (Rule) =>
  Rule.custom((slug) => {
    if (typeof slug === 'undefined') return true;

    const slugRule = new RegExp('^[a-z0-9]+(?:-[a-z0-9]+)*$');

    return slugRule.test(slug.current) ? true : 'Please only use lowercase letters, numbers or single hyphens.';
  }).required();

export const mediaValidation = (Rule) =>
  Rule.custom((props) => {
    if ((props.type === 'image' && props.image) || (props.type === 'video' && props.video)) return true;
    return 'Image or Video required';
  });

export const generatePreviewMediaTitle = (options) => {
  if ((options.type === 'image' || options.type === 'mainImage') && options.image) return options.imageName;
  if ((options.type === 'video' || options.type === 'mainVideo') && options.playbackId) return 'Video';

  return '[Empty]';
};

export const generatePreviewMedia = (options) => {
  if ((options.type === 'image' || options.type === 'mainImage') && options.image) return options.image;
  if ((options.type === 'video' || options.type === 'mainVideo') && options.playbackId)
    return (
      <figure>
        <img style={{ objectFit: 'cover' }} src={`https://image.mux.com/${options.playbackId}/animated.webp`} alt="Video Preview" />
      </figure>
    );
};

export const ctaValidation = (Rule) =>
  Rule.custom((props) => {
    if (
      props.type === 'none' ||
      (props.type === 'internalLink' && props.title && props.page) ||
      (props.type === 'externalLink' && props.title && props.href)
    )
      return true;

    return 'Internal Link or External Link required';
  });
