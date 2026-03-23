import Link from 'next/link'
import React from 'react'


interface Props {
	title: string
	href?: string
}

const FooterNavigationLink = ({title, href}: Props) => {
	return (
		<Link
			href={href ?? '#'}
			className="font-medium underline underline-offset-2 hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
		>
			{title}
		</Link>
	)
}

export default FooterNavigationLink