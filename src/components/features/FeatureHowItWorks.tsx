import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Feature } from '@/types/Feature';
import { featureHowMap } from './howVisuals'; // your component map

const FeatureHowItWorks = ({ data }: { data: Feature }) => {
	if (!data.howItWorks && data.howVisual !== 'component' && !data.howImage?.url) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="prose prose-slate lg:prose-lg">
          <PortableText value={data.howItWorks} />
        </div>

        <div className="lg:pl-12">
          {data.howVisual === 'component' && data.howComponentKey ? (
            (() => {
              const Cmp = featureHowMap[data.howComponentKey];
              return Cmp ? <Cmp /> : null;
            })()
          ) : data.howImage?.url ? (
            <Image
              src={data.howImage.url}
              alt={data.howImage.alt || 'How it works'}
              width={1000}
              height={700}
              className="w-full rounded-2xl object-cover"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default FeatureHowItWorks