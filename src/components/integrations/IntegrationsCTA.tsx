import { Container } from '../Container';
import CTA from '../content/CTA';

const IntegrationsCTA = () => {
	return (
		<section id="integrations-cta" aria-labelledby="integrations-cta" className="py-16 lg:py-24">
					<Container>
						<CTA 
							title='Connect Salvify with your workflow' 
							text='Book a discovery call to explore how Salvify can integrate with your ePRF, EPR, or governance systems. We’ll help identify the quickest and most secure route — from simple CSV syncs to partner API connections and future FHIR alignment.' 
						/>
					</Container>
				</section>
	)
}

export default IntegrationsCTA