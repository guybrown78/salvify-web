const feature = {
  name: 'feature',
  title: 'Features',
  type: 'document',

	orderings: [
  {
			title: 'Menu order (asc)',
			name: 'menuOrderAsc',
			by: [
				{ field: 'menuOrder', direction: 'asc' },
				{ field: 'title', direction: 'asc' },
			],
		},
	],

  fields: [
    // Page + URL
    { name: 'title', title: 'Page Title', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },

		// Navigation / menu
		{
			name: 'inMenu',
			title: 'Show in Features menu',
			type: 'boolean',
			initialValue: true,
		},
		{
			name: 'menuLabel',
			title: 'Menu label (optional)',
			type: 'string',
			description: 'Defaults to Page Title if empty',
		},
		{
			name: 'menuOrder',
			title: 'Menu order',
			type: 'number',
			initialValue: 100,
			validation: Rule => Rule.min(0).integer(),
		},

    // Visual template (layout only)
    {
      name: 'template',
      title: 'Template',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Template', value: 'standard' },
          { title: 'Accent Template', value: 'accent' },
          { title: 'Premium Template', value: 'premium' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
    },

    // Hero / intro
    { name: 'heroTitle', title: 'Hero Title (H1)', type: 'string', validation: Rule => Rule.required() },
    { name: 'heroSubTitle', title: 'Hero Subtitle / Tagline', type: 'string' },
    {
      name: 'overview',
      title: 'Feature Overview',
      type: 'blockContent',
      options: { maxLength: 400 },
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },

    // How it works
    { name: 'howItWorks', title: 'How it works', type: 'blockContent' },
    {
      name: 'howImage',
      title: 'How it works image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },

    // Benefits
    {
      name: 'benefitsIntro',
      title: 'Benefits intro (single line)',
      type: 'string',
      description: 'Short lead-in shown above the benefits grid',
    },
    {
      name: 'benefits',
      title: 'Key benefits',
      type: 'array',
      of: [
        {
          name: 'featureBenefitItem',
          title: 'Benefit entry',
          type: 'object',
          fields: [
            {
              name: 'benefit',
              title: 'Benefit',
              type: 'reference',
              to: [{ type: 'benefit' }],
              description: 'Pick from the Benefit library',
              validation: Rule => Rule.required(),
            },
            {
              name: 'featureBenefitTitle',
              title: 'Feature-specific title line',
              type: 'string',
              description: 'Additional line shown with this benefit on this feature page',
            },
          ],
          preview: {
            select: { ft: 'featureBenefitTitle', bt: 'benefit.title' },
            prepare: ({ ft, bt }) => ({ title: ft || '(no feature title)', subtitle: bt }),
          },
        },
      ],
      validation: Rule => Rule.min(3).max(4),
    },

    // Optional long-form
    { name: 'body', title: 'Body', type: 'blockContent' },

    // SEO
    { name: 'metaDescription', title: 'Meta Description', type: 'text' },
    { name: 'keywords', title: 'Keywords', type: 'string' },

    // Admin
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },

    // Legacy (kept hidden for safety)
    { name: 'subTitle', title: 'Subtitle', type: 'string', hidden: true },
  ],
};

export default feature;
