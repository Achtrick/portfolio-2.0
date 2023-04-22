export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'fr_description',
      title: 'Fr_Description',
      type: 'string',
    },
    {
      name: 'en_description',
      title: 'En_Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
    },
  ],
}
