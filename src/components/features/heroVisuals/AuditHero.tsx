import React from 'react'

const AuditHero = () => {
	return (
		<div>
			Audit Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Vertical timeline with three events Received, Moved, Used. A side detail card shows Who, When, Where fields.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							The central event is visually emphasised with a slightly larger card and bold title.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							Discreet PDF badge titled Report ready near the detail card.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Item level audit trail with export for compliance.
						</li>
					</ul>
			</div>
		</div>
	)
}

export default AuditHero