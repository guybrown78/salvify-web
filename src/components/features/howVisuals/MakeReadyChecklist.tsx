import React from 'react'

const MakeReadyChecklist = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			MakeReadyChecklist <span className='font-extrabold'>TODO</span>
			<div className='mt-4'>
				<p>Scene: Vehicle card; two kit tiles (Airway Kit, Drug Bag); checklist panel.</p>
					<ul className='list-decimal'>
						<li>Checklist ticks step by step.</li>
						<li>Drug Bag shows missing item badge, then the item animates into place.</li>
						<li>Status switches to Ready with green tick.</li>
						<li>Vehicle shows Ready for service badge.</li>
						<li>One checklist tick clears to show variance.</li>
						<li>Return to ready state. Loop.</li>
					</ul>
			</div>
		</div>
	)
}

export default MakeReadyChecklist