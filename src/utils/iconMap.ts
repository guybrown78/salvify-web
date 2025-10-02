import { IconType } from 'react-icons';
import {
	HiOutlineAdjustmentsHorizontal,
	HiOutlineArrowDownTray,
	HiOutlineBolt,
	HiOutlineBuildingOffice2,
	HiOutlineChartBar,
	HiOutlineChartBarSquare,
	HiOutlineChartPie,
	HiOutlineChatBubbleLeftRight,
	HiOutlineCheck,
	HiOutlineCheckCircle,
	HiOutlineClipboardDocumentCheck,
	HiOutlineClipboardDocumentList,
	HiOutlineClock,
	HiOutlineCube,
	HiOutlineDocumentChartBar,
	HiOutlineDocumentCheck,
	HiOutlineDocumentText,
	HiOutlineExclamationCircle,
	HiOutlineEye,
	HiOutlineFolder,
	HiOutlineHashtag,
	HiOutlineInformationCircle,
	HiOutlineKey,
	HiOutlineLightBulb,
	HiOutlineLockClosed,
	HiOutlineNewspaper, HiOutlinePuzzlePiece,
	HiOutlineShieldCheck,
	HiOutlineShieldExclamation,
	HiOutlineSquares2X2,
	HiOutlineTrash,
	HiOutlineUserGroup,
	HiOutlineUserPlus
} from 'react-icons/hi2';

import type { BenefitIconKey } from '@/sanity/shared/benefit-icons';
import type { NavIconKey } from './nav-types';
import { FeatureIconKey } from '@/sanity/shared/feature-icons';

export const benefitIconMap = {
  HiOutlineEye,
  HiOutlineExclamationCircle,
  HiOutlineChartBar,
  HiOutlineChartBarSquare,
  HiOutlineClock,
  HiOutlineTrash,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineCheck,
  HiOutlineLockClosed,
  HiOutlineKey,
  HiOutlineUserGroup,
  HiOutlineDocumentChartBar,
  HiOutlineDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineUserPlus,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineFolder,
  HiOutlineChartPie,
  HiOutlineArrowDownTray,
} satisfies Record<BenefitIconKey, IconType>;

export type { BenefitIconKey };


export const featureIconMap = {
  HiOutlineEye,
  HiOutlineClock,
  HiOutlineClipboardDocumentCheck,
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineUserGroup,
} satisfies Record<FeatureIconKey, IconType>;

export type { FeatureIconKey };

export const NavItemIconMap = {
	...featureIconMap,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineHashtag,
  HiOutlineInformationCircle,
  HiOutlineKey,
  HiOutlineLightBulb,
  HiOutlineNewspaper,
  HiOutlinePuzzlePiece,
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
} satisfies Record<NavIconKey, IconType>;