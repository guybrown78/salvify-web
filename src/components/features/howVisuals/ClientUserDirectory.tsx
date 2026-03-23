import React from 'react'

const ClientUserDirectory = () => {
	return (
		<div className='text-xs relative mx-auto w-full max-w-4x'>
			ClientUserDirectory <span className='font-extrabold'>TODO</span>
			<div className='mt-4'>
				<p>Scene: three columns: Clients → Sites → Users; role badges on users.</p>
					<ul className='list-decimal'>
						<li>Focus shifts to Client Alpha; Sites column filters to Site A, Site B.</li>
						<li>Focus shifts to Site A; Users column filters to its users.</li>
						<li>A new user chip fades in with a role badge.</li>
						<li>One user chip greys out to show disabled state.</li>
						<li>Columns return to full view. Loop.</li>
					</ul>
			</div>
		</div>
	)
}

export default ClientUserDirectory