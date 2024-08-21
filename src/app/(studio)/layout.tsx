
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salvify studio admin',
  description: 'Admin only area for salvify.co.uk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full scroll-smooth bg-white antialiased'>
      <body className="flex h-full flex-col">
				{children}
			</body>
    </html>
  )
}
