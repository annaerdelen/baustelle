import { FiMinus } from 'react-icons/fi';

export default {
  name: 'client',
  type: 'document',
  icon: FiMinus,
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
