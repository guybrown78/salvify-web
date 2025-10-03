import Link from 'next/link'

import { Logo } from '@/components/Logo'
import clsx from 'clsx'

type Props = {
	onClose?: () => void
	size: "sm" | "md"
}

const LogoLink = ({ onClose, size = "md" }: Props) => {
	return (
		<Link href="/" aria-label="Home" onClick={onClose ? onClose : null}>
			<Logo className={clsx(size === "md" ? "h-10" : "h-8", "w-auto")} />
		</Link>
	)
}

export default LogoLink