import { Container } from "@/components/Container";
import InsightCard from "@/components/insights/InsightCard";

import { getInsights } from "@/sanity/sanity-utils";
import InsightBreadcrumbs from '@/components/insights/InsightBreadcrumbs'

export const metadata = {
  title: "Salvify Insights | Healthcare Tech, Competency Assurance, and Medical Inventory",
  description: "Explore a wealth of insights at Salvify, covering healthcare technology, competency assurance, medical compliance and medical inventory management. Gain valuable knowledge to revolutionise healthcare proffessional teams.",
	keywords: "Salvify Insights, Healthcare Technology, Competency Assurance, Compliance, Medical Inventory Management, Digital Innovation, Healthcare Excellence"
}



const InsightsPage = async () => {

	const insights = await getInsights();


	return (
		<Container>
			<InsightBreadcrumbs />
			<div className="max-w-2xl">
				<h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Salvify Insights</h1>
				<p className="mt-2 text-lg leading-8 text-slate-600">
					Explore our full article archive helping you to stay informed ... .
				</p>
			</div>

			<div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{insights.map((insight) => 
					<InsightCard key={insight._id} insight={insight} />
				)}
			</div>
		</Container>
	)
}

export default InsightsPage