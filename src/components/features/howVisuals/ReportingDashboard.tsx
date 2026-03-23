import React from 'react'

const ReportingDashboard = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			ReportingDashboard <span className='font-extrabold'>TODO</span>
			<div className='mt-4'>
				<p>Scene: dashboard tiles (On-hand, Expiring, Usage); small column chart; timeframe label (30 days).</p>
					<ul className='list-decimal'>
						<li>Timeframe label changes to 90 days; chart re-animates.</li>
						<li>Data labels update on tiles.</li>
						<li>Export badge appears: “Report ready”.</li>
						<li>Timeframe returns to 30 days. Loop.</li>
						<li></li>
						<li></li>
					</ul>
			</div>
		</div>
	)
}

export default ReportingDashboard