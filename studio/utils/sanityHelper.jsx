import React from 'react'
import {FiX} from 'react-icons/fi'

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
    .slice(0, 200)
}

export const slugValidation = (Rule) =>
  Rule.custom((slug) => {
    if (typeof slug === 'undefined') return true

    const slugRule = new RegExp('^[a-z0-9]+(?:-[a-z0-9]+)*$')

    return slugRule.test(slug.current)
      ? true
      : 'Please only use lowercase letters, numbers or single hyphens.'
  }).required()

export const generatePreviewMediaTitle = (options) => {
  if (options.type === 'image' && options.image) return options.imageName
  if (options.type === 'video' && options.playbackId) return 'Video'

  return '[Empty]'
}

export const generatePreviewMedia = (options) => {
  if (options.type === 'image' && options.image) return options.image
  if (options.type === 'video' && options.playbackId)
    return (
      <figure>
        <img
          style={{objectFit: 'cover'}}
          src={`https://image.mux.com/${options.playbackId}/animated.webp`}
          alt="Video Preview"
        />
      </figure>
    )

  // return FiX
}
