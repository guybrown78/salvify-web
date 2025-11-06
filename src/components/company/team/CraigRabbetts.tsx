import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'

const CraigRabbetts = () => {
	return (
		<section id="craig" aria-labelledby="craig" className="py-24 sm:py-32">
			<Container>
				{/* <Eyebrow title="Founder Profile" /> */}
				<ContentH2 title="Craig Rabbetts" />
				<ContentH3
					title="Clinical experience that sparked a safer way to manage medicines"
					color="ink"
					weight="normal"
				/>

				<ContentStack>
					<ContentP>
						Craig is a registered medical professional with years of experience working in offshore and remote environments. While on duty at sea, he discovered expired medicines and inconsistent stock control that put patient safety at risk. That moment led directly to the idea that became Salvify.
					</ContentP>
					<ContentP>
						Today Craig leads Salvify’s clinical strategy, helping ensure the platform reflects real healthcare practice. His focus is on governance, workflow clarity, and supporting customers who are moving from paper-based systems to simple digital processes.
					</ContentP>
				</ContentStack>

				<VisualHolder>
					<div className="grid gap-8 lg:grid-cols-2 items-center">
						<div>
							Professional portrait of Craig in a clinical or maritime context.
						</div>
						<div className="flex flex-wrap gap-4 justify-start items-center opacity-80">
							<img src="/logos/nhs.svg" alt="Worked with NHS" className="h-8" />
							<img src="/logos/maritime-uk.svg" alt="Maritime UK" className="h-8" />
							<img src="/logos/forge.svg" alt="The Forge Accelerator" className="h-8" />
							<img src="/logos/teespilot.svg" alt="Tees Valley Labs" className="h-8" />
						</div>
					</div>
				</VisualHolder>
			</Container>
		</section>
	)
}

export default CraigRabbetts