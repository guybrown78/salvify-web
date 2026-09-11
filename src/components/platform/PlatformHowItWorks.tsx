import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import HomepageJourneyStepper from '../homepage/HomepageJourneyStepper'

const PlatformHowItWorks = () => {
	return (
		<section id="platform-how-it-works" aria-labelledby="platform-how-it-works" className="bg-surface/50">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="How It Works" />
				<ContentH3 title="From store to patient, fully traced" />
				<ContentP>
					Salvify connects every stage of medicines management, from stock entering your organisation through to clinical use. Each step is recorded, visible and accountable.
				</ContentP>

				<div className='mt-6 mb-10'>
					<HomepageJourneyStepper />
				</div>


			</Container>
		</section>
	)
}

export default PlatformHowItWorks