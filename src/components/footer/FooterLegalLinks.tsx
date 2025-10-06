import Link from "next/link";
import { getPolicyPages } from "@/sanity/sanity-utils";
import FooterNavigationLink from "./FooterNavigationLink";

const FooterLegalLinks = async () => {

	const pages = await getPolicyPages();

	return (
		<ul className='text-xs flex flex-col md:flex-row items-start justify-start gap-4'>
			{
				pages.map(page => (
					<li key={page._id}>
						<FooterNavigationLink title={page.title}  href={`/policies/${page.slug}`} />
					</li>
				))
			}
		</ul>
	)
}

export default FooterLegalLinks