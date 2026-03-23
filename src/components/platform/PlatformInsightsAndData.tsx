import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const PlatformInsightsAndData = () => {
	return (
		<section id="platform-insights" aria-labelledby="platform-insights" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Insights & Data" />
				<ContentH3 title="Real-time dashboards turn operational activity into actionable insights." color='ink' weight='normal' />
				<ContentP>
					Track expiry risk, usage trends, and stock movements instantly, and export audit evidence with confidence.
				</ContentP>

				<VisualHolder>The main “Operational Dashboard” view highlighting an “Expiring in 30 days” alert, “Controlled Movements Today” counter, and an “Export Audit” button.</VisualHolder>

			</Container>
		</section>
	)
}

export default PlatformInsightsAndData