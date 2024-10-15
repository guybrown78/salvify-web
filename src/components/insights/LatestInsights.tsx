

import { getLatestInsights } from "@/sanity/sanity-utils";
import InsightCard from "@/components/insights/InsightCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "../Container";

export default async function LatestInsights() {

	const latestInsights = await getLatestInsights();

	return (
		<section 
			id="latest-insights" 
			aria-label="Explore Our Latest Insights"
			className="mt-16 mb-16"
		>
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Stay informed with the latest insights from Salvify</h2>
					<p className="mt-2 text-lg leading-8 text-slate-600">
					Explore our newest articles, tips, and industry updates to keep your medical inventory management ahead of the curve.
					</p>
				</div>

				<div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{latestInsights.map((insight) => 
						<InsightCard key={insight._id} insight={insight} />
					)}
				</div>

			</Container>
		</section>
		
	)
}