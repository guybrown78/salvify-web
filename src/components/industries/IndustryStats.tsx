'use client'

import { IndustryImpactStat } from '@/types/IndustrySolution'
import React from 'react'
import StatCard from '../cards/StatCard'
import { benefitIconMap } from '@/utils/iconMap'
import { HiNoSymbol } from 'react-icons/hi2'

type Props = {
	impactStats: IndustryImpactStat[]
}

const IndustryStats = ({ impactStats }: Props) => {
	return (
		<div className='flex justify-center py-8'>
			
			<dl className="mt-5 grid grid-cols-1 gap-x-0 md:gap-x-4 gap-y-2 md:gap-y-0 rounded-lg md:grid-cols-3">
			{impactStats.map((item:IndustryImpactStat) => {
				const IconCmp = (item.icon && benefitIconMap[item.icon]) || HiNoSymbol
				return (
					 
					<StatCard
						key={item.label}
						title={item.label}
						stat={item.value}
						tone={item.tone}
						icon={<IconCmp className="size-8" aria-hidden="true" />}
					/>
				)}
			)}
		</dl>

		</div>
	)
}

export default IndustryStats