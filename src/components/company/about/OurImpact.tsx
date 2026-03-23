import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentLink, ContentP, ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Link from 'next/link'


const OurImpact = () => {
	return (
		<section id="innovation-impact" aria-labelledby="innovation-impact">
			<Container className="py-24 sm:py-32">
				<Eyebrow title="Our Edge" />
				<ContentH2 title="Innovation That Makes a Measurable Impact" />
				<ContentH3 title="Simplifying compliance. Reducing waste. Empowering care teams." color="ink" weight="normal" />
				<ContentStack>
					<ContentP>
						Salvify combines automation, compliance insights, and real-time data to make medical operations smoother and safer. Every feature is built to make day-to-day work easier and safer.
					</ContentP>
					<ContentP>
						<strong>Automated Compliance Alerts</strong> – Stay ahead of expiry and audit cycles.<br/>
						<strong>Scalable for Any Organisation</strong> – From single vehicles to global fleets.<br/>
						<strong>Data-Driven Insights</strong> – See trends, risks, and performance instantly.<br/>
						<strong>Waste Reduction</strong> – Track stock movement to minimise loss and save cost.
					</ContentP>
					<ContentP>
						See how Salvify delivers this innovation in our <ContentLink href='/solutions/use-cases/medicine-management'>Medicine Management</ContentLink> Use Case
					</ContentP>
				</ContentStack>
				<VisualHolder>
					Dashboard visual showing real-time compliance status, expiring stock, and savings metrics.
				</VisualHolder>
			</Container>
		</section>
	)
}

export default OurImpact