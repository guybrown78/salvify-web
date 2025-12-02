import React from 'react'
import { Container } from '../Container'
import CTA from '../content/CTA'

const HomepageMidCTA = () => {
	return (
		<section
			id="call-to-action-platform"
			aria-labelledby="call-to-action-platform-title"
			className="overflow-hidden bg-ink py-6 lg:py-12"
		>
			<Container>	
				<CTA  
					title="Ready to See Salvify in Action?"
          text="Book a walkthrough with our team and see how Salvify helps healthcare organisations stay compliant, organised and ready for every shift." />
			</Container>
		</section>
	)
}

export default HomepageMidCTA