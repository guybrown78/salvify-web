import React from 'react'

const HeroEyebrow = ({title}: {title: string}) => {
	return (
		<p className="font-sans font-semibold text-xs sm:text-sm tracking-wide text-fg uppercase">
			{title}
		</p>
	)
}

export default HeroEyebrow