'use client'
import Link from 'next/link'
import React from 'react'

export default function NavLinkOrText({
  href, onClick, children, className = ''
}: { href?: string; onClick?: () => void; children: React.ReactNode; className?: string }) {
  return href ? (
    <Link href={href} onClick={onClick}
      className={`group/link rounded font-semibold text-gray-900 focus-visible:ring-2 focus-visible:ring-teal-500 ${className}`}>
      {children}
    </Link>
  ) : (
    <span className={`font-semibold text-gray-900 ${className}`}>{children}</span>
  )
}
