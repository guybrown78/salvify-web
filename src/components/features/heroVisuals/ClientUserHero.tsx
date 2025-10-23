import React from 'react'

const ClientUserHero = () => {
	return (
		<div>
			ClientUser Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Three static columns: Clients, Sites, Users. User chips include small role badges.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							Client Alpha and Site A are highlighted to show hierarchy; the Users column shows a clear list structure.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							One user chip is greyed out with a Disabled tag; others display role pills.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Client, site and user structure with roles for secure medical inventory management.
						</li>
					</ul>
			</div>

		</div>
	)
}

export default ClientUserHero