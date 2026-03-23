import React from 'react'

const HeroH1 = ({title}: {title: string}) => {
	return (
		<h1 className="mt-2 font-brand font-extrabold text-brand-500 text-3xl tracking-tight text-pretty sm:mt-2 sm:text-5xl">
			{ title }
		</h1>
	)
}

export default HeroH1