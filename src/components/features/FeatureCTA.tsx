
'use client';

import Link from 'next/link';
import { Container } from '../Container';
import ContentH2 from '../ titles/ContentH2';
import { Feature } from '@/types/Feature';
import { Button } from '../Button';
// import { Logo } from '../Logo';

const FeatureCTA = ({ data }: { data: Feature }) => {

	const title = data.ctaTitle || 'Ready to modernise your medicine management?';
	return (
		<section className="py-16 lg:py-24 bg-gradient-to-b from-surface-muted to-white">
      <Container>
        <div className="rounded-3xl bg-ink text-white p-8 shadow-lg flex items-center">
					{/* <div className='flex items-center justify-center mr-8'>
						<Logo />
					</div> */}
					<div>
						 <ContentH2 title={title} />
            
     
          <p className="mt-3 max-w-2xl text-white/80">
            {data.ctaBody}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {/* <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-slate-900 hover:bg-white/90"
            >
              Book a demo
            </Link> */}
						<Button href="/contact/book-a-demo" color="brand">Book a demo</Button>
            {/* <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium ring-1 ring-inset ring-white/25 hover:bg-white/10"
            >
              Contact sales
            </Link> */}
						<Button href="/contact" variant="outline" color="brand">Contact sales</Button>
          </div>
					</div>
         
        </div>
      </Container>
    </section>
	)
}

export default FeatureCTA
