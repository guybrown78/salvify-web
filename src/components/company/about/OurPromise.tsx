import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'

const OurPromise = () => {
	return (
		<section id="values" aria-labelledby="values">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Our Principles" />
				<ContentH2 title="Our Promise & Core Values" />
				<ContentH3 title="Clarity. Compassion. Confidence in every detail." color="ink" weight="normal" />
				<ContentStack>
					<ContentP>
						We promise dependable, compliant, and intelligent solutions for every healthcare setting. Salvify is more than software; it is a partnership built on trust and shared standards of care.
					</ContentP>
					<ContentP>
						<strong>Efficiency</strong> – We save time, reduce errors, and keep focus on patient care.<br/>
						<strong>Compassion</strong> – We design with empathy, easing the pressures of frontline healthcare.<br/>
						<strong>Reliability</strong> – We build tools you can depend on in every critical moment.<br/>
						<strong>Clarity</strong> – We make complex compliance simple and transparent.<br/>
						<strong>Innovation</strong> – We continuously evolve to stay ahead of healthcare’s challenges.
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Icon grid: five value icons in a balanced layout (Efficiency ⚙️, Compassion ❤️, Reliability 🧭, Clarity 💡, Innovation 🚀).
				</VisualHolder>
			</Container>
		</section>
	)
}

export default OurPromise