import AboutCTA from '@/components/company/about/AboutCTA'
import AboutHero from '@/components/company/about/AboutHero'
import Mission from '@/components/company/about/Mission'
import OurBrand from '@/components/company/about/OurBrand'
import OurImpact from '@/components/company/about/OurImpact'
import OurPromise from '@/components/company/about/OurPromise'
import OurStory from '@/components/company/about/OurStory'
import Partnership from '@/components/company/about/Partnership'
import TeamOverview from '@/components/company/about/TeamOverview'
import WhoWeHelp from '@/components/company/about/WhoWeHelp'
import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'About Salvify | Confidence in Care, Powered by Digital Precision',
  description:
    'Learn about Salvify, the UK healthcare technology company transforming medicine management and compliance for medical teams. Discover our story, mission, and how we help healthcare providers stay organised, compliant, and ready for anything.',
  keywords:
    'About Salvify, medicine management software, medical compliance platform, healthcare technology UK, medical inventory management, digital healthcare tools, compliance software for medical teams, medical stock tracking, healthcare innovation UK',
}

const AboutSalvifyPage = () => {
	return (
		<main role="main">
			<Script
				id="structured-data-about"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Salvify Medicine Management Platform',
						url: 'https://www.salvify.co.uk',
						logo: 'https://www.salvify.co.uk/logo.svg',
						description:
							'Salvify is a UK healthcare technology company specialising in medicine management and compliance software for medical teams.',
						foundingDate: '2023',
						founder: [
							{ '@type': 'Person', name: 'Craig Rabbetts' },
							{ '@type': 'Person', name: 'Guy Brown' },
						],
						sameAs: [
							'https://www.linkedin.com/company/salvify',
							'https://twitter.com/salvify',
						],
						contactPoint: {
							'@type': 'ContactPoint',
							contactType: 'Sales',
							email: 'hello@salvify.co.uk',
							url: 'https://www.salvify.co.uk/contact',
						},
					}),
				}}
			/>

			<AboutHero />
			<Mission />
			<OurStory />
			<OurPromise />
			<WhoWeHelp />
			<OurImpact />
			<OurBrand />
			<TeamOverview />
			<Partnership />
			<AboutCTA />
		</main>

	)
}

export default AboutSalvifyPage