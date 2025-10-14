import clsx from 'clsx';
import { ReactNode } from 'react';
import BrowserOutline from './BrowserOutline';
import MobileOutline from './MobileOutline';

interface Props {
	ariaTitle?: string
	children?: ReactNode;
  className?: string;
  /** Maintain aspect ratio for consistent hero layout */
  aspect?: '16/9' | '4/3' | '21/9' | '3/2' | 'none' | 'responsive';
}
const ScreenImageContainer = ({ ariaTitle, children,
  className,
  aspect = '16/9', }: Props) => {
  return (
    <section
      aria-label={ariaTitle || ""}
      // className="relative mx-auto w-full max-w-4xl px-6 pb-6 pt-28 backdrop-blur-sm"
			className={clsx(
        'relative isolate mx-auto h-[480px] md:h-auto w-full max-w-4xl backdrop-blur-sm overflow-hidden',
        className
      )}
    >
      <div className={clsx(
				"relative w-full", 
				aspect === '16/9' && 'aspect-[16/9]',
        aspect === '4/3' && 'aspect-[4/3]',
        aspect === '21/9' && 'aspect-[21/9]',
				aspect === '3/2' && 'aspect-[3/2]',
				aspect === 'responsive' && 'aspect-[1/3] md:aspect-[3/2]')}>

				<MobileOutline className='h-[600px] md:hidden'/>	
				<BrowserOutline className='hidden h-full md:inline-flex'/>
			</div>
    </section>
  )
}

export default ScreenImageContainer
