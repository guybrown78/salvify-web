import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const PlatformCoreCapabilities = () => {
	return (
		<section id="platform-capabilities" aria-labelledby="platform-capabilities" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="Core Capabilities" />
				<ContentP>
					A focused set of modules designed to keep your organisation safe, compliant, and scalable:
				</ContentP>
				<ul className='list-disc mt-4 ml-8'>
					<li><strong>Medicine Management</strong> - real-time control of stock, batches, and expiries.</li>
					<li><strong>Audit & Reporting</strong> - one-click exports for inspection readiness.</li>
					<li><strong>Role-Based Access</strong> - secure permissions for every user type.</li>
					<li><strong>Integrations</strong> - barcode scanning, QR, and interoperability with leading ePRF tools.</li>
					<li><strong>Security & Compliance</strong> - UK-hosted, encrypted, and aligned with NHS standards.</li>
					<li><strong>Multi-site Control</strong> - unified visibility across fleets, depots, and clinical rooms.</li>
				</ul>
				<VisualHolder>A clean grid of feature cards with simple icons and short descriptions.</VisualHolder>
			</Container>
		</section>
	)
}

export default PlatformCoreCapabilities