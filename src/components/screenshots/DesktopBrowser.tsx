import clsx from 'clsx'
import React, { ReactNode, useId } from 'react'

export const VB = { w: 600, h: 350 } as const; // viewBox
export const STROKE = 1;

export const FRAME = { x: 1, y: 1, w: 598, h: 348, r: 15 } as const; // outer outline
export const BG = { x: 1, y: 30, w: 598, h: 320, r: 15 } as const; // inner background

// Content insets (in viewBox units) + radius for the middle div
export const CONTENT = { padX: 12, padY: 12, headerOffsetY: 35, radius: 14 } as const;

/* Utils */
const pctX = (x: number) => `${(x / VB.w) * 100}%`;
const pctY = (y: number) => `${(y / VB.h) * 100}%`;

const roundedBottomPath = ({ x, y, w, h, r }: typeof BG) => {
  const right = x + w;
  const bottom = y + h;
  return [
    `M ${x} ${y}`,            // TL (square)
    `H ${right}`,             // top
    `V ${bottom - r}`,        // right
    `A ${r} ${r} 0 0 1 ${right - r} ${bottom}`, // BR (round)
    `H ${x + r}`,             // bottom
    `A ${r} ${r} 0 0 1 ${x} ${bottom - r}`,     // BL (round)
    `V ${y}`,                 // left
    'Z',
  ].join(' ');
};

/* Types */
interface BaseProps { className?: string }
interface ContentProps extends BaseProps { children?: ReactNode }


/* Outline (top layer) */
export function DesktopBrowserOutline({ className }: BaseProps) {
  const uid = useId(); // unique mask ids

  return (
    <svg
      className={clsx('pointer-events-none absolute inset-0 w-full text-brand-500', className)}
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <mask id={`${uid}-circle-gaps`} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={VB.w} height={VB.h} fill="#fff" />
          {/* small “breaks” across the circles */}
          <line x1="20" y1="15" x2="13" y2="22" strokeWidth="3" stroke="#000" />
          <line x1="39" y1="16" x2="47" y2="19" strokeWidth="3" stroke="#000" />
        </mask>
      </defs>

      <g vectorEffect="non-scaling-stroke" strokeLinecap="round">
        {/* header */}
        <g stroke="currentColor">
          {/* dots */}
          <g fill="none" stroke="currentColor" strokeWidth={STROKE} mask={`url(#${uid}-circle-gaps)`}>
            <circle cx={21} cy={16} r={6} />
            <circle cx={39} cy={16} r={6} />
          </g>
          {/* small right blip + header lines */}
          <line x1="575" y1="16" x2="586" y2="16" strokeWidth={STROKE} />
          <line x1="12" y1="30" x2="62" y2="30" strokeWidth={STROKE} />
          <line x1="78" y1="30" x2="582" y2="30" strokeWidth={STROKE} />
        </g>

        {/* outer frame */}
        <rect
          x={FRAME.x}
          y={FRAME.y}
          width={FRAME.w}
          height={FRAME.h}
          rx={FRAME.r}
          stroke="currentColor"
          strokeWidth={STROKE}
        />
      </g>
    </svg>
  );
}

/* Background (bottom layer) */
export function DesktopBrowserBackground({ className }: BaseProps) {
  return (
    <svg
      className={clsx('pointer-events-none absolute inset-0 h-full w-full text-surface', className)}
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      aria-hidden="true"
      fill="none"
    >
      <path d={roundedBottomPath(BG)} fill="currentColor" opacity={0.7} />
    </svg>
  );
}

/* Content (middle layer) */
export function DesktopBrowserContent({ children, className }: ContentProps) {
  const { padX, padY, headerOffsetY, radius } = CONTENT;

  return (
    <div className={clsx('absolute inset-0', className)}>
      <div
        className="absolute overflow-hidden pt-2 box-border"
        style={{
          left: pctX(padX),
          right: pctX(padX),
          top: pctY(headerOffsetY + padY),
          bottom: pctY(padY),
          borderRadius: radius,
        }}
      >
        {children}
      </div>
    </div>
  );
}