import React from 'react'
import clsx from 'clsx'

interface BentoImgProps {
  src: string
  alt: string
  /** Fixed height (default: h-80) */
  heightClassName?: string
  /** object-cover / object-contain (default: cover) */
  fit?: 'cover' | 'contain'
  /** Tailwind object-position value (e.g. object-left, object-center) */
  positionClassName?: string
  /** Extra classes for the <img> */
  className?: string
  /** Loading behaviour (default: lazy) */
  loading?: 'eager' | 'lazy'
  /** Decoding hint */
  decoding?: 'auto' | 'sync' | 'async'
}


const BentoImage = ({
  src,
  alt,
  heightClassName = 'h-80',
  fit = 'cover',
  positionClassName,
  className,
  loading = 'lazy',
  decoding = 'async',
}: BentoImgProps) => {
	return (
		<img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={clsx(
        heightClassName,
        fit === 'cover' ? 'object-cover' : 'object-contain',
        positionClassName,
        className
      )}
    />
	)
}

export default BentoImage