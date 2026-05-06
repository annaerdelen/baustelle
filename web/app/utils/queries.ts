import { defineQuery } from 'groq';

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
  _type == "mainImage" => {
    'type': 'image',
    'image': asset._ref,
    'alt': alt,
    'crop': crop,
    'hotspot': hotspot,
    'dimensions': asset->metadata.dimensions,
    'originalFilename': asset->originalFilename,
  },
  _type == "mainVideo" => {
    'type': 'video',
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
    'slug': page->slug,
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

export const blockContent = (block: string) => `
  ${block}[]{
    ...,
    _type == "block" => {
      markDefs[]{
        _type == "externalLink" => {
          ...,
          'type': 'externalLink',
        },
        _type == "internalLink" => {
          ...,
          'type': 'internalLink',
          'page': page->_type,
          'slug': page->slug,
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

export const defaultQuery = defineQuery(`{
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
  }
}`);

export const homagepageQuery = defineQuery(`{
  "homepage": *[_type == "homepage"][0]{
    projects[]->{
      _id,
      slug{current},
      ${media}
    }
  }
}`);

export const pageQuery = defineQuery(`{
  ${siteTitle}
  "page": *[_type == "page" && slug.current == $slug][0]{
    ${seo}
    ${media}
    _id,
    title,
    content[]{
      ${modules}
    }
  }
}`);

export const projectsQuery = defineQuery(`{
  ${siteTitle}
  "projectsOverview": *[_type == "projectsOverview"][0]{
    _id,
    ${seo}
    title,
    slug,
  },
  "projects": *[_type == "project" && (isProjectHidden == false || !defined(isProjectHidden))]|order(orderRank)[]{
    _id,
    ${media}
    title,
    slug
  },
}`);

export const projectQuery = defineQuery(`{
  ${siteTitle}
  "project": *[_type == "project" && slug.current == $slug]|order(_updatedAt desc)[0]{
    ${seo}
    slug,
    title,
    date,
    ${media}
    ${blockContent('description')}
    ${mediaGallery}
    "nextCaseStudy": *[_type == "caseStudy" && orderRank > ^.orderRank] | order(orderRank)[0],
    "firstCaseStudy": *[_type == "caseStudy"] | order(orderRank)[0],
  },
}`);
