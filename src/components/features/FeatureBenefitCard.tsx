import React from 'react'

import { IconType } from 'react-icons';
import {
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
} from 'react-icons/hi2';



type Props = {
  title: string
  desc: string
  icon: React.ReactNode
}


const FeatureBenefitCard = ({ title, desc, icon }: Props) => {

	console.log(title,desc)
  return (
    <div className="relative lg:col-span-2">
      <div className="absolute inset-0" />
      <div className="relative flex h-full flex-col overflow-hidden">
        {icon}
        <div className="p-10 pt-4">
          <p className="mt-2 text-lg font-medium tracking-tight">{title}</p>
          <p className="mt-2 max-w-lg text-sm/6">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureBenefitCard
