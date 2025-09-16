import type { PortableTextBlock } from '@portabletext/types'
import type { Benefit } from './Benefit'

export type FeatureTemplate = 'standard' | 'accent' | 'premium'

export interface FeatureBenefitItem {
  featureBenefitTitle?: string
  benefit?: Benefit
}

export interface Feature {
  _id: string

  // Page + URL
  title: string
  slug: string
  template: FeatureTemplate

	// Navigation / menu
	inMenu?: boolean;
  menuLabel?: string;
  menuOrder?: number;

  // Hero / intro
  heroTitle: string
  heroSubTitle?: string
  overview?: PortableTextBlock[]
  heroImage?: { url: string; alt?: string }

  // How it works
  howItWorks?: PortableTextBlock[]
  howImage?: { url: string; alt?: string }

  // Benefits
  benefitsIntro?: string
  benefits?: FeatureBenefitItem[]

  // Optional long-form
  body?: PortableTextBlock[]

  // SEO
  metaDescription?: string
  keywords?: string

  // Admin
  publishedAt?: string
}

export interface FeatureMenuItem {
  _id: string;
  slug: string;
  label: string;
  template?: FeatureTemplate;
  menuOrder?: number;
}