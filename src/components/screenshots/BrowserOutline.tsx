import clsx from 'clsx';
import React from 'react'

interface Props {
	className?: string;
}

const BrowserOutline = ({ className }: Props) => {
  return (
    <svg
      className={clsx("pointer-events-none absolute inset-0 w-full text-brand-500", className)}
      viewBox="0 0 600 350"
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <g vectorEffect="non-scaling-stroke">
        <g transform="translate(14 7)" stroke="currentColor" strokeLinecap="square">
          <line x1="5" y1="20.5" x2="50" y2="20.5" strokeWidth="2" />
          <line x1="65" y1="21" x2="570" y2="21.5" strokeWidth="2" />
          <g transform="translate(4 -7)">
						 <path d="M21.5,9 C24.5375661,9 27,11.4624339 27,14.5 C27,15.4190024 26.7746039,16.2853607 26.3760771,17.0468096 L25.6266008,16.2976176 C25.8667819,15.7470299 26,15.1390724 26,14.5 C26,12.0147186 23.9852814,10 21.5,10 C19.0147186,10 17,12.0147186 17,14.5 C17,16.9852814 19.0147186,19 21.5,19 C21.8611678,19 22.2123979,18.9574518 22.5489513,18.8770944 L23.3515845,19.6805522 C22.7730065,19.8873629 22.1496572,20 21.5,20 C18.4624339,20 16,17.5375661 16,14.5 C16,11.4624339 18.4624339,9 21.5,9 Z" />
          </g>
          <g transform="rotate(75 5 5) translate(-13 -12)">
            <path d="M21.5,9 C24.5375661,9 27,11.4624339 27,14.5 C27,15.4190024 26.7746039,16.2853607 26.3760771,17.0468096 L25.6266008,16.2976176 C25.8667819,15.7470299 26,15.1390724 26,14.5 C26,12.0147186 23.9852814,10 21.5,10 C19.0147186,10 17,12.0147186 17,14.5 C17,16.9852814 19.0147186,19 21.5,19 C21.8611678,19 22.2123979,18.9574518 22.5489513,18.8770944 L23.3515845,19.6805522 C22.7730065,19.8873629 22.1496572,20 21.5,20 C18.4624339,20 16,17.5375661 16,14.5 C16,11.4624339 18.4624339,9 21.5,9 Z" />
          </g>

          <line x1="564" y1="8" x2="574" y2="8" strokeWidth="2" />
        </g>

        <rect x="1" y="1" width="598" height="348" rx="15" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default BrowserOutline