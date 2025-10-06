import Image from 'next/image'
import Link from 'next/link'
interface Props {
  name: string
  href?: string
  image?: string
  onClick?: () => void
}

const NavFooterCard = ({ name, href, image, onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative cursor-pointer "
    >
      <div className="relative flex h-full origin-center scale-100 flex-row gap-y-1 rounded-lg border border-surface/50 bg-surface/50 shadow-sm transition-transform group-hover:scale-105 lg:flex-col">
        {image && (
          <Image
            src={image}
            alt={name}
            width={30}
            height={20}
            className="aspect-auto w-40 rounded-b-lg rounded-t-lg bg-salvify-secondary/10 object-cover lg:w-full lg:rounded-b-none"
          />
        )}
        <div className="items-between flex flex-1 flex-col px-2 py-1">
          <span className="text-xs">
            {name}
            {' - '}
            <span className="transition-colors group-hover:text-brand-500 group-hover:underline">
              Continue reading...
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default NavFooterCard
