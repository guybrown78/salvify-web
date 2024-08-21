const category = {
	name:'category',

	title: 'Categories',

	type: 'document',
	fields:[
		{
      name: 'title',
      title: 'Title',
      type: 'string',
    },
		{
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
		{
      name: 'description',
      title: 'Description',
			type: 'array',
			of: [{ type: 'block' }]
    },
		{
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    },
		{
      name: "keywords",
      title: "Keywords",
      type: "string",
    },
	]
}
export default category