'use client';

import Link from 'next/link'

export function NavLink({ href, children }) {

	const handleAnchor = (event) => {
		if (href.includes("#")) {
			event.preventDefault();
			window.location.hash = ''
			window.location.hash = href
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
