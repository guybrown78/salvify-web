import React from 'react'

const AuditTrailTimeline = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			AuditTrailTimeline  <span className='font-extrabold'>TODO</span>
			<div className='mt-4'>
				<p>Scene: vertical timeline for one item (Received → Moved → Used); filter chips (Site, User, Batch).</p>
					<ul className='list-decimal'>
						<li>Batch chip highlights; non-matching events fade.</li>
						<li>One event expands briefly to show who, when, where.</li>
						<li>Export badge appears: “PDF generated”.</li>
						<li>Filters clear; full timeline returns. Loop.</li>
					</ul>
			</div>
		</div>
	)
}

export default AuditTrailTimeline