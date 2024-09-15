import { Container } from "@/components/Container";
import { getPolicyPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
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

				<div className="mt-5 prose prose-slate lg:prose-lg">
					<PortableText value={policy.content} />
				</div>

				
			</div>
		</Container>
		
	)
}