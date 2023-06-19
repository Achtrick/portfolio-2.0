export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'from',
      title: 'From',
      type: 'string',
    },
    {
      name: 'to',
      title: 'To',
      type: 'string',
    },
    {
      name: 'fr_title',
      title: 'Fr_Title',
      type: 'string',
    },
    {
      name: 'en_title',
      title: 'En_Title',
      type: 'string',
    },
    {
      name: 'en_description',
      title: 'En_Description',
      type: 'string',
    },
    {
      name: 'fr_description',
      title: 'Fr_Description',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
