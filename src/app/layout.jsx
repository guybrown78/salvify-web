import { Lato } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Salvify',
    default: 'Salvify - Digital Ointment for your medical inventory system ',
  },
  description:
    'A trusted medical inventory system promoting assurance of your...',
}

const lato = Lato({
	weight:["100","300","400","700","900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
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
        lato.variable
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
