import { industryIconOptions } from '../shared/industry-icons'
import { benefitIconOptions } from '../shared/benefit-icons'

const industrySolution = {
  name: 'industry-solution',
  title: 'Industry Solution',
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
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'industryRef',
      title: 'Linked Industry',
      type: 'reference',
      to: [{ type: 'industry' }],
      description:
        'Connect this page to its base Industry (used for Insights and filters).',
      validation: (Rule) => Rule.required(),
    },

    // Navigation
    {
      name: 'inMenu',
      title: 'Show in Industries menu',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'menuLabel', title: 'Menu label (optional)', type: 'string' },
    {
      name: 'menuIcon',
      title: 'Icon',
      type: 'string',
      options: { list: industryIconOptions }, // reuse the same list for visual consistency
    },
    {
      name: 'menuDescription',
      title: 'Menu description (max 15 words)',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((val) => {
          if (!val) return true
          const words = val.trim().split(/\s+/).filter(Boolean).length
          return words <= 15 || 'Please keep to 15 words or fewer'
        }),
    },
    {
      name: 'menuOrder',
      title: 'Menu order',
      type: 'number',
      initialValue: 100,
      validation: (Rule) => Rule.min(0).integer(),
    },

    // Hero
    {
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Industry',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title (H1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { name: 'heroSubTitle', title: 'Hero Subtitle / Tagline', type: 'string' },
    {
      name: 'overview',
      title: 'Intro / Overview paragraph',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(180),
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },

    // Regulatory / context
    {
      name: 'regulatoryContext',
      title: 'Regulatory frameworks / context',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. CQC, MHRA, DTAC, DCB0129/0160',
    },

    // Challenges
    {
      name: 'challengesTitle',
      title: 'Challenges section title',
      type: 'string',
      initialValue: 'Key Challenges',
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.max(200),
            },
          ],
          preview: { select: { title: 'title', subtitle: 'summary' } },
        },
      ],
      validation: (Rule) => Rule.min(3).max(5),
    },

    // How Salvify Helps
    {
      name: 'helpTitle',
      title: 'How Salvify Helps — title',
      type: 'string',
      initialValue: 'How Salvify Helps',
    },
    {
      name: 'helpIntro',
      title: 'How Salvify helps intro',
      type: 'string',
      description: 'Short lead-in above the help blocks',
    },
    {
      name: 'helpBlocks',
      title: 'Help blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.max(260),
            },
          ],
          preview: { select: { title: 'title', subtitle: 'summary' } },
        },
      ],
      validation: (Rule) => Rule.min(3).max(6),
    },
    // Benefits
    {
      name: 'benefitsIntro',
      title: 'Benefits intro (single line)',
      type: 'string',
      description: 'Short lead-in above the benefits grid',
    },
    {
      name: 'industryBenefits',
      title: 'Key benefits (from Benefit library)',
      type: 'array',
      of: [
        {
          name: 'industryBenefitItem',
          title: 'Benefit entry',
          type: 'object',
          fields: [
            {
              name: 'benefit',
              title: 'Benefit',
              type: 'reference',
              to: [{ type: 'benefit' }],
              description: 'Pick from the Benefit library',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'industryBenefitTitle',
              title: 'Industry-specific title line (optional)',
              type: 'string',
              description:
                'Optional extra line displayed with this benefit on this page',
            },
          ],
          preview: {
            select: { bt: 'benefit.title', it: 'industryBenefitTitle' },
            prepare: ({ bt, it }) => ({ title: it || bt }),
          },
        },
      ],
      validation: (Rule) => Rule.min(3).max(6),
    },

    // Feature Highlights (ordered selection)
    {
      name: 'featureHighlights',
      title: 'Feature Highlights (choose features)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
      validation: (Rule) => Rule.min(3).max(8),
    },


    // Operational Flow
    {
      name: 'flowTitle',
      title: 'Operational Flow title',
      type: 'string',
      initialValue: 'Typical Workflow',
    },
    {
      name: 'operationalSteps',
      title: 'Workflow steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepTitle', title: 'Step title', type: 'string' },
            { name: 'stepBody', title: 'Step body', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'stepTitle', subtitle: 'stepBody' } },
        },
      ],
    },

   // Impact Stats
	{
		name: 'impactStats',
		title: 'Impact statistics',
		type: 'array',
		of: [
			{
				type: 'object',
				fields: [
					{
						name: 'value',
						title: 'Value (e.g. “Improved visibility” or “XX% reduction”)',
						type: 'string',
					},
					{
						name: 'label',
						title: 'Label',
						type: 'string',
					},
					{
						name: 'note',
						title: 'Note (optional)',
						type: 'string',
					},
					{
						name: 'icon',
						title: 'Icon',
						type: 'string',
						options: { list: benefitIconOptions },
						description: 'Choose an icon to show with this stat',
					},
					{
						name: 'tone',
						title: 'Tone / colour',
						type: 'string',
						options: {
							list: [
								{ title: 'Success (green)', value: 'success' },  // good outcome
								{ title: 'Warning (amber)', value: 'warning' },  // something to watch
								{ title: 'Risk (red)', value: 'danger' },        // negative / risk
								{ title: 'Info (blue)', value: 'info' },         // neutral information
								{ title: 'Highlight (purple)', value: 'highlight' }, // special / focus
							],
							layout: 'radio',
						},
						initialValue: 'info',
					},
				],
				preview: {
					select: { title: 'value', subtitle: 'label', tone: 'tone' },
					prepare: ({ title, subtitle, tone }) => ({
						title: title || '(no value)',
						subtitle: tone ? `${tone} • ${subtitle || ''}` : subtitle,
					}),
				},
			},
		],
	},

    // Proof (testimonials + case studies)
    {
      name: 'testimonials',
      title: 'Testimonials (reused global)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      validation: (Rule) => Rule.max(6),
    },
    // {
    //   name: 'caseStudies',
    //   title: 'Case Studies (for this industry)',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    //   validation: Rule => Rule.max(6),
    // },

    // CTA
    {
      name: 'ctaTitle',
      title: 'CTA title (H2)',
      type: 'string',
      initialValue: 'Ready to simplify medicine management for your team?',
    },
    {
      name: 'ctaBody',
      title: 'CTA body',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(240),
    },

    // SEO (meta only)
    {
      name: 'noindex',
      title: 'Noindex this page',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'ogImage',
      title: 'Open Graph image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(160).warning('Keep to ~160 characters for best SERP display'),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated; keep short and focused.',
    },

    // Admin
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
  ],

  preview: {
    select: { title: 'title', subtitle: 'menuDescription' },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle || 'Industry',
    }),
  },
}

export default industrySolution
