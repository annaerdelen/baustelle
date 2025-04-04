export const seo = `
  seo{
    notIndexed,
    metaTitle,
    metaDescription,
    'ogImage': ogImage.asset->url,
  },
`;

export const siteTitle = `
  "global": *[_type == "global"][0]{
    siteTitle,
  },
`;

export const global = `
  "global": *[_type == "global"][0]{
    siteTitle,
    metaDescription,
    'favicon': favicon.asset->url,
    'ogImage': ogImage.asset->url,
    mainNavigation[]->{
      _id,
      _type,
      title,
      slug,
    },
    social[]{
      ...,
    },
    copyright,
    navigation[]->,
  },
`;

export const image = `
  type == "image" => {
    'image': image.asset._ref,
    'alt': image.alt,
    'crop': image.crop,
    'hotspot': image.hotspot,
    'dimensions': image.asset->metadata.dimensions,
    'originalFilename': image.asset->originalFilename,
  },
  `;

export const videoContent = `
  'thumbTime': video.asset->thumbTime,
  'aspectRatio': video.asset->data.aspect_ratio,
  'playbackId': video.asset->playbackId,
  'mp4Supported': video.asset->data.mp4_support == "standard",
`;

export const video = `
  type == "video" => {
    ${videoContent}
  },
`;

export const mediaGalleryContent = `
  _key,
  _type,
  _type == "mainImage" => {
    'image': asset._ref,
    'alt': alt,
    'crop': crop,
    'hotspot': hotspot,
    'dimensions': asset->metadata.dimensions,
    'originalFilename': asset->originalFilename,
  },
  _type == "mainVideo" => {
    ${videoContent}
  },
`;

export const mediaGallery = `
  mediaGallery[]{
    ${mediaGalleryContent}
  },
`;

export const mediaContent = `
  _key,
  type,
  ${image}
  ${video}
`;

export const media = `
  media{
    ${mediaContent}
  },
`;

export const ctaContent = `
  type,
  title,
  type == "internalLink" => {
    'slug': page->slug.current,
    'page': page->_type,
  },
  type == "externalLink" => {
    href,
  },
`;

export const cta = `
  cta{
    ${ctaContent}
  },
`;

export const blockContent = (block) => `
  ${block}[]{
    ...,
    _type == "block" => {
      markDefs[]{
        _type == "externalLink" => {
          ...,
        },
        _type == "internalLink" => {
          ...,
          'page': page->_type,
          'slug': page->slug.current,
        },
      },
    },
    _type == "image" => {
      ...,
      'src': image.asset->url,
      'crop': image.crop,
      'hotspot': image.hotspot,
      'dimensions': image.asset->metadata.dimensions,
    },
  },
`;

export const modules = `
  _type,
  _type == "gallery" => {
    assets[]{
      ${mediaGalleryContent}
    },
  },
  _type == "copy" => {
    title,
    ${blockContent('copy')}
  },
`;
