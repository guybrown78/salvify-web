import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'


const WhoWeHelp = () => {
	return (
		<section id="who-we-help" aria-labelledby="who-we-help">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Industries We Serve" />
				<ContentH2 title="Designed for Every Healthcare Environment" />
				<ContentStack>
					<ContentP>
						Salvify adapts to any healthcare operation, from rapid response teams to remote medics.
					</ContentP>
					<ContentP>
						• Private Ambulance Services<br/>
						• Event Medical Providers<br/>
						• Maritime and Offshore Teams<br/>
						• Clinical Practices and Healthcare Startups
					</ContentP>
					<ContentP>
						Wherever medicines move, Salvify keeps visibility and compliance aligned, ensuring care teams always have what they need, when they need it.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Four-card grid showing each sector with relevant imagery: ambulance, festival medical tent, offshore vessel, clinic.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default WhoWeHelp