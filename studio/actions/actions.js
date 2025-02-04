import { FiEye } from 'react-icons/fi';

export function PreviewAction(props) {
  if (props.id === 'global' || props.id === 'guide') return;

  //TODO set url
  const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';

  return {
    label: 'Open Preview',
    icon: FiEye,
    onHandle: () => {
      const doc = props.draft || props.published;
      let slug;

      switch (doc._type) {
        case 'homepage':
          slug = '';
          break;
        case 'about':
          slug = '/about';
          break;
        default:
          slug = doc.slug?.current || '';
      }

      // test page preview urls
      const url = `${previewUrl}${slug}?preview=true`;
      window.open(url, '_blank');
    },
  };
}
