import { Container } from '@/components/Container'
import CTA from '@/components/content/CTA'

const TeamCTA = () => {
	return (
		<section id="team-cta" aria-labelledby="team-cta" className="py-16 lg:py-24">
			<Container>
				<CTA
					title="Work With Us"
					text="Interested in collaborating, partnering, or joining the team? Get in touch and help shape the future of medicine management."
				/>
			</Container>
		</section>
	)
}

export default TeamCTA