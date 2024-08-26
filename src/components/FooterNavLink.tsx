'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  title: string
  anchor: string
}
export function FooterNavLink({ title, anchor }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const handleAnchor = (event, href) => {
    event.preventDefault()
    if (pathname === '/' && href.includes('#')) {
      window.location.hash = ''
      window.location.hash = href.replace('/', '')
    } else {
      router.push(`${href}`)
    }
  }

  return (
    <Link
      href={anchor}
      onClick={(e) => handleAnchor(e, anchor)}
      className=" inline-block rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:underline"
      replace={true}
      passHref={true}
    >
      {title}
    </Link>
  )
}
