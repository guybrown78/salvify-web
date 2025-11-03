import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const PlatformSecurityAndCompliance = () => {
	return (
		<section id="platform-security-compliance" aria-labelledby="platform-security-compliance" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Security & Compliance" />
				<p>
					UK-hosted with encryption in transit and at rest. Built with NHS DTAC and DCB0129/0160 in mind. Role-based access ensures security and accountability.
				</p>
				<p>Visual: checklist or badge row</p>
			</Container>
		</section>
	)
}

export default PlatformSecurityAndCompliance