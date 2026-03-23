import React from 'react'
import { Container } from '../Container'
import CTA from '../content/CTA'

const HomepageMidCTA = () => {
	return (
		<section
			id="call-to-action-platform"
			aria-labelledby="call-to-action-platform-title"
			className="overflow-hidden py-6 lg:py-12 bg-gradient-to-tr from-brand-500 to-ink via-100% to-50%"
		>
			<Container>	
				<CTA  
					title="Ready to See Salvify in Action?"
          text="Book a walkthrough with our team and see how Salvify helps healthcare organisations stay compliant, organised and ready for every shift." 
					fadeBG={true}
				/>
			</Container>
		</section>
	)
}

export default HomepageMidCTA