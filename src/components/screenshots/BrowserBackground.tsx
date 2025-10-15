import clsx from 'clsx';
import React from 'react'

interface Props {
	className?: string;
}
const BrowserBackground = ({ className }: Props) => {

		// geometry
  const vbW = 600,
				vbH = 350;

	// geometry matching your previous rect
  const x = 1, y = 30, w = 598, h = 320, r = 15;
  const right = x + w;      // 599
  const bottom = y + h;     // 324

  const d = [
    `M ${x} ${y}`,                // top-left
    `H ${right}`,                 // top edge (square corners)
    `V ${bottom - r}`,            // right edge down to arc start
    `A ${r} ${r} 0 0 1 ${right - r} ${bottom}`, // bottom-right corner (rounded)
    `H ${x + r}`,                 // bottom edge
    `A ${r} ${r} 0 0 1 ${x} ${bottom - r}`,     // bottom-left corner (rounded)
    `V ${y}`,                     // left edge back to top
    'Z',
  ].join(' ');

  return (
    <svg
      className={clsx('pointer-events-none absolute inset-0 w-full h-full text-surface', className)}
      viewBox={`0 0 ${vbW} ${vbH}`}
      aria-hidden="true"
      fill="none"
    >
      <path d={d} fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default BrowserBackground