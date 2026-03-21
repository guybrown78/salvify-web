import clsx from 'clsx'
import React from 'react'

type PillarCardColor = 'surface-muted' | 'surface' | 'ink' | 'brand' | 'brand-light' | 'accent'

type Props = {
	eyebrow: string
	title: string
	desc: string
	icon: React.ReactNode
	className?: string
	color?: PillarCardColor
}

const colorStyles: Record<
	PillarCardColor,
	{
		card: string
		iconWrapper: string
		icon: string
		eyebrow: string
		title: string
		desc: string
	}
> = {
	'surface-muted': {
		card: 'bg-surface-muted',
		iconWrapper: 'bg-ink text-surface',
		icon: '',
		eyebrow: 'text-ink',
		title: 'text-ink',
		desc: 'text-ink/80',
	},
	surface: {
		card: 'bg-surface',
		iconWrapper: 'bg-ink text-surface',
		icon: '',
		eyebrow: 'text-ink',
		title: 'text-ink',
		desc: 'text-ink/80',
	},
	ink: {
		card: 'bg-ink',
		iconWrapper: 'bg-brand-500 text-ink',
		icon: '',
		eyebrow: 'text-brand-500',
		title: 'text-surface',
		desc: 'text-surface/80',
	},
	'brand-light': {
		card: 'bg-brand-300',
		iconWrapper: 'bg-ink text-surface',
		icon: 'text-brand-500',
		eyebrow: 'text-ink',
		title: 'text-ink',
		desc: 'text-ink/80',
	},
	brand: {
		card: 'bg-brand-500',
		iconWrapper: 'bg-surface text-brand-500',
		icon: 'text-brand-500',
		eyebrow: 'text-surface-muted',
		title: 'text-surface',
		desc: 'text-ink/80',
	},
	accent: {
		card: 'bg-accent',
		iconWrapper: 'bg-ink text-surface',
		icon: '',
		eyebrow: 'text-ink',
		title: 'text-ink',
		desc: 'text-ink/80',
	},
}

const PillarCard = ({
	eyebrow,
	title,
	desc,
	icon,
	className,
	color = 'surface-muted',
}: Props) => {
	const styles = colorStyles[color]

	return (
		<div className={clsx('relative rounded-lg shadow-sm', styles.card, className)}>
			<div className="relative flex h-full flex-col overflow-hidden p-8">
				<div
					className={clsx(
						'inline-flex size-16 items-center justify-center rounded-md',
						styles.iconWrapper
					)}
				>
					<span className={styles.icon}>{icon}</span>
				</div>

				<div className="py-2">
					<p className={clsx('mt-2 text-xs/8 font-semibold uppercase', styles.eyebrow)}>
						{eyebrow}
					</p>
					<p className={clsx('mt-2 text-lg font-semibold tracking-tight', styles.title)}>
						{title}
					</p>
					<p className={clsx('mt-2 max-w-lg text-sm/6', styles.desc)}>
						{desc}
					</p>
				</div>
			</div>
		</div>
	)
}

export default PillarCard