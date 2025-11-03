import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'

const PlatformCoreCapabilities = () => {
	return (
		<section id="platform-capabilities" aria-labelledby="platform-capabilities" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Core Capabilities" />
				<p>
					A focused set of modules that keep your operations safe, compliant, and scalable.
				</p>
				<p>Visual: grid linking to feature pages</p>
			</Container>
		</section>
	)
}

export default PlatformCoreCapabilities