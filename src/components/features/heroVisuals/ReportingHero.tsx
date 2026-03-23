import React from 'react'

const ReportingHero = () => {
	return (
		<div>
			Reporting Hero 
			<div className='mt-4 text-xs'>
				<p><span className='font-extrabold'>TODO</span></p>
					<ul className='list-none flex-col space-y-2'>
						<li className='bg-surface-muted p-4'>
							 <span className='font-extrabold mr-1'>Layout:</span>
							 Three metric tiles Usage, Expiring, Cost above a simple column chart. A small label reads 30 days.
						</li>
						<li className='bg-surface p-4'>
							<span className='font-extrabold mr-1'>Focus:</span>
							One bar in the chart is highlighted to indicate a key insight. Metrics match the chart context.
						</li>
						<li className='bg-accent p-4'>
							<span className='font-extrabold mr-1'>Accents:</span>
							Compact badge Report ready near the chart legend.
						</li>
						<li className='bg-surface/50 p-4'>
							<span className='font-extrabold mr-1'>Alt:</span>
							Healthcare stock control reporting and exports for medicine management.
						</li>
					</ul>
			</div>

		</div>
	)
}

export default ReportingHero