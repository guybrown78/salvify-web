import React from 'react'

const RoleAccessFlow = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			RoleAccessFlow <span className='font-extrabold'>TODO</span>
			<div className='mt-4'>
				<p>Scene: three role chips (Admin, Clinician, Driver) on left; action list on right (Adjust stock, View, Approve).</p>
					<ul className='list-decimal'>
						<li>Lines draw from roles to actions.</li>
						<li>Driver → Adjust stock shows lock icon.</li>
						<li>Clinician → Adjust stock shows tick; small “Recorded” stamp appears.</li>
						<li>Approve shows “Requires Admin” label; Admin line shows tick.</li>
						<li>Audit stamp appears with user and time.</li>
						<li>Lines fade; reset. Loop.</li>
					</ul>
			</div>
		</div>
	)
}

export default RoleAccessFlow