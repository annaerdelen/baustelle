import { CustomGuide } from '../../components/CustomGuide';

export default {
  type: 'document',
  name: 'guide',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'guide',
      type: 'text',
      components: {
        field: CustomGuide,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Guide',
      };
    },
  },
};
