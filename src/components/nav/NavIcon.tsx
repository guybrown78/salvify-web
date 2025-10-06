import { NavItemIconMap } from '@/utils/iconMap'
import { NavIconKey } from '@/utils/nav-types'
import React from 'react'

const NavIcon = ({ icon }: { icon?: NavIconKey }) => {
	if (!icon) return null
  const Icon = NavItemIconMap[icon]
  if (!Icon) return null
  return (
    <Icon
      aria-hidden
      className="size-6 text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-brand-500"
    />
  )
}

export default NavIcon