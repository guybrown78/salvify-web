import Link from 'next/link'

import { Logo } from '@/components/Logo'

type Props = {}

const LogoLink = () => {
	return (
		<Link href="/" aria-label="Home">
			<Logo className="h-10 w-auto" />
		</Link>
	)
}

export default LogoLink