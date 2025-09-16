// import type { BenefitIconKey } from '@/sanity/schemas/benefit-schema';

import { BenefitIconKey } from "@/utils/iconMap";

export interface Benefit {
  _id: string;
  title: string;
  statement?: string;
  icon?: BenefitIconKey;
	}