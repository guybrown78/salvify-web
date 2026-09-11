'use client'

import clsx from 'clsx';
import React from 'react'
import { motion } from 'framer-motion'

export type StatementColor = 'brand-300' | 'brand-500' | 'brand-700' | 'accent'

export interface StatementType {
	title: string;
	color: StatementColor;
	icon: React.ReactNode,
	/** Pop the icon circle in with a punchy spring instead of rendering it static. */
	animateIcon?: boolean,
	/** Seconds to hold before the pop starts (e.g. to wait out the card's own entrance). */
	iconDelay?: number,
}

const toneClasses: { grad: Record<StatementColor, string> } = {
	grad: {
		'brand-300': 'to-brand-300',
		'brand-500': 'to-brand-500',
		'brand-700': 'to-brand-700',
		'accent': 'from-accent',
	},

}




const StatementCard = ({color, title, icon, animateIcon = false, iconDelay = 0}: StatementType) => {
	return (
			<div
					className={clsx("inline-block px-2 py-1 rounded-md shadow-sm","bg-gradient-to-r from-surface", toneClasses.grad[color])}
				>
					<div className='flex items-center space-x-2'>
<motion.div
	className='relative bg-brand-300 rounded-full border-2 border-white h-7 w-7 flex justify-center items-center'
	initial={animateIcon ? { scale: 0 } : false}
	animate={{ scale: 1 }}
	transition={{ delay: iconDelay, type: 'spring', stiffness: 550, damping: 14 }}
>

					<div className="relative flex justify-center items-center">
						{icon}
					</div>
</motion.div>
					<span className="text-[10px] font-semibold text-ink">{title}</span>
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