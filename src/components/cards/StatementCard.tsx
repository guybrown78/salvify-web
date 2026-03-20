import clsx from 'clsx';
import React from 'react'

export type StatementColor = 'brand-300' | 'brand-500' | 'brand-700' | 'accent'

export interface StatementType {
	title: string;
	color: StatementColor;
	icon: React.ReactNode,
}

const toneClasses: { grad: Record<StatementColor, string> } = {
	grad: {
		'brand-300': 'to-brand-300',
		'brand-500': 'to-brand-500',
		'brand-700': 'to-brand-700',
		'accent': 'from-accent',
	},

}




const StatementCard = ({color, title, icon}: StatementType) => {
	return (
			<div
					className={clsx("inline-block px-2 py-1 rounded-md shadow-sm","bg-gradient-to-r from-surface", toneClasses.grad[color])}
				>
					<div className='flex items-center space-x-2'>
<div className='relative bg-brand-300 rounded-full border-2 border-white h-7 w-7 flex justify-center items-center'>

					<div className="relative flex justify-center items-center">
						{icon}
					</div>
</div>
					<span className="text-xs font-semibold text-ink">{title}</span>
					</div>
					
					{/* <dt className="flex items-center md:items-start md:flex-col space-x-2 md:space-x-0 space-y-0 md:space-y-2">
						<div className={clsx("flex justify-center align-middle p-0 rounded-lg", toneClasses.color[tone])}>
							{icon}
						</div>
						<div className="text-sm font-normal text-fg">{title}</div>
					</dt>
					<dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
						<div className="flex font-brand items-baseline text-2xl font-extrabold text-fg">
							{stat}
						</div>
					</dd> */}
				</div>
	)
}

export default StatementCard