import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}

const MobileOutline = ({ className }: Props) => {
  const strokeWidth = 1

  const shellStrokeWidth = 1
  const innerStrokeWidth = 1
  const innerOpacity = 1

  const gapTopHeight = 35
  const gapTopY = 85
  const gapMidY = 365
  const gapMidHeight = 140

  // geometry
  const vbW = 290,
    vbH = 545
  const shellRx = 41

  // inner-frame rounded rect (approx to your original)
  const innerX = 12,
    innerY = 12,
    innerW = 264,
    innerH = 521,
    innerRx = 28

  // earpiece pill
  const earX = 95,
    earY = 30,
    earW = 96,
    earH = 14,
    earRx = 7

  // mask cuts only the right edge segments
  const rightEdgeX = innerX + innerW - innerStrokeWidth // align to stroke visually

  return (
    <svg
      className={clsx(
        'pointer-events-none absolute inset-0 w-full text-brand-500',
        className
      )}
      viewBox={`0 0 ${vbW} ${vbH}`}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <mask id="earpiece-gaps" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={vbW} height={vbH} fill="#fff" />
          {/* long mid/left gap */}
          <rect
            x={earX + 15}
            y={earY + earH - 2}
            width={15}
            height={4}
            fill="#000"
          />
        </mask>
        {/* show everything (white) except the gap rectangles (black) */}
        <mask id="inner-gaps" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={vbW} height={vbH} fill="#fff" />
          {/* small gap near the top-right */}
          <rect
            x={rightEdgeX - 1}
            y={gapTopY}
            width={6}
            height={gapTopHeight}
            fill="#000"
            stroke="#fff"
            strokeWidth="1"
          />
          {/* long mid/left gap */}
          <rect
            x={innerX - 1}
            y={gapMidY}
            width={6}
            height={gapMidHeight}
            fill="#000"
          />
        </mask>
      </defs>

      <g>
        <rect
          stroke="currentColor"
          x="0"
          y="1"
          width="288"
          height="543"
          strokeWidth={strokeWidth}
          rx="41"
        ></rect>

        <g
          stroke="currentColor"
          strokeWidth={innerStrokeWidth}
          opacity={innerOpacity}
          vectorEffect="non-scaling-stroke"
        >
          {/* earpiece */}
          <rect
            x={earX}
            y={earY}
            width={earW}
            height={earH}
            rx={earRx}
            mask="url(#earpiece-gaps)"
          />
          {/* inner frame with rounded corners; mask creates the gaps on the right */}
          <rect
            x={innerX}
            y={innerY}
            width={innerW}
            height={innerH}
            rx={innerRx}
            mask="url(#inner-gaps)"
          />
        </g>
      </g>
    </svg>
  )
}

export default MobileOutline
