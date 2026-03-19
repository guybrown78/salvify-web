import { ImpactTone } from '@/types/IndustrySolution'
import { IconType } from 'react-icons'
import {
	HiOutlineArrowDownOnSquare,
	HiOutlineArrowTrendingDown,
	HiOutlineCalendarDays,
	HiOutlineClipboardDocumentCheck,
	HiOutlineCube,
	HiOutlineExclamationTriangle,
	HiOutlineEye,
	HiOutlineFingerPrint,
	HiOutlineMapPin,
	HiOutlinePencilSquare,
	HiOutlineScale,
	HiOutlineShieldCheck,
	HiOutlineTrash,
} from 'react-icons/hi2'
import StatCard from '@/components/cards/StatCard'
import { Container } from '@/components/Container'

interface ImpactStat {
	title: string
	stat: string
	tone: ImpactTone
	icon: IconType
}

// const impactStats: ImpactStat[] = [
// 		{
// 		title: 'Minimum / Maximum Levels',
// 		stat: '250 / 600',
// 		tone: 'info',
// 		icon: HiOutlineScale,
// 	},
// 	{
// 		title: 'Units in Organisation',
// 		stat: '4,120',
// 		tone: 'highlight',
// 		icon: HiOutlineCube,
// 	},
// 	{
// 		title: 'Active Locations',
// 		stat: '38',
// 		tone: 'success',
// 		icon: HiOutlineMapPin,
// 	},
// 	{
// 		title: 'Nearest Expiry',
// 		stat: 'Feb 2027',
// 		tone: 'warning',
// 		icon: HiOutlineCalendarDays,
// 	},
// ]

// const impactStats: ImpactStat[] = [
// 	{
// 		title: 'Units in Organisation',
// 		stat: '48,320',
// 		tone: 'highlight',
// 		icon: HiOutlineCube,
// 	},
// 	{
// 		title: 'Used in Last 30 Days',
// 		stat: '1,284',
// 		tone: 'info',
// 		icon: HiOutlineArrowTrendingDown,
// 	},
// 	{
// 		title: 'Active Medicines',
// 		stat: '186',
// 		tone: 'success',
// 		icon: HiOutlineClipboardDocumentCheck,
// 	},
// 	{
// 		title: 'Expiry Risks',
// 		stat: '14',
// 		tone: 'warning',
// 		icon: HiOutlineExclamationTriangle,
// 	},
// 	{
// 		title: 'Controlled Drugs Balanced',
// 		stat: '100%',
// 		tone: 'success',
// 		icon: HiOutlineShieldCheck,
// 	},
// ]
const impactStats: ImpactStat[] = [
  {
    title: 'Units in Organisation',
    stat: '48,320',
    tone: 'highlight',
    icon: HiOutlineCube,
  },
  {
    title: 'Used (Last 30 Days)',
    stat: '1,284',
    tone: 'success',
    icon: HiOutlinePencilSquare,
  },
  {
    title: 'Low Stock Alerts',
    stat: '16',
    tone: 'warning',
    icon: HiOutlineArrowDownOnSquare,
  },
  {
    title: 'Expiring (30 Days)',
    stat: '2',
    tone: 'danger',
    icon: HiOutlineCalendarDays,
  },
]
const TestComponentPage = () => {
	return (
	
		<Container className="bg-white pt-20 pb-20">
        {/* <Eyebrow title="Impact in Practice" />
        <ContentH2 title="The Results That Matter" /> */}
        {/* <ContentP>
          Salvify helps healthcare teams reduce waste, stay compliant, and
          maintain complete visibility across every medicine and holding in real
          time.
        </ContentP> */}

        <dl className="mt-5 grid grid-cols-1 gap-x-0 gap-y-2 rounded-lg md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-4 lg:gap-y-0">
          {impactStats.map((item: ImpactStat) => {
            const IconCmp = item.icon
            return (
              <StatCard
                key={item.title}
                title={item.title}
                stat={item.stat}
                tone={item.tone}
                icon={<IconCmp className="size-8" aria-hidden="true" />}
              />
            )
          })}
        </dl>
      </Container>
	)
}

export default TestComponentPage