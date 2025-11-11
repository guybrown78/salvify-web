const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',

  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'message',
      title: 'Testimonial message',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(500),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'companyUrl',
      title: 'Company web address',
      type: 'url',
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }],
      description: 'Tag this testimonial to one or more industries (optional).',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Unnamed testimonial',
        subtitle: subtitle || '',
      }
    },
  },
}

export default testimonial