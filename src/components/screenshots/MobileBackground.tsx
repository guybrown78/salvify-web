import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}
const MobileBackground = ({ className }: Props) => {
  // geometry
  const vbW = 290,
    vbH = 545

  const innerX = 12,
    innerY = 12,
    innerW = 264,
    innerH = 521,
    innerRx = 28;


  return (
    <svg
      className={clsx(
        'pointer-events-none absolute inset-0 w-full text-surface',
        className
      )}
      viewBox={`0 0 ${vbW} ${vbH}`}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x={innerX}
        y={innerY}
        width={innerW}
        height={innerH}
        rx={innerRx}
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        opacity="0.7"
      />
    </svg>
  )
}

export default MobileBackground
