import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const PlatformInsightsAndData = () => {
	return (
		<section id="platform-insights" aria-labelledby="platform-insights" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Insights & Data" />
				<p>
					Real-time dashboards transform operational data into compliance-ready insights — helping teams make informed, defensible decisions.
				</p>
				<p>isual: chart or dashboard mockup</p>
			</Container>
		</section>
	)
}

export default PlatformInsightsAndData