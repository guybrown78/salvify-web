import { NavIconKey } from "@/utils/nav-types";

export type Visual = 'image' | 'component' | 'svg';

export type RelatedContentType = 'useCase' | 'feature' | 'industry'

export interface RelatedContentCard {
	_type: RelatedContentType
	_id: string
	title: string
	slug: string
	// For card/menu rendering
	label?: string
	menuIcon?: NavIconKey
	menuDescription?: string
}

