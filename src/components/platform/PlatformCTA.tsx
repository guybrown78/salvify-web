import { Container } from '../Container';
import CTA from '../content/CTA';

const PlatformCTA = () => {
	return (
				<section id="platform-cta" aria-labelledby="platform-cta" className="py-16 lg:py-24 bg-gradient-to-b from-white to-surface">
					<Container>
						<CTA 
							title='Join medical teams across the UK who trust Salvify to manage medicines safely and compliantly.' 
							text='Discover how Salvify simplifies compliance and gives your teams complete visibility from store to patient, all within one secure platform.' 
						/>
					</Container>
				</section>
	)
}

export default PlatformCTA