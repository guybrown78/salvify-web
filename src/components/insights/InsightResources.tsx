import { Resource } from '@/types/Resource'
import React from 'react'
import InsightResource from './InsightResource'


type Props = {
	resources:Resource[]
}


const InsightResources = ({resources}: Props) => {
	if(!resources.length){
		return null
	}
	return (
		<>
			<h4 className="text-sm font-semibold mb-2 md:mb-0 whitespace-nowrap text-salvify-secondary">Useful resources related to this Insight article:</h4>
			<div className="flex flex-col md:flex-row md:space-x-4 my-4">
				<div className="flex flex-wrap gap-2">
					{
						resources.map(resource => (
							<InsightResource key={resource._id} resource={resource}/>
						))
					}
				</div>
			</div>
		</>
	
	)
}

export default InsightResources