import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const Culture = () => {
	return (
		<section id="culture" aria-labelledby="culture" className="py-24 sm:py-32">
			<Container>
				<Eyebrow title="How We Work" />
				<ContentH2 title="A Team That Cares About the Details" />
				<ContentStack>
					<ContentP>
						The Salvify team believes good design starts with listening. Every update is shaped by conversations with medics, compliance officers, and operational leads. We build carefully, test thoroughly, and release only when it improves clarity and confidence for users.
					</ContentP>
					<ContentP>
						We stay close to our customers, working as partners rather than suppliers. This approach keeps Salvify practical, trusted, and relevant to the people who rely on it most.
					</ContentP>
				</ContentStack>

				<VisualHolder>
					A small collage showing design discussions, code reviews, and user testing moments.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default Culture