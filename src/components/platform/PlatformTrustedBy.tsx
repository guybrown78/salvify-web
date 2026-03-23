import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const PlatformTrustedBy = () => {
	return (
		<section id="platform-trust" aria-labelledby="platform-trust" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Trusted by Healthcare Teams" />
				<ContentStack>
					<ContentP>
						Trusted by private ambulance, event, and maritime medical services across the UK.
					</ContentP>
					<ContentP>
						Salvify delivers consistency, compliance, and clarity for every team working under pressure.
					</ContentP>
				</ContentStack>
				
				<VisualHolder>Client logo row or compact testimonial carousel with 1–2 short quotes.</VisualHolder>
			</Container>
		</section>
	)
}

export default PlatformTrustedBy