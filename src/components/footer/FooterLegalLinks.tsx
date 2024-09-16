import Link from "next/link";
import { getPolicyPages } from "@/sanity/sanity-utils";

const FooterLegalLinks = async () => {

	const pages = await getPolicyPages();

	return (
		<ul className='text-xs flex flex-row md:flex-col lg:flex-row space-x-5 space-y-0 md:space-x-0 md:space-y-1 lg:space-x-5 lg:space-y-0'>
			{
				pages.map(page => (
					<li key={page._id}>
						<Link href={`/policies/${page.slug}`} replace className='underline'>
							{page.title}
						</Link>
					</li>
				))
			}
		</ul>
	)
}

export default FooterLegalLinks