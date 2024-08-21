const author = {
	name:'author',

	title: 'Authors',

	type: 'document',
	fields:[
		{
      name: 'name',
      title: 'Name',
      type: 'string',
    },
		{
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
		{
      name: 'role',
      title: 'Salvify Role',
      type: 'text',
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
      name: 'bio',
      title: 'Bio',
			type: 'array',
			of: [{ type: 'block' }]
    },
		{
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
		}
	],
	preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
export default author