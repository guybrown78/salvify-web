import { Suspense } from 'react'
import { Lato, Nunito, Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer'

export const metadata = {
  metadataBase: new URL('https://www.salvify.co.uk'),
  title: {
    absolute: 'Salvify | Medicine Management Software for Pre-Hospital Care',
  },
  description:
    'Medicine management software for pre-hospital care and EMS. Track stock, manage controlled drugs and stay audit-ready across every vehicle and site.',
  keywords: [
    'medicine management',
    'medicine management software',
    'medicine management for pre-hospital care',
    'EMS medicine management',
    'ambulance medicine management',
    'medicine management software for ambulance services',
    'controlled drug register',
    'controlled drug management',
    'controlled drugs pre-hospital care',
  ],
  alternates: {
    canonical: 'https://www.salvify.co.uk',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.salvify.co.uk',
    siteName: 'Salvify',
    title: 'Salvify | Medicine Management Software for Pre-Hospital Care',
    description:
      'Keep track of every medicine across your vehicles, kits and sites. Stay compliant, reduce risk and know exactly what is available, at any moment.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salvify | Medicine Management Software for Pre-Hospital Care',
    description:
      'Medicine management software for ambulance services and pre-hospital care.',
  },
  robots: {
    index: true,
    follow: true,
  },
}
// const lato = Lato({
// 	weight:["100","300","400","700","900"],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lato',
// })

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300','400','800'], // font-light font-normal font-extrabold
  display: 'swap',
  variable: '--font-nunito',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','600'], // font-light font-normal font-semibold
  display: 'swap',
  variable: '--font-poppins',
})


// const lexend = Lexend({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lexend',
// })

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        nunito.variable, poppins.variable
      )}
    >
			<Suspense fallback={null}>
				<GoogleAnalytics GA_MEASUREMENT_ID='G-ZFG4K61VXN'/>
			</Suspense>
      <body className="flex h-full flex-col font-sans">
				<Header />
					<main className="flex-1">
						{children}
					</main>
				<Footer />
				<CookieBanner/>
			</body>
    </html>
  )
}
