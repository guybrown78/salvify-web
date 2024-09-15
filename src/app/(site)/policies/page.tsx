import { Container } from "@/components/Container";
import Link from "next/link";
import { getPolicyPages } from "@/sanity/sanity-utils";


export default async function Policies() {

	// get all pages
	const pages = await getPolicyPages();


	return (
		<Container className="prose prose-slate">
			<h1>Salvify Website Policies</h1>

			<p>At Salvify we&apos;re dedicated to providing you with the best experience while ensuring your privacy and security. To help you understand how we achieve this, we have established a set of policies that outline our commitment to transparency and data protection;</p>

			<ul className='list-disc ml-4 space-y-4'>
				{
					pages.map(page => (
						<li key={page._id}>
							<Link href={`/policies/${page.slug}`} replace  className='underline'>
								{page.title}
							</Link>
						</li>
					))
				}
			</ul>

			<p>We may update our policies to reflect changes in our services or legal requirements. Please check the respective policy pages regularly for any updates.</p>

			<h3>Contact Us</h3>
			<p>If you have any questions or concerns about our policies or your data, please don&apos;t hesitate to contact us. We are here to address your inquiries and ensure your experience with Salvify is as smooth as possible.</p>

			<p>These policies are meant to provide you with a clear understanding of how we operate and protect your data. Your continued use of our website indicates your agreement with these policies, so please read them carefully.</p>

			<p>Thank you for choosing Salvify for your medical inventory journey. We&apos;re excited to have you on board!</p>
		</Container>
		
	)
}