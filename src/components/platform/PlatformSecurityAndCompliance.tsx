import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const PlatformSecurityAndCompliance = () => {
	return (
		<section id="platform-security-compliance" aria-labelledby="platform-security-compliance" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Security & Compliance" />
				<ContentH3 title="Built from the ground up for healthcare governance." color='ink' weight='normal' />
				<ContentStack>
					<ContentP>
						UK-hosted and encrypted in transit and at rest, Salvify supports NHS DTAC and DCB0129/0160 alignment.
					</ContentP>
					<ContentP>
						Role-based access ensures data integrity, accountability, and peace of mind.
					</ContentP>
				</ContentStack>
			

				<VisualHolder>Badge-style row (UK Hosted · Encryption · Role-Based Access · Audit Trail).</VisualHolder>
			</Container>
		</section>
	)
}

export default PlatformSecurityAndCompliance