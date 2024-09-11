const resource = {
	name:'resource',

	title: 'Resource',

	type: 'document',
	fields:[
		{
			name: 'domain',
      title: 'Domain',
      type: 'string',
		},
		{
      name: 'title',
      title: 'Title',
      type: 'string',
    },
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
		{
      name: 'description',
      title: 'Description',
      type: 'text',
    }
		
	]
}
export default resource