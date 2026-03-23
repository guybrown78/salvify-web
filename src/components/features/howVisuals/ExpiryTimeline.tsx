import React from 'react'

const ExpiryTimeline = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			ExpiryTimeline <span className='font-extrabold'>TODO</span>

			
			<p>A horizontal timeline showing Today → Warning window → Expired, with badges for lots. Nodes animate as items move into “7 days”, “30 days” windows; recall flag pins a lot with a red marker and a side panel shows “Quarantine” CTA.</p>

			<div className='text-xs relative mx-auto w-full max-w-4x mt-4'>
				<p>Scene: item card with Batch and Expiry; small list of locations (Site A, Kit 12).</p>
					<ul className='list-decimal'>
						<li>Timeline advances towards “Expires”.</li>
						<li>Alert badge fades in: “Expires in 7 days”.</li>
						<li>Site A and Kit 12 highlight.</li>
						<li>	“Rotate” label appears next to Kit 12; expiry alert on Kit 12 clears.</li>
						<li>“Quarantine” tag appears on item card.</li>
						<li>	Timeline resets. Loop.</li>
					</ul>
			</div>
		</div>
	)
}

export default ExpiryTimeline