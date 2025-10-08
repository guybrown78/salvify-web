import React from 'react'

const HeroH2 = ({subTitle}: {subTitle?: string}) => {
	if(!subTitle) return null
	return (
		<h2 className="mt-2 font-brand font-normal text-fg text-xl tracking-tight text-pretty sm:mt-3 sm:text-3xl">
			{ subTitle }
		</h2>
	)
}

export default HeroH2