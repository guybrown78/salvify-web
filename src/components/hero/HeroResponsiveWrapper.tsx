import React, { PropsWithChildren } from 'react'

const HeroResponsiveWrapper = ({ children }:PropsWithChildren) => {
	return (
		<div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0">
			{ children }
		</div>
	)
}

export default HeroResponsiveWrapper