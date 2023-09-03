
'use client';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function Hero() {

	const handleAnchor = (event, href) => {
		
		if (href.includes("#")) {
			event.preventDefault();
			window.location.hash = ''
			window.location.hash = href
		}
	}


  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-salvify-secondary sm:text-7xl">
        Medical inventory{' '}
        <span className="relative whitespace-nowrap text-salvify-primary">
          <span className="relative">made simple</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
				Elevate your assurance, compliance, and patient safety with Salvify, the future of medical inventory excellence!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">

				<Button href="/#features" onClick={(e) => handleAnchor(e, '#features')} variant="outline">
					See features
          </Button>

      </div>
 
    </Container>
  )
}
