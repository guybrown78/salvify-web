import React from 'react'
import { Container } from '../Container'
import CTA from '../content/CTA'

const HomepageBottomCTA = () => {
	return (
		<section
			id="call-to-action-main"
			aria-labelledby="call-to-action-main-title"
			className="overflow-hidden bg-ink py-6 lg:py-12"
		>
			<Container>	
				<CTA  
					title="Let’s Find the Right Fit for Your Team"
          text="Whether you are standardising workflows, tightening compliance or replacing manual stock processes, Salvify can support your organisation. Speak with our team to explore the best approach for you." />
			</Container>
		</section>
	)
}

export default HomepageBottomCTA