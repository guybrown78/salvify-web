import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import Link from 'next/link'

const faqs = [
  [
    {
      question: 'Does Salvify handle purchases?',
      answer:
        'Salvify can create order requests, like a glorified shopping list. This is then sent to your admin and its up to them to purchase the order.',
    },
    {
      question: 'Am I committed to using a particular supplier?',
      answer:
        'No, we will help you prepare your order by identifying what you need.',
    },
		{
      question: 'How do I get to demo Salvify before I purchase it?',
      answer:
        'Fill in the request a demo form and our sales team will get in touch to organise everything else.',
    },
  ],
  [
    {
      question: 'Can I decide on what inventory/formulary we carry?',
      answer:
        'Absolutely, we understand medicines, brands and policies change. You are in full control of your stock and can swap your medicines anytime.',
    },
    {
      question:
        'Will I be assisted with onboarding my inventory onto Salvify?',
      answer:
        'We understand the most time consuming part of an inventory system is onboarding stock items, we will put together a package of assistance to ease your transition should you require it. ',
    },
    {
      question:
        'How do I put a new item onto my inventory?',
      answer:
        'Admin users have rights to change the inventory, this is so that a preset inventory is adhered to.',
    },
  ],
  [
    {
      question: 'Will it track equipment service dates?',
      answer:
        'Absolutely, just put your next service date in and it will alert you that action is required.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'Yes, Salvify is a SaaS (software as a service) application which is continuesly updated and improved.',
    },
    {
      question: 'Can I list foreign medications?',
      answer:
        'Yes, the manes of the medications is entirely up to you.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and someone will get back to you. There are further Frequently Asked Questions on our <Link href="/faqs">FAQs</Link> page
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
