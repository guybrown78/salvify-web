import React from 'react'

const RBACHero = () => {
	return (
		<div>
			RBAC Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							  Left column with three role chips Admin, Clinician, Driver. Right column lists actions Adjust stock, View, Approve with permission icons.

						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							Lock icon beside Driver → Adjust stock and tick beside Clinician → Adjust stock. Approve carries a shield icon labelled Requires Admin.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							“Recorded” note next to permitted adjustments.

						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Role based access showing permitted and restricted stock actions.
						</li>
					</ul>
			</div>
		</div>
	)
}

export default RBACHero