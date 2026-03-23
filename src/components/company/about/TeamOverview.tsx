import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'


const TeamOverview = () => {
	return (
		<section id="team" aria-labelledby="team">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Our People" />
				<ContentH2 title="Meet the Team Behind the Platform" />
				<ContentStack>
					<ContentP>
						Salvify is led by people who understand both medicine and technology. Our founders combine frontline experience with software expertise to solve real-world challenges in healthcare.
					</ContentP>
					<ContentP>
						<strong>Craig Rabbetts</strong> – Co-founder & Director, a former offshore medic who saw first-hand the risks of expired stock.<br/>
						<strong>Guy Brown</strong> – Co-founder & Technical Director, a software engineer with two decades of experience building compliance-driven systems.
					</ContentP>
					<ContentP>
						Meet the full <ContentLink href="/company/the-salvify-team">Salvify Team</ContentLink> and discover the people shaping the future of medicine management.
					</ContentP>
					
				</ContentStack>
				<VisualHolder>
					Team portrait or clean photo grid linking to `/company/the-salvify-team`.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default TeamOverview