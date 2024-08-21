const policyPage = {
	name:'policyPage',

	title: 'Policy Pages',

	type: 'document',

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slugs',
			type: 'slug',
			options: { 
				source: 'title',
				maxLength: 96,
			}
		},
		{
			name: 'order',
			title: 'Order',
			type: 'number'
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }]
		},
	],
	orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      rating: 'rating'
    },
    // prepare(policyPage, viewOptions = {}) {
    //   const title = viewOptions.ordering && viewOptions.ordering.name === 'rating'
    //   ? `${policyPage.title} (${policyPage.rating})`
    //   : policyPage.title

    //   return {title: title}
    // }
  }
}

export default policyPage