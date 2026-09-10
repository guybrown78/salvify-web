import CdrSection from './CdrSection'
import CdrJourneyStepper from './CdrJourneyStepper'

const CdrJourney = () => {
  return (
    <CdrSection
      id="cdr-journey"
      eyebrow="The CD journey"
      title="Manage the complete controlled drug journey"
      lead="Each approved location holds its own register for each drug it holds. A station store's morphine register is separate from an ambulance's, which is separate from a response bag's. Every receipt, move, administration, waste and destruction posts to the right register, and the running total updates itself."
      tone="ink"
      align="center"
      decor
    >
      <CdrJourneyStepper />
    </CdrSection>
  )
}

export default CdrJourney
