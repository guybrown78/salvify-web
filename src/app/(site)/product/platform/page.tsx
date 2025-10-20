import { Container } from '@/components/Container'
import { Logo, LogoMark, LogoText } from '@/components/Logo'
import React from 'react'

const PlatformPage = () => {
	return (
		<Container>
			<div className='flex flex-col gap-10 m-8'>
				<Logo className="h-20 w-auto" />
				<Logo className="h-20 w-auto" palette="teal" />
				<Logo className="h-20 w-auto" palette="ink" />
				<Logo className="h-20 w-auto" palette="black"/>
				<Logo className="h-20 w-auto" primaryVar="var(--color-brand-700)" accentVar="var(--color-brand-500)" />
				<Logo className="h-20 w-auto p-4 bg-surface-muted rounded-lg" palette="white"/>
				<Logo className="h-20 w-auto p-4 bg-surface rounded-lg" palette="white"/>
				<div>
					<div className='bg-ink'>
						<Logo className="h-4 w-auto" palette="white"/>
					</div>
					<div className='bg-black'>
						<Logo className="h-4 w-auto" palette="white"/>
					</div>
				</div>
				<Logo className="h-3"/>
				<div className='flex gap-10'>
					<LogoMark className="h-20"/>
					<LogoMark className="h-20" palette="teal"/>
					<LogoMark className="h-20" palette="ink"/>
				</div>

				<div className='flex gap-10'>
					<LogoText className="h-20"/>
					<LogoText className="h-20" palette="teal"/>
					<LogoText className="h-20" palette="ink"/>
				</div>
				
			</div>
			
		</Container>
	)
}

export default PlatformPage