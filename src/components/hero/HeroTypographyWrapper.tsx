import React, { PropsWithChildren } from 'react'

const HeroTypographyWrapper = ({ children }:PropsWithChildren) => {
	return (
			<div className="px-2 pt-4 pb-24 sm:pb-32 lg:col-span-6 lg:px-0 lg:pt-0 lg:pb-16">
					{children}
			</div>
	)
}

export default HeroTypographyWrapper