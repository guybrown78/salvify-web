'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

const BookDemoButton = () => {

	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = (href:string) => {
		// console.log(">>>>> ", pathname, href)
		if (pathname === "/" && href.includes("#")) {
			window.location.hash = ''
			window.location.hash = href.replace("/", "")
		}else{
			router.push(`${href}`)
		}
	}


	return (
		<Button href="/#book-demo" onClick={(e) => handleAnchor('/#book-demo')} color="green">
			<span>
				Request a demo <span className="hidden lg:inline">today</span>
			</span>
		</Button>
)
}

export default BookDemoButton