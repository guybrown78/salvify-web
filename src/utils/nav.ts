import { HiOutlineSquares2X2 } from 'react-icons/hi2'

import { getFeaturesMenu, getLatestInsights } from '@/sanity/sanity-utils' // adjust path

import { NavItem } from './nav-types'


export async function buildSections(): Promise<NavItem[]> {
  const features = await getFeaturesMenu()
  const latestInsights = await getLatestInsights()

  const featureChildren: NavItem[] = features.map((f) => ({
    name: f.label,
    href: `/product/features/${f.slug}`,
    description: f.menuDescription,
    icon: f.menuIcon,
  }))

  const latestInsightChildren: NavItem[] = latestInsights.map((insight) => ({
    name: insight.title,
    href: `/insights/${insight.slug}`,
    image: insight.coverImage,
  }))

  return [
    {
      name: 'Product',
      children: [
        {
          name: 'Platform',
          description:
            'See how Salvify unifies compliance, control, and clarity in one place.',
          href: '/product/platform',
          icon: 'HiOutlineCube',
        },
        {
          name: 'Integrations',
          description:
            'See how Salvify connects with tools and standards your team relies on.',
          href: '/product/integrations',
          icon: 'HiOutlinePuzzlePiece',
        },
        {
          name: 'Features',
          description:
            'Explore tools that simplify medical inventory, expiry tracking, and audits.',
          icon: 'HiOutlineSquares2X2',
          variant: 'block',
          children: featureChildren.length
            ? featureChildren
            : [
                {
                  name: 'All features',
                  href: '/product/features',
                  icon: 'HiOutlineSquares2X2',
                },
              ],
        },
      ],
    },
    {
      name: 'Solutions',
      children: [
        {
          name: 'Industries',
          description: '',
          variant: 'block',
          children: [
            {
              name: 'Industries',
              description:
                'Learn how Salvify supports healthcare providers across diverse sectors.',
              href: '/solutions/industries',
              icon: 'HiOutlineBuildingOffice2',
            },
          ],
        },
        {
          name: 'Use Cases',
          description: '',
          variant: 'block',
          children: [
            {
              name: 'Use Cases',
              description:
                'Discover practical ways Salvify improves inventory and compliance daily.',
              href: '/solutions/use-cases',
              icon: 'HiOutlineDocumentCheck',
            },
          ],
        },
      ],
    },
		  {
      name: 'Company',
      children: [
        {
          name: 'About',
          description:
            'Learn Salvify’s story, mission, and commitment to confidence in care.',
          href: '/about-salvify',
          icon: 'HiOutlineInformationCircle',
        },
        {
          name: 'The Team',
          description:
            'Meet our people, blending medical knowledge with technical expertise.',
          href: '/company/the-salvify-team',
          icon: 'HiOutlineUserGroup',
        },
        {
          name: 'Press & News',
          description:
            'See Salvify’s latest announcements, media coverage, and industry recognition.',
          href: '/company/press',
          icon: 'HiOutlineNewspaper',
        },
        {
          name: 'Contact Sales',
          description:
            'Speak with us about how Salvify can support your operations.',
          href: '/contact',
          icon: 'HiOutlineChatBubbleLeftRight',
        },
      ],
    },
    {
      name: 'Resources',
      children: [
        {
          name: 'Insights',
          description:
            'Read expert articles and guidance on medical inventory and compliance.',
          href: '/insights',
          icon: 'HiOutlineLightBulb',
        },
        {
          name: 'Case Studies',
          description:
            'See how real teams use Salvify to save time and stay compliant.',
          href: '/resources/case-studies',
          icon: 'HiOutlineDocumentText',
        },
				 {
          name: 'FAQs',
					description: 'Find quick answers to common questions about Salvify.',
					href: '/faqs',
					icon: 'HiOutlineQuestionMarkCircle',
        },
        {
          name: 'Latest Insights',
          description: '',
          variant: 'footer',
          children: latestInsightChildren,
        },
      ],
    },
  
  ]
}
