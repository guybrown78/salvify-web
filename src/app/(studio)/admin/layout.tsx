export const metadata = {
  title: 'Salvify Studio Admin',
  description: 'Admin Salvify Sanity Studio salvify.co.uk',
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
