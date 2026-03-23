
'use client';

import Link from 'next/link';
import { Container } from '../Container';
import { ContentH2 } from '../content/Titles'
import { Feature } from '@/types/Feature';
import { Button } from '../Button';
import { LogoMark } from '../Logo';
// import { Logo } from '../Logo';

const FeatureCTA = ({ data }: { data: Feature }) => {

	const title = data.ctaTitle || 'Ready to modernise your medicine management?';
	return (
		<section className="py-16 lg:py-24 bg-gradient-to-b from-surface-muted to-white">
      <Container>
        <div className="rounded-3xl bg-ink text-white p-8 shadow-lg flex items-center">
					<div className='hidden md:flex items-center justify-center mr-8'>
						<LogoMark className='h-32' palette='teal' accentVar='#FFF'/>
					</div>
					<div>
						 <span className='flex items-start'>
							{/* <LogoMark className='h-10 max-w-10 mr-2 mt-3 md:hidden' palette='teal' accentVar='#FFF'/> */}
							<ContentH2 title={title} />
							</span> 
            
     
          <p className="mt-3 max-w-2xl text-white/80">
            {data.ctaBody}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<Button href="/contact/book-a-demo" color="brand">Book a demo</Button>
						<Button href="/contact" variant="outline" color="brand">Contact sales</Button>
          </div>
					</div>
         
        </div>
      </Container>
    </section>
	)
}

export default FeatureCTA
