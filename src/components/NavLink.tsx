'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export function NavLink({ href, children }) {

  const router = useRouter()
  const pathname = usePathname()

  const handleAnchor = (event) => {
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
      href={href}
      onClick={(e) => handleAnchor(e)}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
