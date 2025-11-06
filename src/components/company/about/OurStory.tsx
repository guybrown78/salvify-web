import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const OurStory = () => {
	return (
		<section id="our-story" aria-labelledby="our-story">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Our Story" />
				<ContentH2 title="Born from the Frontline of Care" />
				<ContentH3 title="A real-world problem turned into a mission to make healthcare safer." color="ink" weight="normal" />
				<ContentStack>
					<ContentP>
						Salvify began when Craig, a remote medic working on an offshore rig, discovered a stock of expired medicines that posed a serious risk to patient safety. Determined to fix the problem, he partnered with Guy, a software engineer with a background in compliance systems.
					</ContentP>
					<ContentP>
						Together they built Salvify: a simple, smart, and scalable solution to ensure no medic would ever face the same issue again. What started as a safety fix has evolved into a mission to help every healthcare team manage medicines with confidence and clarity. Discover how this journey shaped our <ContentLink href="/product/features">core features</ContentLink>.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Split layout: photo or illustration of offshore medic + developer working on a laptop, connected by a line graphic showing “Problem → Innovation → Confidence.”
				</VisualHolder>
			</Container>
		</section>
	)
}

export default OurStory