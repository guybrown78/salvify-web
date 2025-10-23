import React from 'react'

const MakeReadyHero = () => {
	return (
		<div>
			MakeReady Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Vehicle header card above two kit tiles: Airway Kit and Drug Bag. A right-hand checklist stack shows preparation steps.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							The checklist appears completed and the kits display full status.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							Large Ready badge and a Ready for service status pill on the vehicle card.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Standardised MakeReady checklist showing kits ready for service.
						</li>
					</ul>
			</div>
		</div>
	)
}

export default MakeReadyHero