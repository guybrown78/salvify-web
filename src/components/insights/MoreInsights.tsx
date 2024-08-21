

import { getMoreInsights } from "@/sanity/sanity-utils";
import InsightCard from "@/components/insights/InsightCard";
import { Insight } from "@/types/Insight";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa6'

type Props = {
	insight:Insight
}

export default async function MoreInsights({insight}:Props) {

	// TODO - just get the 3 latest insights that match the categories (excluding passed insight)
	const moreInsights = await getMoreInsights(insight);

	if(!moreInsights.length){
		return (
			<div>
				<h5 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-1xl">Enjoyed this article?</h5>
				<p className="mt-2 text-md leading-8 text-slate-600">
					
					Discover more Salvify Insights, diving deeper into ... <Link href="/insights" className="group relative flex-inline items-center font-semibold text-green-600 underline">Salvify Insights <span className="inline-flex ml-1 mr-1 group-hover:mr-0 group-hover:ml-2 transition-all"><FaArrowRight /></span></Link>
				</p>
			</div>
		)
	}
	return (
		<>
			 <div>
				<h4 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">More Insights from Salvify</h4>
				<p className="mt-2 text-md leading-8 text-slate-600 max-w-2xl">
					Delve further into our collection of related articles. ...
				</p>
			</div>

			<div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{moreInsights.map((insight) => 
					<InsightCard key={insight._id} insight={insight} />
				)}
			</div>
		</>
	)
}