import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'


const Partnership = () => {
	return (
		<section id="partnerships" aria-labelledby="partnerships">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Recognition & Collaboration" />
				<ContentH2 title="Trusted Partnerships and Industry Recognition" />
				<ContentStack>
					<ContentP>
						Salvify collaborates with healthcare innovators, accelerators, and compliance specialists to keep our platform at the forefront of medicine management.
					</ContentP>
					<ContentP>
						From early partnerships with NHS innovators and maritime clients to regional programmes like The Forge and Tees Valley Labs, our growth is guided by collaboration and shared progress.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Row of logos: NHS, The Forge, Tees Valley Labs, Innovate UK, Maritime UK North East.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default Partnership