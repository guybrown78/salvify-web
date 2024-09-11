

import { getMoreInsights } from "@/sanity/sanity-utils";
import InsightCard from "@/components/insights/InsightCard";
import { Insight } from "@/types/Insight";
import Link from "next/link";
import { FaArrowRight, FaRegCompass } from 'react-icons/fa6'
type Props = {
	insight:Insight
}

export default async function MoreInsights({insight}:Props) {

	// TODO - just get the 3 latest insights that match the categories (excluding passed insight)
	const moreInsights = await getMoreInsights(insight);

	if(!moreInsights.length){
		return (
			<div>
					<h4 className="flex items-center gap-2 text-sm font-bold tracking-tight text-salvify-primary">
					<FaRegCompass />
					Discover more...
				</h4>
				<h5 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-1xl">Enjoyed this article?</h5>
				<p className="mt-2 text-md leading-8 text-slate-600">
					
				Discover more Salvify Insights that delve deeper into the topics that matter to you, offering expert advice, industry updates, and practical tips to enhance your healthcare operations. <Link href="/insights" className="group relative flex-inline items-center font-semibold text-salvify-primary underline">Salvify Insights <span className="inline-flex ml-1 mr-1 group-hover:mr-0 group-hover:ml-2 transition-all"><FaArrowRight /></span></Link>
				</p>
			</div>
		)
	}
	return (
		<>
			 <div>
			 	<h4 className="flex items-center gap-2 text-sm font-bold tracking-tight text-salvify-primary">
					<FaRegCompass />
					Discover more...
				</h4>
				<h5 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">More Insights from Salvify</h5>
				<p className="my-4 text-md text-slate-600 max-w-4xl">
				Delve further into our collection of related articles to gain deeper insights, uncover best practices, and stay informed on the latest trends in healthcare and inventory management.
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