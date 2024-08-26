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

	// console.log(" insights ", insights.length)
	// console.log(insights)

	return (
		<Container>
			<InsightBreadcrumbs />
			<div className="max-w-4xl">
				<h1 className="text-3xl font-bold tracking-tight text-salvify-secondary sm:text-4xl">Salvify Insights Archive</h1>
				<h2 className="text-2xl font-semibold tracking-tight text-salvify-secondary sm:text-3xl">Your comprehensive resource for expert knowledge and industry&nbsp;updates</h2>
				<p className="mt-2 text-lg leading-8 text-salvify-secondary">
					Welcome to the Salvify Insights archive, your resource hub for expert articles, industry news, and actionable tips. Designed to support compliance, streamline inventory processes, and keep pace with the latest trends, this collection provides essential knowledge for medical professionals. Explore the full range of content to see how Salvify enhances medical inventory management and drives operational excellence.
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