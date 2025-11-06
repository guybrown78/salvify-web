import React from 'react'

type Props = {
	title:string
}

const Eyebrow = ({ title }: Props) => {
	return (
		<p className="font-sans font-semibold text-xs sm:text-sm tracking-wide text-fg uppercase">
			{title}
		</p>
	)
}

export default Eyebrow