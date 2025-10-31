import { NavItemIconMap } from '@/utils/iconMap'
import { NavIconKey } from '@/utils/nav-types'
import clsx from 'clsx'
import React from 'react'

interface Props {
	icon?: NavIconKey
	size?: "sm" | "md" | "lg"
	className?: string
}

const NavIcon = ({ icon, size = "md", className }: Props) => {
	if (!icon) return null
  const Icon = NavItemIconMap[icon]
  if (!Icon) return null

	const sizeClass:string = size === "sm" ? "size-4" : size === "lg" ? "size-10" : "size-6";

  return (
    <Icon
      aria-hidden
      className={clsx("text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-brand-500", sizeClass, className)}
    />
  )
}

export default NavIcon