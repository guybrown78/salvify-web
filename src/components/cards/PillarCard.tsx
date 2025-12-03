import clsx from 'clsx'
import React from 'react'

type Props = {
	eyebrow: string
	title: string
	desc: string
	icon: React.ReactNode
	className?: string
}


const PillarCard = ({ eyebrow, title, desc, icon, className }: Props) => {
	return (
		 <div className={clsx("bg-surface-muted rounded-lg shadow-sm relative", className)}>
			<div className="relative flex h-full flex-col overflow-hidden p-8">
				<div className="infline-flex flex items-center justify-center bg-ink text-surface rounded-md size-16">{icon}</div>
				<div className="py-2">
					<p className="mt-2 text-xs/8 font-medium tracking-tight">{eyebrow}</p>
					<p className="mt-2 text-lg font-medium tracking-tight">{title}</p>
					<p className="mt-2 max-w-lg text-sm/6">{desc}</p>
				</div>
			</div>
		</div>
	)
}

export default PillarCard