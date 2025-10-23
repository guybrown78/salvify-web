
import type { PortableTextBlock } from '@portabletext/types'
import type { Benefit } from './Benefit'
import type { Visual } from './Global'
import { UseCaseIconKey } from '@/sanity/shared/useCase-icons'

export type UseCaseTemplate = 'standard' | 'accent' | 'premium'

export interface UseCaseBenefitItem {
  featureBenefitTitle?: string
  benefit?: Benefit
}

export type RelatedContentType = 'useCase' | 'feature'

export interface RelatedContentCard {
  _type: RelatedContentType
  _id: string
  title: string
  slug: string
  // For card/menu rendering
  label?: string
  menuIcon?: UseCaseIconKey
  menuDescription?: string
}

export interface UseCase {
  _id: string

  // Page + URL
  title: string
  slug: string
  template: UseCaseTemplate

  // Navigation / menu (kept parallel to Feature)
  inMenu?: boolean
  menuLabel?: string
  menuOrder?: number
  menuIcon?: UseCaseIconKey
  menuDescription?: string

  // Hero / intro
  heroEyebrow?: string
  heroTitle: string
  heroSubTitle?: string
  overview?: string
  heroVisual?: Visual
  heroComponentKey?: string
  heroSvg?: { url: string; alt?: string }
  heroImage?: { url: string; alt?: string }

  // Problem / Challenge
  problemEyebrow?: string
  problemTitle?: string
  problemIntro?: string
  problemPoints?: string[]
  problemImage?: { url: string; alt?: string }
  problemComponentKey?: string

  // How Salvify helps
  howItWorks?: PortableTextBlock[]
  howVisual?: Visual
  howComponentKey?: string
  howImage?: { url: string; alt?: string }

  // Benefits
  benefitsIntro?: string
  benefits?: UseCaseBenefitItem[]

  // Who it’s for
  audiences?: string[]

  // Related internal links (use-cases or features)
  relatedContent?: RelatedContentCard[]

  // CTA
  ctaTitle?: string
  ctaBody?: string

  // SEO
  metaDescription?: string
  keywords?: string

  // Admin
  publishedAt?: string
}

export interface UseCaseMenuItem {
  _id: string
  slug: string
  label: string
  template?: UseCaseTemplate
  menuOrder?: number
  menuIcon?: UseCaseIconKey
  menuDescription?: string
}
