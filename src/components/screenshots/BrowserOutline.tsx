import clsx from 'clsx';
import React from 'react'

interface Props {
	className?: string;
}

const BrowserOutline = ({ className }: Props) => {
	// geometry
  const vbW = 600,
				vbH = 350;
	const strokeWidth = 1;
  return (
    <svg
      className={clsx("pointer-events-none absolute inset-0 w-full text-brand-500", className)}
      viewBox={`0 0 ${vbW} ${vbH}`}
      role="img"
      aria-hidden="true"
      fill="none"
    >

			 <defs>
        <mask id="circle-gaps" maskUnits="userSpaceOnUse">
					<rect x="0" y="0" width={vbW} height={vbH} fill="#fff" />
         	<line x1="20" y1="15" x2="13" y2="22" strokeWidth="3" fill="#000" stroke="#000" />
					<line x1="39" y1="16" x2="47" y2="19" strokeWidth="3" fill="#000" stroke="#000"/>
        </mask>
      </defs>


      <g vectorEffect="non-scaling-stroke">
				{/* Header */}
        <g stroke="currentColor" strokeLinecap="round">

					{/* dots */}
					<g fill="none" stroke="currentColor" strokeWidth={strokeWidth} mask="url(#circle-gaps)">
						{/* <line x1="20" y1="15" x2="13" y2="22" strokeWidth="3" />
						<line x1="39" y1="16" x2="47" y2="19" strokeWidth="3" /> */}
						<circle cx={21} cy={16} r={6} />
						<circle cx={39} cy={16} r={6} />
					</g>

 					<line x1="575" y1="16" x2="586" y2="16" strokeWidth={strokeWidth} />

					{/* header lines */}
          <line x1="12" y1="30" x2="62" y2="30" strokeWidth={strokeWidth} />
          <line x1="78" y1="30" x2="582" y2="30" strokeWidth={strokeWidth} />
        </g>

		
				 {/* outer frame */}
        <rect x="1" y="1" width="598" height="348" rx="15" stroke="currentColor" strokeWidth={strokeWidth} />
      </g>
    </svg>
  );
}

export default BrowserOutline