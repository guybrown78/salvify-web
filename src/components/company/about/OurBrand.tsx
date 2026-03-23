import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'


const OurBrand = () => {
	return (
		<section id="brand-experience" aria-labelledby="brand-experience">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Brand Experience" />
				<ContentH2 title="Built for Clarity, Care, and Confidence" />
				<ContentStack>
					<ContentP>
						Every part of Salvify reflects our belief that technology should feel calm, clear, and reliable. From intuitive navigation to accessible design, our platform removes friction and supports focus.
					</ContentP>
					<ContentP>
						Our tone mirrors our design: professional, empathetic, and precise. We speak with clarity and purpose because our users don’t have time for jargon when patient safety is at stake.
					</ContentP>
					<ContentP>
						Read our latest <ContentLink href='/insights'>insights and articles</ContentLink> on compliance, innovation, and digital healthcare design.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					UI animation concept: clean white interface with aqua brand highlights, displaying seamless transitions between modules.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default OurBrand