// import { getProject } from "@/sanity/sanity-utils";
import { Container } from "@/components/Container";
import InsightCard from "@/components/insights/InsightCard";
import InsightBreadcrumbs from '@/components/insights/InsightBreadcrumbs'
import { getCategory } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";


type Props = {
	params: { category:string }
}

export const generateMetadata = async ({ params }:Props) => {
	const slug = params.category;
	const category = await getCategory(slug);
  return {
    title: `Salvify Insight Category: ${category.title}`,
		description: category.metaDescription,
		keywords: category.keywords
  };
};

export default async function Category({ params }:Props){

	const slug = params.category;
	const category = await getCategory(slug);


	return (
		<Container>
			<InsightBreadcrumbs />
			<h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{category.title}</h1>
			<div className="mt-5 prose prose-slate lg:prose-lg">
				<PortableText value={category.description} />
			</div>

			{ category.insights && category.insights?.length > 0 && 
				<div className="mt-8">
					<h4 className="text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl my-8">Insights posted in { category.title };</h4>

					<div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{category.insights?.map((insight) => 
							<InsightCard key={insight._id} insight={insight} />
						)}
					</div>
				</div>
				
			}

			{ !category.insights?.length && 
				<div className="mt-8">
					<p className="text-lg tracking-tight text-slate-600 my-8">There are currently no insights posted in { category.title }.</p>
				</div>
				
			}
			
		</Container>
		
	)
}



