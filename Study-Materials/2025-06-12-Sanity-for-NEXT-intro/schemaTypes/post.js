export default {
  name: 'post',
  type: 'document',
  title: 'post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
