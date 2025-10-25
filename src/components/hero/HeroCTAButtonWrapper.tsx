import React, { PropsWithChildren } from 'react'

const HeroCTAButtonWrapper = ({ children }:PropsWithChildren) => {
	return (
		<div className="mt-10 flex items-center gap-x-6">
			{ children }
		</div>
	)
}

export default HeroCTAButtonWrapper