import { RelatedContentCard, RelatedContentType } from '@/types/Global'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import NavIcon from '../nav/NavIcon'
import { HiOutlineArrowRight } from 'react-icons/hi2'
interface Props {
  relatedContent: RelatedContentCard
  className?: string
}

const getHREF = (type:RelatedContentType, slug:string) => {
	switch (type){
		case 'useCase':
			return `/solutions/use-cases/${slug}`;
		case 'feature':
			return `/product/features/${slug}`;
		case 'industry':
			return `/solutions/industry/${slug}`;
		default:
			return "";
	}
}

const getEyebrow = (type:RelatedContentType) => {
	switch (type){
		case 'useCase':
			return 'Use Case';
		case 'feature':
			return 'Feature';
		case 'industry':
			return 'Industry';
		default:
			return "";
	}
}

const RelatedContentItem = ({ relatedContent, className }: Props) => {
  const href = getHREF(relatedContent._type, relatedContent.slug);
  const eyebrow = getEyebrow(relatedContent._type);
	// 
  return (
    <Link
      href={href}
      className={clsx(
        'group relative flex gap-x-6 rounded-lg bg-surface p-4 transition-colors duration-200 ease-in-out',
        'hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        className
      )}
      aria-label={`${eyebrow}: ${relatedContent.label}`}
    >
      <div className="mt-3 flex flex-col">
        <div className="flex items-center justify-start gap-x-6">
          <div
            className={clsx(
              'flex size-8 flex-none items-center justify-center rounded-lg bg-surface',
              'transition-colors duration-200 ease-in-out',
              'group-hover:bg-white group-focus-visible:bg-white'
            )}
            aria-hidden
          >
            <NavIcon icon={relatedContent.menuIcon} size="lg" />
          </div>

          <div className="flex-col">
            <h5 className="font-brand text-xs font-light uppercase">{eyebrow}</h5>

            <div className="inline-flex items-center gap-1">
              <span
                className={clsx(
                  'font-brand text-lg font-extrabold truncate pr-1 underline-offset-2',
                  'group-hover:underline group-focus-visible:underline'
                )}
              >
                {relatedContent.label}
              </span>

              <HiOutlineArrowRight
                aria-hidden
                className={clsx(
                  'size-6 -translate-x-1 text-brand-500 opacity-0',
                  'transition-all duration-200 ease-in-out',
                  'group-hover:translate-x-0 group-hover:opacity-100',
                  'group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
                )}
              />
            </div>
          </div>
        </div>

        <div className="ml-14">{relatedContent.menuDescription}</div>
      </div>
    </Link>
  )
}

export default RelatedContentItem
