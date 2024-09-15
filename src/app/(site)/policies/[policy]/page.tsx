import { Container } from "@/components/Container";
import { getPolicyPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";

type Props = {
	params: { policy:string }
}
export default async function Project({ params }:Props){

	const slug = params.policy;
	const policy = await getPolicyPage(slug)

	return (
		<Container>
			<div className="py-10">
				<h1 className="text-2xl font-bold tracking-tight text-salvify-secondary sm:text-3xl">{policy.title}</h1>
				<p className="mt-4 text-base lg:text-lg leading-8 text-salvify-secondary">
					Last updated: {moment(policy.updatedAt).format('MMMM Do YYYY') }
				</p>
				<div className="mt-5 prose prose-slate lg:prose-lg">
					<PortableText value={policy.content} />
				</div>

				
			</div>
		</Container>
		
	)
}