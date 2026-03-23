import clsx from 'clsx'
import { ReactNode } from 'react'

import {
	DesktopBrowserBackground,
	DesktopBrowserContent,
	DesktopBrowserOutline,
	DesktopBrowserWhiteBase,
} from './DesktopBrowser'
import {
	MobileBrowserBackground,
	MobileBrowserContent,
	MobileBrowserOutline,
	MobileBrowserWhiteBase,
} from './MobileBrowser'

interface Props {
  ariaTitle?: string
  children?: ReactNode
  className?: string
  /** Maintain aspect ratio for consistent hero layout */
  aspect?: '16/9' | '4/3' | '21/9' | '3/2' | 'none' | 'responsive'
}
const ScreenImageContainer = ({
  ariaTitle,
  children,
  className,
  aspect = '16/9',
}: Props) => {
  return (
    <section
      aria-label={ariaTitle || ''}
      // className="relative mx-auto w-full max-w-4xl px-6 pb-6 pt-28 backdrop-blur-sm"
      className={clsx(
        'relative isolate mx-auto h-[480px] w-full max-w-4xl overflow-hidden backdrop-blur-sm md:h-auto',
        className
      )}
    >
      <div
        className={clsx(
          'relative w-full',
          aspect === '16/9' && 'aspect-[16/9]',
          aspect === '4/3' && 'aspect-[4/3]',
          aspect === '21/9' && 'aspect-[21/9]',
          aspect === '3/2' && 'aspect-[3/2]',
          aspect === 'responsive' && 'aspect-[1/3] md:aspect-[3/2]'
        )}
      >
				<MobileBrowserWhiteBase className="z-0 h-[600px] md:hidden " />
				<DesktopBrowserWhiteBase className="z-0 hidden h-full md:block"/>

        {/* Bottom layer (BG) */}
        <MobileBrowserBackground className="z-10 h-[600px] md:hidden text-white" />
        <DesktopBrowserBackground className="z-10 hidden h-full md:block text-white" />

        {/* Middle layer (content) */}
        <MobileBrowserContent className="z-20 h-[600px] md:hidden">
          {children}
        </MobileBrowserContent>
        <DesktopBrowserContent className="z-20 hidden h-full md:block">
          {children}
        </DesktopBrowserContent>

        {/* Top layer (outline) */}
        <MobileBrowserOutline className="z-30 h-[600px] md:hidden" />
        <DesktopBrowserOutline className="z-30 hidden h-full md:block" />
      </div>
    </section>
  )
}

export default ScreenImageContainer
