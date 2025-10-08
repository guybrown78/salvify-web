import type { PortableTextBlock } from '@portabletext/types'
import type { Benefit } from './Benefit'
import { FeatureIconKey } from '@/sanity/shared/feature-icons'
import { Visual } from './Global'

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
	menuIcon?: FeatureIconKey;
  menuDescription?: string;

  // Hero / intro
	heroEyebrow?: string
  heroTitle: string
  heroSubTitle?: string
  overview?: string
  heroImage?: { url: string; alt?: string }

	// Problem Context
	problemEyebrow?: string;
	problemTitle?: string;
	problemIntro?: string;
	problemPoints?: string[];
	problemImage?: { url: string; alt?: string };
	problemComponentKey?: string;

  // How it works
	howItWorks?: PortableTextBlock[];
  howVisual?: Visual;
  howComponentKey?: string;
  howImage?: { url: string; alt?: string };

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
	menuIcon?: FeatureIconKey;
  menuDescription?: string;
}