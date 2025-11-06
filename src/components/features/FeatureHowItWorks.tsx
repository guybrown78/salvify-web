import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Feature } from '@/types/Feature';
import { featureHowMap } from './howVisuals'; // your component map
import { Container } from '../Container';
import { ContentH2, ContentH3 } from '../content/Titles'

const FeatureHowItWorks = ({ data }: { data: Feature }) => {
	if (!data.howItWorks && data.howVisual !== 'component' && !data.howImage?.url) return null;

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
			<Container>

			
      <div className=" bg-white p-8 grid gap-10 lg:grid-cols-2 lg:items-center">
				<div className='flex-col'>

					<ContentH3 title='How it works' />
					<div className="prose prose-slate">
						<PortableText value={data.howItWorks} />
					</div>
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
			</Container>
    </section>
  );
}

export default FeatureHowItWorks