import React from 'react'

const RealTimeHero = () => {
	return (
		<div>
			RealTime Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Single dashboard card. Top row with three tiles: On-hand, Allocated, Available. Left column lists Site A, Kit 12, Vehicle 3. A simple line connects Store → Kit Bag → Patient.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							The tiles and the line of movement provide an immediate sense of stock position across locations.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							Small green tick badges on Kit 12 and Patient. Neutral placeholders for table rows.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							“Real time medical inventory tracking across sites, kits and patients for medicine management.”
						</li>
					</ul>
			</div>
		</div>
	)
}

export default RealTimeHero