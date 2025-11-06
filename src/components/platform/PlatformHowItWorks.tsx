import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const PlatformHowItWorks = () => {
	return (
		<section id="platform-how-it-works" aria-labelledby="platform-how-it-works" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="How It Works" />
				<ContentP>
					Stock flows seamlessly from Central Store to Clinical Kit to Patient. Each transaction is timestamped, traceable, and linked to its batch, expiry, and responsible user. This provides full visibility across your medical supply chain, reducing errors and improving patient safety.
				</ContentP>
				<VisualHolder>Simple SVG diagram showing “Central Store → Clinical Kit → Patient”, with small tags for Batch + Expiry and Usage + Witness under each step.</VisualHolder>
			</Container>
		</section>
	)
}

export default PlatformHowItWorks