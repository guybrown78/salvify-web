import { Insight } from "@/types/Insight"
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { FaArrowRight } from 'react-icons/fa6'
import { PortableText } from "@portabletext/react";

type Props = {
	insight:Insight
}
export default function InsightCard({ insight }:Props){

	return(
		<article className="flex flex-col items-start justify-between" title={`${insight.title} | ${insight.overview}`}>
			<div className="relative w-full">
					{
						insight.coverImage && 
						<Image 
							src={insight.coverImage}
							alt={insight.title}
							width={600}
							height={400}
							className="aspect-[16/9] w-full rounded-2xl bg-salvify-secondary/10 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						/>
					}
					<div className="">
						<div className="mt-8 flex items-center gap-x-4 text-xs">
							<time dateTime={moment(insight.publishedAt).format('MMMM Do YYYY, h:mm:ss a')} className="text-salvify-secondary/50">
								{moment(insight.publishedAt).format('MMMM Do YYYY') }
							</time>
						</div>
						<Link href={`/insights/${insight.slug}`} replace>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-salvify-secondary group-hover:text-salvify-secondary/80 transform-all hover:underline">
									<span className="absolute inset-0" />
										{insight.title}
								</h3>
								{/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{insight.overview}</p> */}
								<div className="mt-5 prose prose-slate prose-sm line-clamp-3 leading-6 w-full">
									<PortableText value={insight.overview} />
								</div>


								<p className="mt-2 text-sm text-right leading-6 text-salvify-primary flex items-center justify-end">Continue reading <span className="inline-flex ml-2 mr-1 group-hover:mr-0 group-hover:ml-3 transition-all"><FaArrowRight /></span></p>
							</div>
						</Link>
					</div>

				</div>
			</article>
	)
}