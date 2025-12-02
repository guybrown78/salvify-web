import React from 'react'
import clsx from "clsx";
import { ImpactTone } from '@/types/IndustrySolution';


const toneClasses: { grad: Record<ImpactTone, string>, color: Record<ImpactTone, string>, outline: Record<ImpactTone, string> } = {
	grad: {
		success: 'from-success/15',
		warning: 'from-warning/15',
		danger: 'from-danger/15',
		info: 'from-blue-500/15',
		highlight: 'from-violet-500/15',
		celebrate: 'from-yellow-500/15',
	},
	color: {
		success: 'text-success',
		warning: 'text-warning',
		danger: 'text-danger',
		info: 'text-blue-300',
		highlight: 'text-violet-300',
		celebrate: 'text-yellow-300',
	},
	outline: {
		success: 'outline-success/10',
		warning: 'outline-warning/10',
		danger: 'outline-danger/10',
		info: 'outline-blue-300/10',
		highlight: 'outline-violet-300/10',
		celebrate: 'outline-yellow-300/10',
	}
}


export interface StatCardType {
	title: string;
	stat: string;
	tone: ImpactTone;
	icon: React.ReactNode,
}

const StatCard = ({title, stat, tone, icon}: StatCardType) => {
	return (
		<div
			className={clsx(
				"px-4 py-5 md:p-6 rounded-lg shadow-sm outline outline-offset-0",
				toneClasses.outline[tone], 
				"bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]", 
				toneClasses.grad[tone], 
				"via-surface/50 to-surface/50"
			)}
		>
			<dt className="flex items-center md:items-start md:flex-col space-x-2 md:space-x-0 space-y-0 md:space-y-2">
				<div className={clsx("flex justify-center align-middle p-0 rounded-lg", toneClasses.color[tone])}>
					{icon}
				</div>
				<div className="text-sm font-normal text-fg">{title}</div>
			</dt>
			<dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
				<div className="flex font-brand items-baseline text-2xl font-extrabold text-fg">
					{stat}
				</div>
			</dd>
		</div>
	)
}

export default StatCard