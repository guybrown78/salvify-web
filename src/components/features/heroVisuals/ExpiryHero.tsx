import React from 'react'

const ExpiryHero = () => {
	return (
		<div>
			Expiry Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Product card showing Batch and Expiry fields with a slim horizontal timeline labelled Today → Expires. A compact list of locations includes Site A and Kit 12.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							A prominent badge near the timeline reads Expires in 7 days. Batch code is visible on the card.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							Quarantine tag on the product card; subtle highlight on Site A and Kit 12.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Expiry alert and batch tracing for compliant medicine management.
						</li>
					</ul>
			</div>
		</div>
	)
}

export default ExpiryHero