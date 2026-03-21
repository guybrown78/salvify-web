import React from 'react'
import { Container } from '../Container'
import CTA from '../content/CTA'

const HomepageBottomCTA = () => {
	return (
		<section
			id="call-to-action-main"
			aria-labelledby="call-to-action-main-title"
			className="overflow-hidden py-6 lg:py-12 bg-gradient-to-tr from-brand-500 to-ink via-100% to-50%"
		>
			<Container>	
				<CTA  
					title="Let’s Find the Right Fit for Your Team"
          text="Whether you are standardising workflows, tightening compliance or replacing manual stock processes, Salvify can support your organisation. Speak with our team to explore the best approach for you." 
					fadeBG={true}
				/>
			</Container>
		</section>
	)
}

export default HomepageBottomCTA