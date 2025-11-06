import React, { PropsWithChildren } from 'react'

const VisualHolder = ({ children }:PropsWithChildren) => {
	return (
		<div className='border border-spacing-4 border-dashed border-gray-200 bg-gray-50 p-10'>
			<h5 className='my-2 font-mono text-base'>Visual holding:</h5>
			<p className='font-mono text-sm'>
				{children}
			</p>
		</div>
	)
}

export default VisualHolder