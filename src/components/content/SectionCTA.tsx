import Link from 'next/link';
import React from 'react'

type LinkProps = {
	href:string;
	label:string;
}
type Props = {
	intro:string;
	links:LinkProps[];
}

const SectionCTA = ({ intro, links }: Props) => {
	return (
		<div className="flex flex-col py-6 sm:py-12">
			<div className='w-full border-t border-surface-muted pb-4 sm:pb-6' />
			<p className="text-md">{ intro }</p>
			<ul>
				{
					links.map(link => (
						<li key={link.label}>
							<Link href={link.href} className='text-brand-500 hover:text-brand-700 underline'>
								{link.label}
							</Link>
						</li>
					))
				}
			</ul>
		
		</div>
	)
}

export default SectionCTA