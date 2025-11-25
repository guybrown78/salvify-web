import React from 'react'

interface Props {
  eyebrow: string
  title: string
  text: string
}
const BentoText = ({ eyebrow, title, text }: Props) => {
  return (
    <div className="p-10">
      <h3 className="font-brand text-sm/4 font-extrabold text-brand-500">
        {eyebrow}
      </h3>
      <p className="mt-2 text-lg font-medium tracking-tight">{title}</p>
      <p className="mt-2 max-w-lg text-sm/6">{text}</p>
    </div>
  )
}

export default BentoText
