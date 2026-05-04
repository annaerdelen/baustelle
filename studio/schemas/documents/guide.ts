import { defineField, defineType } from 'sanity';
import { CustomGuide } from '../../components/CustomGuide';

export default defineType({
  type: 'document',
  name: 'guide',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'guide',
      type: 'text',
      components: {
        field: CustomGuide,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Guide',
      };
    },
  },
});
