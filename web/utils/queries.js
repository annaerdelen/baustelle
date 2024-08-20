export const seo = `
  seo{
    notIndexed,
    metaDescription,
    'ogImage': ogImage.asset->url,
  },
`;

export const global = `
  "global": *[_type == "global"][0]{
    siteTitle,
    metaDescription,
    navigation[]->,
    'favicon': favicon.asset->url,
    'ogImage': ogImage.asset->url,
    social[]{
      ...,
      'icon': icon.asset->url,
    },
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

export const video = `
  type == "video" => {
    'src': video.asset->playbackId,
  },
`;

export const mediaGallery = `
  mediaGallery[]{
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
      'src': video.asset->playbackId,
    },
  }
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

export const link = `
  link{
    'slug': page->slug.current,
    'page': page->_type,
  }
`;

export const blockContent = `
  _type == "block" => {
    markDefs[]{
      ...,
      'type': _type,
      _type == "internalLink" => {
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
`;

export const modules = `
  _type == "mediaGallery" => {
    assets[]{
      ...,
      ${image}
      ${video}
    },
  },
  _type == "copy" => {
    ${blockContent}
  },
`;
