import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const WhatThePlatformDoes = () => {
	return (
				<section id="platform-overview" aria-labelledby="platform-overview" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="What the Platform Does" />
				<ContentP>
					Track, manage, and audit every medicine across your organisation with confidence. Salvify provides real-time visibility, automated expiry alerts, and intuitive workflows that reduce waste and ensure compliance.
				</ContentP>
				<VisualHolder>
					A four-part icon row or animation labelled Track · Manage · Replenish · Report, showing a medicine pack being scanned, restocked, and logged automatically.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default WhatThePlatformDoes