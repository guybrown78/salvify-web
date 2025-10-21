import { featureIconOptions } from "../shared/feature-icons";

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
					name: 'menuIcon',
					title: 'Icon (Heroicons v2)',
					type: 'string',
					options: { list: featureIconOptions },
				},
{
  name: 'menuDescription',
  title: 'Menu description (max 15 words)',
  type: 'string',
  description: 'Short blurb shown in the menu panel',
  validation: Rule =>
    Rule.custom((val) => {
      if (!val) return true;
      const words = val.trim().split(/\s+/).filter(Boolean).length;
      return words <= 15 || 'Please keep this to 15 words or fewer';
    }),
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
		{
			name: 'heroEyebrow',
			title: 'Hero Eyebrow / Context label',
			type: 'string',
			description: 'Small label above the H1. e.g. “Platform feature”.',
			initialValue: 'Platform feature',
			validation: Rule => Rule.max(50),
		},
    { name: 'heroTitle', title: 'Hero Title (H1)', type: 'string', validation: Rule => Rule.required() },
    { name: 'heroSubTitle', title: 'Hero Subtitle / Tagline', type: 'string' },
    {
      name: 'overview',
      title: 'Feature Overview',
      type: 'text',
			rows: 3,
      options: { maxLength: 150 },
			validation: Rule => Rule.max(150),
    },
    {
  name: 'heroVisual',
		title: 'Hero visual',
		type: 'string',
		options: {
			list: [
				{ title: 'Image', value: 'image' },
				{ title: 'SVG', value: 'svg' },
				{ title: 'Component', value: 'component' },
			],
			layout: 'radio',
		},
		initialValue: 'image',
	},
	{
		name: 'heroComponentKey',
		title: 'Hero component key',
		type: 'string',
		description: 'Key your frontend maps to a React component.',
		hidden: ({document}) => document?.heroVisual !== 'component',
	},
	{
		name: 'heroSvg',
		title: 'Hero SVG',
		type: 'file',
		options: { accept: 'image/svg+xml' },
		fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		hidden: ({document}) => document?.heroVisual !== 'svg',
	},
	{
		name: 'heroImage',
		title: 'Hero image',
		type: 'image',
		options: { hotspot: true },
		fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		hidden: ({document}) => document?.heroVisual !== 'image',
	},


		// Problem Context
		{
			name: 'problemEyebrow',
			title: 'Problem eyebrow / label',
			type: 'string',
			description: 'Small label above the section title.',
			initialValue: 'Why this matters',
			validation: Rule => Rule.max(40),
		},
		{ name: 'problemTitle', title: 'Problem title', type: 'string' },
		{
			name: 'problemIntro',
			title: 'Problem intro (1–2 sentences)',
			type: 'text',
			rows: 3,
			validation: Rule => Rule.max(280),
		},
		{
			name: 'problemPoints',
			title: 'Problem bullet points',
			type: 'array',
			of: [{ type: 'string' }],
			validation: Rule => Rule.max(5),
		},
		{
			name: 'problemImage',
			title: 'Problem image (optional)',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		},
		{
			name: 'problemComponentKey',
			title: 'Problem diagram component key (optional)',
			type: 'string',
			description: 'If set, the template renders a React component instead of the image.',
		},

    // How it works
		{ name: 'howItWorks', title: 'How it works', type: 'blockContent' },
		{
			name: 'howVisual',
			title: 'How visual',
			type: 'string',
			options: { list: [
				{ title: 'Image', value: 'image' },
				{ title: 'Component', value: 'component' },
			], layout: 'radio' },
			initialValue: 'image',
		},
		{
			name: 'howComponentKey',
			title: 'Component key (optional)',
			type: 'string',
			description: 'Key your frontend maps to a React component.',
			hidden: ({document}) => document?.howVisual !== 'component',
		},
		{
			name: 'howImage',
			title: 'How it works image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
			hidden: ({document}) => document?.howVisual !== 'image',
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

		// CTO
		{
  		name: 'ctaTitle',
			title: 'CTA title (H2)',
			type: 'string',
			description: 'Shown after the Benefits section',
			initialValue: 'Ready to modernise your medicine management?',
		},
		{
			name: 'ctaBody',
			title: 'CTA body',
			type: 'text',
			rows: 3,
			validation: Rule => Rule.max(240),
		},

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
