export default {
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  fields: [
    {
      name: 'from',
      title: 'From Path',
      type: 'string',
      description: 'The path to redirect from (e.g., /old-page)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'to',
      title: 'To Path',
      type: 'string',
      description: 'The path to redirect to (e.g., /new-page)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'statusCode',
      title: 'Status Code',
      type: 'number',
      options: {
        list: [
          { title: 'Permanent (301)', value: 301 },
          { title: 'Temporary (302)', value: 302 },
        ],
      },
      initialValue: 301,
    },
  ],
};
