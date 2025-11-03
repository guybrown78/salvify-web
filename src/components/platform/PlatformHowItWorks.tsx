import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const PlatformHowItWorks = () => {
	return (
		<section id="platform-how-it-works" aria-labelledby="platform-how-it-works" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="How It Works" />
				<p>
					Stock moves from Central Store to Clinical Kits and on to the Patient — every transaction logged for audit traceability and compliance confidence.
				</p>
				<p>Visual: SVG flow “Central Store → Clinical Kit → Patient”</p>
			</Container>
		</section>
	)
}

export default PlatformHowItWorks