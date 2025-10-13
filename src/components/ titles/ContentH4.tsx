import React from 'react'

const ContentH4 = ({title}: {title?: string}) => {
	return (
		<h4 className="my-2 font-brand font-extrabold text-brand-500 text-xl tracking-tight text-pretty sm:my-2 sm:text-1xl">
			{ title }
		</h4>
	)
}

export default ContentH4