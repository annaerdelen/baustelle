import type { Cta } from '~/types/ui';

const EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

export const isMailtoHref = (href?: string | null) => {
  return typeof href === 'string' && href.trim().toLowerCase().startsWith('mailto:');
};

export const isMailtoLink = (cta?: Cta | null) => isMailtoHref(cta?.href);

export const getEmailFromMailto = (href?: string | null) => {
  if (!isMailtoHref(href) || !href) return '';
  return href.trim().slice('mailto:'.length).split('?')[0];
};

export const getEmailAddress = (value?: string | null) => {
  if (!value) return '';
  const trimmed = value.trim();
  return isMailtoHref(trimmed) ? getEmailFromMailto(trimmed) : trimmed;
};

export const toMailtoHref = (value?: string | null) => {
  const email = getEmailAddress(value);
  return email ? `mailto:${email}` : '';
};

export const isEmailText = (text?: string | null) => {
  if (!text) return false;
  const trimmed = text.trim();
  return new RegExp(`^${EMAIL_PATTERN.source}$`).test(trimmed);
};
