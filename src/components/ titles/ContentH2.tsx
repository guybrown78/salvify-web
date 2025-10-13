import React from 'react'

const ContentH2 = ({title}: {title?: string}) => {
	return (
		<h2 className="my-2 font-brand font-extrabold text-brand-500 text-xl tracking-tight text-pretty sm:my-3 sm:text-3xl">
			{ title }
		</h2>
	)
}

export default ContentH2