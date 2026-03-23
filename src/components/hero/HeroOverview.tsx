import React from 'react'

const HeroOverview =  ({overviewText}: {overviewText?: string}) => {
	if(!overviewText) return null
	return (
		<p className="font-sans font-normal text-md text-fg mt-4">{overviewText}</p>
	)
}

export default HeroOverview