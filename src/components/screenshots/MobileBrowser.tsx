import clsx from 'clsx'
import React, { ReactNode, useId } from 'react'


export const VB = { w: 290, h: 545 } as const; // viewBox
export const STROKE_M = 1;
const STROKE = { width: 1, shell: 1, inner: 1, innerOpacity: 1 } as const

// outer phone
export const SHELL = { x: 0,  y: 1,  w: 288, h: 543, r: 41 } as const; 
// inner screen
export const INNER = { x: 12, y: 12, w: 264, h: 521, r: 28 } as const; 
// earpiece
export const EAR   = { x: 95, y: 30, w: 96,  h: 14,  r: 7 } as const;   

// gaps (match your working values)
export const GAPS = {
  topY: 85,          // small break on inner right edge (y)
  topH: 35,          //   height
  midY: 365,         // long break on left edge (y)
  midH: 140,         //   height
} as const;

/* Utils */
const pctX = (x: number) => `${(x / VB.w) * 100}%`;
const pctY = (y: number) => `${(y / VB.h) * 100}%`;

/* Types */
interface BaseProps { className?: string }
interface ContentProps extends BaseProps { children?: ReactNode }


/* Outline (top layer) */
export function MobileBrowserOutline({ className }: BaseProps) {
  const uid = useId(); // unique mask IDs for multiple instances

  const rightEdgeX = INNER.x + INNER.w - STROKE.inner

  return (
    <svg
      className={clsx('pointer-events-none absolute inset-0 w-full text-brand-500', className)}
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <mask id={`${uid}-earpiece-gaps`} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={VB.w} height={VB.h} fill="#fff" />
          <rect x={EAR.x + 15} y={EAR.y + EAR.h - 2} width={15} height={4} fill="#000" />
        </mask>

        <mask  id={`${uid}-inner-gaps`} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={VB.w} height={VB.h} fill="#fff" />
          <rect x={rightEdgeX - 1} y={GAPS.topY} width={6} height={GAPS.topH} fill="#000" stroke="#fff" strokeWidth="1" />
          <rect x={INNER.x - 1} y={GAPS.midY} width={6} height={GAPS.midH} fill="#000" />
        </mask>
      </defs>

      <g>
        <rect
          stroke="currentColor"
          x={SHELL.x}
          y={SHELL.y}
          width={SHELL.w}
          height={SHELL.h}
          strokeWidth={STROKE.width}
          rx={SHELL.r}
        />
        <g
          stroke="currentColor"
          strokeWidth={STROKE.inner}
          opacity={STROKE.innerOpacity}
          vectorEffect="non-scaling-stroke"
        >
          <rect x={EAR.x} y={EAR.y} width={EAR.w} height={EAR.h} rx={EAR.r}  mask={`url(#${uid}-earpiece-gaps)`}/>
          <rect x={INNER.x} y={INNER.y} width={INNER.w} height={INNER.h} rx={INNER.r} mask={`url(#${uid}-inner-gaps)`} />
        </g>
      </g>
    </svg>
  )
}

/* Background (bottom layer) */
/* A simple rounded rect exactly matching the inner screen area. */
export function MobileBrowserBackground({ className }: BaseProps) {
  return (
    <svg
      className={clsx('pointer-events-none absolute inset-0 w-full text-surface', className)}
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x={INNER.x}
        y={INNER.y}
        width={INNER.w}
        height={INNER.h}
        rx={INNER.r}
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        opacity="0.7"
      />
    </svg>
  )
}

/* Content (middle layer) */
/* Absolutely-positioned div that maps 1:1 to the inner screen rect. */
export function MobileBrowserContent({ children, className }: ContentProps) {
  const top = pctY(INNER.y + 45)
  const bottom = pctY(VB.h - (INNER.y + INNER.h - 45))

  // radius kept for parity with outline (not applied in your current classes)
  const radius = `${(INNER.r / INNER.w) * 100}% / ${(INNER.r / INNER.h) * 100}%`

  return (
    <div className={clsx('absolute inset-0 flex justify-center items-center', className)}>
      <div
        className="absolute overflow-hidden max-w-[290px] w-full max-h-[546px] h-full p-2"
        style={{ top, bottom /* , borderRadius: radius */ }}
      >
        {children}
      </div>
    </div>
  )
}