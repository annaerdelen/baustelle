import { FiEye } from 'react-icons/fi';

export function PreviewAction(props) {
  if (props.id === 'global' || props.id === 'guide') return;

  //TODO set url
  const previewUrl = 'http://localhost:3000';

  return {
    label: 'Open Preview',
    icon: FiEye,
    onHandle: () => {
      const doc = props.draft || props.published;

      // test page preview urls
      const url = `${previewUrl}/${doc.slug?.current || ''}?preview=true`;
      window.open(url, '_blank');
    },
  };
}
