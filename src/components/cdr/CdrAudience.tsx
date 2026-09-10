import {
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineArrowsRightLeft,
} from 'react-icons/hi2'
import { LuAmbulance, LuPlaneTakeoff } from 'react-icons/lu'
import CdrSection from './CdrSection'
import CdrCard from './CdrCard'

const audiences: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: <LuAmbulance className="size-6" aria-hidden="true" />,
    title: 'NHS ambulance services',
    desc: 'Controlled drugs held across regions, stations, vehicles and response bags.',
  },
  {
    icon: <HiOutlineTruck className="size-6" aria-hidden="true" />,
    title: 'Private ambulance providers',
    desc: 'Distributed fleets and contracts that still need a defensible register.',
  },
  {
    icon: <HiOutlineUserGroup className="size-6" aria-hidden="true" />,
    title: 'Event and mass-gathering medical',
    desc: 'Time-boxed operations that stand up, run and stand down at pace.',
  },
  {
    icon: <LuPlaneTakeoff className="size-6" aria-hidden="true" />,
    title: 'Air ambulance and repatriation',
    desc: 'Controlled drugs moving with the patient, across bases and borders.',
  },
  {
    icon: <HiOutlineGlobeEuropeAfrica className="size-6" aria-hidden="true" />,
    title: 'Offshore, maritime and remote-site teams',
    desc: 'Medical provision far from a pharmacy, with real accountability demands.',
  },
  {
    icon: <HiOutlineArrowsRightLeft className="size-6" aria-hidden="true" />,
    title: 'Specialist patient transport',
    desc: 'Custody that changes hands as patients move between care settings.',
  },
]

const CdrAudience = () => {
  return (
    <CdrSection
      id="cdr-audience"
      eyebrow="Who it's for"
      title="For organisations managing controlled drugs on the move"
      lead="Salvify supports any organisation managing controlled drugs across multiple mobile or distributed locations. It is not designed around a single fixed pharmacy or hospital store."
      tone="muted"
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((a) => (
          <CdrCard key={a.title} icon={a.icon} title={a.title} accent="brand">
            {a.desc}
          </CdrCard>
        ))}
      </div>
    </CdrSection>
  )
}

export default CdrAudience
