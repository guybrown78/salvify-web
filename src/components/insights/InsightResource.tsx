import { Resource } from '@/types/Resource'
import React from 'react'
import { FaLink } from "react-icons/fa6";

type Props = {
	resource:Resource
}

const InsightResource = ({resource}: Props) => {
	return (
		<a href={resource.url} target='_blank' className='flex items-center rounded-lg bg-white px-2 py-1 ring-1 ring-inset ring-salvify-primary/20'>
			<div className='p-2 text-xl text-salvify-primary'>
				<FaLink />
			</div>
			<div className='flex-col'>
				<div className='text-sm font-semibold'><span className='font-medium flex-inline mr-1'>Link:</span>{resource.domain}</div>
				<div className='text-sm font-medium'>{resource.title}</div>
			</div>
		</a>
	)
}

export default InsightResource