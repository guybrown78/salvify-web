import clsx from 'clsx'
import { Button } from '../Button'
import { LogoMark } from '../Logo'
import { ContentH2 } from '../content/Titles'

type Props = {
  title: string
  text: string
	fadeBG?: boolean
}

const CTA = ({ title, text, fadeBG }: Props) => {
  return (
    <div className={clsx("flex items-center rounded-3xl bg-ink p-8 text-white shadow-lg", fadeBG ? `bg-ink/5` : 'bg-ink')

		}>
      <div className="mr-8 hidden items-center justify-center md:flex">
        <LogoMark className="h-32" palette="teal" accentVar="#FFF" />
      </div>
      <div>
        <ContentH2 title={title} />

        <p className="mt-3 max-w-2xl text-white/80">{text}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/book-a-demo" color="brand">
            Book a demo
          </Button>
          <Button href="/contact" variant="outline" color="brand">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CTA
