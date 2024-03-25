import { CustomGuide } from '../../components/CustomGuide';

export default {
  type: 'document',
  name: 'guide',
  fields: [
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
