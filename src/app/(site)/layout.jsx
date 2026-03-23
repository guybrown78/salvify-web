import { Lato, Nunito, Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer'

export const metadata = {
  metadataBase: new URL('https://www.salvify.co.uk'),
  title: 'Salvify | Medical Inventory Management Software',
  description:
    'Salvify is medical inventory management software for healthcare providers. Track stock, batch numbers and expiry dates, strengthen compliance, reduce waste, and improve operational efficiency with one digital platform.',
  keywords: [
    'medical inventory management software',
    'medical inventory',
    'medicine management',
    'medical inventory management',
    'healthcare inventory tracking',
    'medical stock control software',
    'medical expiry tracking',
    'medical batch tracking',
  ],
  alternates: {
    canonical: 'https://www.salvify.co.uk',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.salvify.co.uk',
    siteName: 'Salvify',
    title: 'Salvify | Medical Inventory Management Software',
    description:
      'Track medical stock, batch numbers and expiry dates, improve compliance, reduce waste, and keep better control of medical inventory with Salvify.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salvify | Medical Inventory Management Software',
    description:
      'Medical inventory management software for healthcare providers.',
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
			<GoogleAnalytics GA_MEASUREMENT_ID='G-ZFG4K61VXN'/>
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
