import clsx from 'clsx'
import React from 'react'


const colorStyles = {
	brand:
		'text-brand-500',
	ink:
		'text-ink',
	white:
		'text-white',
	surface:
		'text-surface',
}

type Props = {
	title:string
	color?: 'brand' | 'ink' | 'white' | 'surface'
}

const Eyebrow = ({ title, color = 'ink' }: Props) => {
	return (
		<p className={clsx("font-sans font-semibold text-xs sm:text-sm tracking-wide uppercase", colorStyles[color])}>
			{title}
		</p>
	)
}

export default Eyebrow