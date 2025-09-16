import { Feature } from '@/types/Feature';
import React from 'react';

interface Props { data:Feature }

const TemplateB = ({ data }: Props) => {
	return (
		 <main role="main" className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-red-600">{data.title}</h1>
        {data.heroSubTitle && <p className="mt-2 text-lg text-green-600">{data.heroSubTitle}</p>}
      </header>
      {/* Render hero, summary, content blocks… */}
    </main>
	)
}

export default TemplateB