import { Container } from "@/components/Container";
import { PortableText } from "@portabletext/react";
import InsightBreadcrumbs from '@/components/insights/InsightBreadcrumbs'

import { getCategories } from "@/sanity/sanity-utils";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa6'


export const metadata = {
  title: "",
  description: "",
	keywords: ""
}


const CategoriesPage = async () => {
	const categories = await getCategories();

	return (
		<Container>
			<InsightBreadcrumbs />
			<div className="max-w-4xl">
				<h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Salvify Insight Categories</h1>
				<p className="mt-4 text-base leading-8 text-slate-600">
				At Salvify, our commitment to delivering comprehensive insights and innovations in healthcare technology and competency assurance is unwavering. To ensure our readers have easy access to a wealth of knowledge, we&apos;ve meticulously crafted each of our articles to encompass at least one category. These categories serve as a structured framework to help you navigate and explore our extensive content library. Whether you&apos;re interested in the digital transformation of healthcare teams, strategies for enhancing the patient safety, or the latest innovations in inventory management, our categories are designed to bring clarity and ease to your browsing experience.</p>
				<p className="mt-2 text-base leading-8 text-slate-600">
				Welcome to our knowledge hub, where you can discover the future of ..., one category at a time.
				</p>
			</div>

			<div className="mx-auto my-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				{categories.map((category, index) => 
					<div 
						key={category._id} 
						className="flex flex-col items-start justify-between shadow-md rounded-md p-4"
					>
						<div className="mt-3 flex w-full justify-between items-center">
							<h3 className="text-lg font-semibold leading-6 text-slate-900">
								{category.title}
							</h3>
							<div className={clsx('text-xs  px-2 py-1  rounded-full', category.insights?.length ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500')}>{category.insights?.length} <span>{`article${category.insights?.length === 1 ? '' : 's'}`}</span></div>
						</div>
						<div className="mt-5 prose prose-slate prose-sm">
							<PortableText value={category.description} />
						</div>

						<div className="mt-3 flex w-full justify-end items-end">
							<Link href={`/insights/categories/${category.slug}`} replace>
									<p className="mt-2 group relative text-sm text-right leading-6 text-green-600 flex items-center justify-end">See full category <span className="inline-flex ml-2 mr-1 group-hover:mr-0 group-hover:ml-3 transition-all"><FaArrowRight /></span></p>
							</Link>
						</div>

					</div>
				)}

			{/* </ul> */}
			
			</div>
		</Container>
	)
}

export default CategoriesPage