import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const WhatThePlatformDoes = () => {
	return (
				<section id="platform-overview" aria-labelledby="platform-overview" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="What the Platform Does" />
				<p>
					Track, manage, and audit every medicine across your organisation. Real-time visibility, automated compliance, and smart workflows that reduce waste.
				</p>
				<p>Visual: 4-icon row “Track · Manage · Replenish · Report”</p>
			</Container>
		</section>
	)
}

export default WhatThePlatformDoes