
import { Container } from '@/components/Container'
import { getFaqs } from '@/sanity/sanity-utils'
import { Faq } from '@/types/Faq'

const FAQPage = async () => {

  const faqs: Faq[] = await getFaqs();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden h-full"
    >
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
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((faq) => (
            <li key={faq._id}>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default FAQPage
