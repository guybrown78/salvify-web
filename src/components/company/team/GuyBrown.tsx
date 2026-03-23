import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const GuyBrown = () => {
	return (
		<section id="guy" aria-labelledby="guy" className="py-24 sm:py-32">
			<Container>
				{/* <Eyebrow title="Founder Profile" /> */}
				<ContentH2 title="Guy Brown" />
				<ContentH3
					title="Building dependable digital tools for complex healthcare work"
					color="ink"
					weight="normal"
				/>

				<ContentStack>
					<ContentP>
						Guy is a software engineer with more than two decades of experience designing and delivering compliance-focused systems. His work spans healthcare, logistics, and education, always centred on reliability and clarity.
					</ContentP>
					<ContentP>
						At Salvify, Guy leads product architecture and development, translating real-world healthcare needs into straightforward, stable software. His attention to usability, accessibility, and data integrity helps make Salvify a trusted platform for medical professionals.
					</ContentP>
				</ContentStack>

				<VisualHolder>
					<div className="grid gap-8 lg:grid-cols-2 items-center">
						<div>
							Professional portrait of Guy in a development or design environment.
						</div>
						<div className="flex flex-wrap gap-4 justify-start items-center opacity-80">
							<img src="/logos/nhs.svg" alt="Worked with NHS projects" className="h-8" />
							<img src="/logos/innovate-uk.svg" alt="Innovate UK" className="h-8" />
							<img src="/logos/teesvalleylabs.svg" alt="Tees Valley Labs" className="h-8" />
							<img src="/logos/forge.svg" alt="The Forge Accelerator" className="h-8" />
						</div>
					</div>
				</VisualHolder>
			</Container>
		</section>
	)
}

export default GuyBrown