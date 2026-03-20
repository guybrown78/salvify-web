import React from 'react'
import { Container } from '../Container'

const TrustCredibility = () => {
	return (
		<section  id="salvify-trust-and-credibility"
      aria-labelledby="salvify-trust-and-credibility-title"
      className="mt-8 overflow-hidden bg-surface py-16 lg:py-24">
				<Container>
			{/* <div className='bg-surface py-4 flex items-center justify-center space-x-4 text-ink/10'> */}
				<div className='flex items-center justify-center'>
					<p className='text-md text-center text-brand-500'>Trusted by ambulance services and medical providers across the UK</p>

				</div>
				<ul className='py-4 flex items-center justify-between space-x-4 text-ink/10'>
				<li className='flex-1 flex items-center justify-center border border-brand-500'>Enhanced Logo</li>
				<li className='flex-1 flex items-center justify-center border border-brand-500'>FSNE Logo</li>
				<li className='flex-1 flex items-center justify-center border border-brand-500'>Mesey Medical</li>
				{/* <li>AAA3 Ambulance</li>
				<li>Capital Air</li> */}
				<li className='flex-1 flex items-center justify-center border border-brand-500'>Spark Medical</li>
				</ul>
			{/* </div> */}
			</Container>
		</section>
	
		
	)
}

export default TrustCredibility


