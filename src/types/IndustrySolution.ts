// /types/IndustrySolution.ts
import type { RelatedContentCard, Visual } from './Global' // if you render any shared visuals later
import type { Benefit } from './Benefit'
import type { IndustryIconKey } from '@/sanity/shared/industry-icons'
import { BenefitIconKey } from '@/utils/iconMap'

/** Minimal referenced shapes used across the site */

export interface TestimonialRef {
  _id: string
  quote?: string
  author?: string
  role?: string
  organisation?: string
}
export interface CaseStudyRef {
  _id: string
  title?: string
  slug?: string
  summary?: string
}


export interface ImageRef {
  url: string
  alt?: string
}

/** Section item types */
export interface IndustryChallenge {
  title: string
  summary?: string
}

export interface IndustryHelpBlock {
  title: string
  summary?: string
}

export interface IndustryBenefitItem {
  industryBenefitTitle?: string
  benefit: Benefit
}

export interface IndustryOperationalStep {
  stepTitle?: string
  stepBody?: string
}

export type ImpactTone = 'success' | 'warning' | 'danger' | 'info' | 'highlight'

export interface IndustryImpactStat {
  value?: string     // e.g. "70%"
  label?: string     // e.g. "reduction in expired meds"
  note?: string
	icon?: BenefitIconKey
  tone?: ImpactTone
}



/** Main document type matching schema: `industry-solution` */
export interface IndustrySolution {
  _id: string

  // Page + URL
  title: string
  slug: string

	industryRef?: { _id: string; title?: string; slug?: string }

  // Navigation / menu
  inMenu?: boolean
  menuLabel?: string
  menuIcon?: IndustryIconKey
  menuDescription?: string
  menuOrder?: number

  // Hero
  heroEyebrow?: string
  heroTitle: string
  heroSubTitle?: string
  overview?: string
  heroImage?: { url: string; alt?: string }

  // Regulatory / context
  regulatoryContext?: string[]

  // Challenges
  challengesTitle?: string
  challenges?: IndustryChallenge[]

  // How Salvify Helps
  helpTitle?: string
	helpIntro?: string
  helpBlocks?: IndustryHelpBlock[]

	// Benefits (reused Benefit library)
  benefitsIntro?: string
  industryBenefits?: IndustryBenefitItem[]

  // Feature Highlights
  featureHighlights?: RelatedContentCard[]

  // Operational Flow
  flowTitle?: string
  operationalSteps?: IndustryOperationalStep[]

  // Impact Stats
  impactStats?: IndustryImpactStat[]

  // Proof
  testimonials?: TestimonialRef[]
  // caseStudies?: CaseStudyRef[]

	// Internal linking (SEO depth)
  // relatedContent?: RelatedContentCard[]

  // CTA
  ctaTitle?: string
  ctaBody?: string

  // SEO
  noindex?: boolean
  ogImage?: { url: string; alt?: string }
  metaDescription?: string
  keywords?: string

  // Admin
  publishedAt?: string
}


export interface IndustrySolutionMenuItem {
  _id: string
  slug: string
  label: string
  menuOrder?: number
  menuIcon?: IndustryIconKey
  menuDescription?: string
}