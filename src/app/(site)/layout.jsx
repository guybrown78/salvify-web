import { Lato, Nunito, Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer'

export const metadata = {
  title: {
    template: '%s - Salvify',
    default: 'Salvify - Digital Ointment for your medical inventory system ',
  },
  description:
    'Salvify a trusted SaaS platform that streamlines medical inventory management, ensuring compliance, reducing waste, and enhancing efficiency for healthcare providers of all sizes. From private ambulances and even medical providers to large healthcare institutions, Salvify helps maintain critical supplies with ease.',
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
