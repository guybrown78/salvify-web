const insightArticle = {
	name:'insightArticle',

	title: 'Insight Articles',

	type: 'document',
	fields:[
		{
      name: 'title',
      title: 'Title',
      type: 'string',
    },
		{
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
		{
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
		{
      name: "overview",
      title: "Insight Overview",
      type: "blockContent",
			options: {
        maxLength: 400,
      },
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
		{
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
		{
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
			fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string'
			}]
    },
		{
      name: 'insightImage',
      title: 'Insight image',
      type: 'image',
      options: {
        hotspot: true,
      },
			fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string'
			}]
    },
		{
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
		{
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
		{
      name: 'industry',
      title: 'Industry',
      type: 'array',
      of: [{type: 'reference', to: {type: 'industry'}}],
    },
		{
      name: 'tags',
      title: 'Tag',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    },
		{
      name: 'resources',
      title: 'resources',
      type: 'array',
      of: [{type: 'reference', to: {type: 'resource'}}],
    },
		{
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }
	]
}
export default insightArticle