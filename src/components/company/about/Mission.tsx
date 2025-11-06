import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const Mission = () => {
	return (
		<section id="mission-vision" aria-labelledby="mission-vision">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Our Purpose" />
				<ContentH2 title="Mission & Vision" />
				<ContentStack>
					<ContentP>
						We equip medical professionals with straightforward digital systems that simplify compliance and medicine management. Salvify keeps healthcare teams focused on patient care, not admin. 
					</ContentP>
					<ContentP>
						We envision a healthcare system where medicine management is seamless, efficient, and fully digital, improving safety and reducing waste across every setting.
					</ContentP>
					<ContentP>
						Learn more about how the <ContentLink href="/product/platform">Salvify Platform</ContentLink> delivers this mission in practice.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Simple linear diagram showing “Mission → Innovation → Confidence in Care → Better Outcomes.”
				</VisualHolder>
			</Container>
		</section>
	)
}

export default Mission