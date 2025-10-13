import React from 'react'

const ContentH3 = ({title}: {title?: string}) => {
	return (
		<h3 className="my-2 font-brand font-extrabold text-brand-500 text-xl tracking-tight text-pretty sm:my-2 sm:text-2xl">
			{ title }
		</h3>
	)
}

export default ContentH3

