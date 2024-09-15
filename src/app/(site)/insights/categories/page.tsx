import { Container } from "@/components/Container";
import { PortableText } from "@portabletext/react";
import InsightBreadcrumbs from '@/components/insights/InsightBreadcrumbs'

import { getCategories } from "@/sanity/sanity-utils";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa6'
import SubscribeWrapper from "@/components/subscribe/SubscribeWrapper";


export const metadata = {
  title: "",
  description: "",
	keywords: ""
}


const CategoriesPage = async () => {
	const categories = await getCategories();

	return (
		<>
			<Container>
				<InsightBreadcrumbs />
				<div className="max-w-4xl">
					<h1 className="text-2xl font-bold tracking-tight text-salvify-secondary sm:text-3xl">Explore Salvify Insight Categories</h1>

					<h2 className="text-xl font-semibold tracking-tight text-salvify-secondary sm:text-2xl">Navigate through our curated knowledge hubs</h2>

					<p className="mt-4 text-base leading-8 text-salvify-secondary">
					At Salvify, our commitment to providing valuable insights and cutting-edge innovations in healthcare technology and competency assurance. Our articles are thoughtfully organised into categories, each offering a focused perspective on the topics that matter most to you.
					</p>
					<p className="mt-2 text-base leading-8 text-salvify-secondary">
					These categories are designed to guide your exploration, making it easy to find the information you need. Whether you&apos;re looking to understand the digital transformation in healthcare, discover strategies for improving patient safety, or stay updated on the latest in inventory management, our structured categories simplify your search.
					</p>
					<p className="mt-2 text-base leading-8 text-salvify-secondary">
					Dive into our categories and uncover the insights that will help you elevate your practice, enhance your team’s performance, and stay ahead in the ever-evolving healthcare landscape.
					</p>


				</div>

				<div className="mx-auto my-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{categories.map((category, index) => 
						<div 
							key={category._id} 
							className="flex flex-col items-start justify-between shadow-md rounded-md p-4"
						>
							<div className="mt-3 flex w-full justify-between items-center">
								<h3 className="text-lg font-semibold leading-6 text-salvify-secondary">
									{category.title}
								</h3>
								<div className={clsx('text-xs  px-2 py-1  rounded-full', category.insights?.length ? 'bg-green-100 text-salvify-primary' : 'bg-salvify-secondary/10 text-salvify-secondary/50')}>{category.insights?.length} <span>{`article${category.insights?.length === 1 ? '' : 's'}`}</span></div>
							</div>
							<div className="mt-5 prose prose-slate prose-sm">
								<PortableText value={category.description} />
							</div>

							<div className="mt-3 flex w-full justify-end items-end">
								<Link href={`/insights/categories/${category.slug}`} replace>
										<p className="mt-2 group relative text-sm text-right leading-6 text-salvify-primary flex items-center justify-end">See full category <span className="inline-flex ml-2 mr-1 group-hover:mr-0 group-hover:ml-3 transition-all"><FaArrowRight /></span></p>
								</Link>
							</div>

						</div>
					)}

				{/* </ul> */}
				
				</div>
			</Container>
			<SubscribeWrapper />
		</>
		
	)
}

export default CategoriesPage