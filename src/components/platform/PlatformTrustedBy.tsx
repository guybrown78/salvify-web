import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const PlatformTrustedBy = () => {
	return (
		<section id="platform-trust" aria-labelledby="platform-trust" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Trusted by Healthcare Teams" />
				<p>
					Proven across ambulance, event, and maritime settings — delivering confidence in care every day.
				</p>
				<p>Visual: logo row or testimonial carousel</p>
			</Container>
		</section>
	)
}

export default PlatformTrustedBy