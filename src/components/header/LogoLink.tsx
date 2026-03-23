import Link from 'next/link'

import { Logo } from '@/components/Logo'
import clsx from 'clsx'

type Props = {
	onClose?: () => void
	size?: 'sm' | 'md' | 'responsive'
	className?: string
}

const LogoLink = ({ onClose, size = 'responsive', className }: Props) => {
	const sizeClasses =
    size === 'sm'
      ? 'h-8'
      : size === 'md'
      ? 'h-10'
      : 'h-8 md:h-10' // responsive: sm on mobile, md from breakpoint

	return (
		<Link href="/" aria-label="Home" onClick={onClose ? onClose : null}>
			<Logo className={clsx(sizeClasses, className)} />
		</Link>
	)
}

export default LogoLink