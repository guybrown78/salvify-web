import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.salvify.co.uk'),
  title: {
    default:
      'Salvify | Medicine Management & Controlled Drug Software for Pre-Hospital Care',
    template: '%s | Salvify',
  },
  description:
    'Salvify is medicine management and controlled drug register software for pre-hospital and EMS care. Track stock, batches and expiry dates, keep an auditable CD register, strengthen compliance and reduce waste.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
