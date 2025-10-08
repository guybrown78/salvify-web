'use client';

import { Feature } from '@/types/Feature';
import { HiOutlineExclamationCircle } from 'react-icons/hi2';
import HeroEyebrow from '../hero/HeroEyebrow';
import { Container } from '../Container';

type Props = { data: Feature };

export default function FeatureProblem({ data }: Props) {
  const eyebrow = data.problemEyebrow || 'Why this matters';
  const hasIntro = !!data.problemIntro?.trim();
  const points = (data.problemPoints || []).filter(Boolean);

  // Nothing to render? Bail early.
  if (!hasIntro && points.length === 0) return null;

  return (
    <section
      id="why-this-matters"
      aria-labelledby="problem-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-sm backdrop-blur-sm lg:p-12">
          {/* Header */}
          <div className="max-w-2xl">
						<HeroEyebrow title={eyebrow} />
            {data.problemTitle && (
              <h2
                id="problem-title"
                className="mt-2 text-2xl font-normal tracking-tight md:text-3xl"
              >
                {data.problemTitle}
              </h2>
            )}
          </div>

          {/* Content */}
          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-start">
            {/* Intro */}
            {hasIntro && (
              <div className="lg:col-span-5 xl:col-span-6">
                <p className="max-w-prose text-base leading-relaxed text-fg">
                  {data.problemIntro}
                </p>
              </div>
            )}

            {/* Points */}
            {points.length > 0 && (
              <div className="lg:col-span-7 xl:col-span-6">
                <ul role="list" className="space-y-3">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
											<div className="mt-0.5 flex items-center gap-3">
												<span className="inline-flex size-8 flex-none items-center justify-center rounded-full">
													<HiOutlineExclamationCircle
														className="size-8 text-accent"
														aria-hidden="true"
													/>
                      </span>
                      <span className="text-base text-fg">{p}</span>
											</div>
                      
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}