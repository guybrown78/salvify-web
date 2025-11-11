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
	HiOutlineUserPlus,
	HiOutlineQuestionMarkCircle,
	HiOutlineBeaker,
	HiOutlineArrowPathRoundedSquare,
	HiOutlineArrowsRightLeft,
	HiOutlineGlobeEuropeAfrica,
} from 'react-icons/hi2';

import {
	LuAmbulance,
  LuMapPin,
  LuPlaneLanding,
	LuPlaneTakeoff,
	LuActivity,
	LuPawPrint
  // LuHospital,
  // LuHelicopter,
  // LuShip,
  // LuShipWheel,
  // LuAnchor,
  // LuLifeBuoy,
  // LuFactory,
  // LuWind,
  // LuTooth,
  // LuPawPrint,
  // LuPlaneTakeoff,
  // LuBuilding,
  // LuShieldCheck,
  // LuFlame,
} from "react-icons/lu";

import { 
	LiaToothSolid,
	LiaHelicopterSolid
} from "react-icons/lia";
import { RiToothLine } from "react-icons/ri";

import type { BenefitIconKey } from '@/sanity/shared/benefit-icons';
import type { NavIconKey } from './nav-types';
import { FeatureIconKey } from '@/sanity/shared/feature-icons';
import type { UseCaseIconKey } from '@/sanity/shared/useCase-icons'
import type { IndustryIconKey } from '@/sanity/shared/industry-icons';
import { mergeIconMaps } from './MergeIconMaps';



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
	HiOutlineArrowPathRoundedSquare,
	HiOutlineArrowsRightLeft,
	HiOutlineGlobeEuropeAfrica,
	HiOutlineBuildingOffice2,
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

export const useCaseIconMap = {
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
} satisfies Record<UseCaseIconKey, IconType>

export type { UseCaseIconKey }



export const industryIconMap = {
	LuAmbulance,
	LuMapPin,
	LuPlaneLanding,
	LuPlaneTakeoff,
	LuActivity,
	LiaToothSolid,
	RiToothLine,
	LuPawPrint,
} satisfies Record<IndustryIconKey, IconType>

export type { IndustryIconKey }


export const NavItemIconMap = mergeIconMaps(
  [
	featureIconMap,
	useCaseIconMap,
	industryIconMap,
  // HiOutlineBuildingOffice2,
  {
		HiOutlineChartBar,
		HiOutlineChatBubbleLeftRight,
		HiOutlineClipboardDocumentCheck,
		HiOutlineClock,
		// HiOutlineCube,
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
		HiOutlineQuestionMarkCircle
	}
],
  { precedence: 'first-wins', warnDuplicates: true }
) as Record<NavIconKey, IconType>