import { Container } from '@/components/Container'
import { ContentH3 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'

const FounderVideo = () => {
	return (
		<section id="founders-story" aria-labelledby="founders-story" className=" pb-12 sm:pb-16">
			<Container>
				
				<ContentH3 title="Founder's Story" color="ink" weight="normal" />
				<ContentStack>
					<ContentP>
						In this short video, Craig and Guy share the story behind Salvify and the problem they set out to solve.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					VIDEO
				</VisualHolder>
			</Container>
		</section>
	)
}

export default FounderVideo