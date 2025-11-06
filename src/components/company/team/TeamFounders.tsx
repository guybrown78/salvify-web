import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const TeamFounders = () => {
	return (
		<section id="founders" aria-labelledby="founders" className="py-24 sm:py-32">
			<Container>
				<Eyebrow title="Leadership" />
				<ContentH2 title="Meet the Founders" />
				<ContentStack>
					<ContentP>
						Salvify was created by two professionals who experienced the challenges of managing medicines in demanding environments. Craig and Guy brought together clinical knowledge and technical skill to build a platform that solves real problems for real teams.
					</ContentP>
					<ContentP>
						Learn more about <a href="#craig" className="text-brand-500 underline">Craig Rabbetts</a> and <a href="#guy" className="text-brand-500 underline">Guy Brown</a>.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Simple side-by-side portraits or line illustrations of both founders.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default TeamFounders