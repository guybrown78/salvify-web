import clsx from 'clsx'
import React from 'react'

const colorStyles = {
	brand:
		'text-brand-500',
	ink:
		'text-ink',
}

const weightStyles = {
	light:
		'text-light',
	normal:
		'font-normal',
	extrabold:
		'extrabold',
}
interface ContentHeadingProps {
	title: string
	color?: 'brand' | 'ink' 
	weight?: 'light' | 'normal' | 'extrabold' 
	className?: string
}


export const ContentH2 = ({
	title, 
	color = 'brand', 
	weight = 'extrabold',
	className,
	 ...props
}: ContentHeadingProps) => {
	return (
		<h2 className={clsx("my-2 font-brand text-2xl tracking-tight text-pretty sm:my-3 sm:text-3xl", colorStyles[color], weightStyles[weight], className)} {...props} >
			{ title }
		</h2>
	)
}

export const ContentH3 = ({
	title, 
	color = 'brand', 
	weight = 'extrabold',
	className,
	 ...props
}: ContentHeadingProps) => {
	return (
		<h3 className={clsx("my-2 font-brand text-xl tracking-tight text-pretty sm:my-2 sm:text-2xl", colorStyles[color], weightStyles[weight], className)} {...props} >
			{ title }
		</h3>
	)
}

export const ContentH4 = ({
	title, 
	color = 'brand', 
	weight = 'extrabold',
	className,
	 ...props
}: ContentHeadingProps) => {
	return (
		<h4 className={clsx("my-2 font-brand text-lg tracking-tight text-pretty sm:my-2 sm:text-xl", colorStyles[color], weightStyles[weight], className)} {...props} >
			{ title }
		</h4>
	)
}