import { ImpactTone } from '@/types/IndustrySolution'
import { IconType } from 'react-icons'
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineEye,
  HiOutlineFingerPrint,
  HiOutlineTrash,
} from 'react-icons/hi2'
import StatCard from '../cards/StatCard'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'

interface ImpactStat {
  title: string
  stat: string
  tone: ImpactTone
  icon: IconType
}

const impactStats: ImpactStat[] = [
  {
    title: 'reduction in expired stock, increased cost saving',//'Less expired stock, more cost savings',
    stat: '40%',
    tone: 'success',
    icon: HiOutlineTrash,
  },
  {
    title: 'less time spent on admin and stock checks',//'Automated tasks and audit-ready workflows',
    stat: '60%',
    tone: 'warning',
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: 'traceability across every medicine movement',//'Every movement, batch and dose accounted for',
    stat: '100%',
    tone: 'info',
    icon: HiOutlineFingerPrint,
  },
  {
    title: 'real-time visibility across every vehicle and site',//'Real-time oversight of stock, anywhere.',
    stat: '24/7',
    tone: 'highlight',
    icon: HiOutlineEye,
  },
]
const HomepageImpacts = () => {
  return (
    <section
      id="salvify-platform-impact"
      aria-labelledby="salvify-platform-impact-title"
      className="py-12 lg:py-16"
    >
      <Container>
        <Eyebrow title="Impact in Practice" />
        <ContentH2 title="The Results That Matter" />
        <ContentP>
          Salvify helps healthcare teams reduce waste, stay compliant, and
          maintain complete visibility across every medicine and holding in real
          time.
        </ContentP>

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
    </section>
  )
}

export default HomepageImpacts
