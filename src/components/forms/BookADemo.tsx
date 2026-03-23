'use client'

import axios from 'axios'
import { useState } from 'react'
import { TextField, TextAreaField } from '@/components/Fields'
import { Button } from '../Button'
import Spinner from './Spinner'
import { HiOutlineCheck, HiOutlineExclamationCircle } from 'react-icons/hi2'
import { demoRequestSchema } from '@/lib/validation/demoRequestSchema'

const BookADemo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const getError = (fieldName: string) => errors[fieldName]?.[0]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSuccess(false)
    setIsError(false)
    setErrors({})
    setIsLoading(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      tel: String(formData.get('tel') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
    }

    const clientResult = demoRequestSchema.safeParse(payload)

    if (!clientResult.success) {
      const fieldErrors = clientResult.error.flatten().fieldErrors as Record<
        string,
        string[]
      >
      setErrors(fieldErrors)
      setIsLoading(false)

      const firstErrorField = Object.keys(fieldErrors)[0]
      if (firstErrorField) {
        const field = form.elements.namedItem(firstErrorField)
        if (field && typeof (field as HTMLElement).focus === 'function') {
          ;(field as HTMLElement).focus()
        }
      }

      return
    }

    try {
      await axios.post('/api/demo-request', clientResult.data)

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const fieldErrors = error.response?.data?.fieldErrors as
          | Record<string, string[]>
          | undefined

        if (fieldErrors) {
          setErrors(fieldErrors)

          const firstErrorField = Object.keys(fieldErrors)[0]
          if (firstErrorField) {
            const field = form.elements.namedItem(firstErrorField)
            if (field && typeof (field as HTMLElement).focus === 'function') {
              ;(field as HTMLElement).focus()
            }
          }
        } else {
          setIsError(true)
        }
      } else {
        setIsError(true)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex w-full flex-col">
      <div className="-mx-4 mt-4 flex-auto rounded-3xl bg-surface px-4 py-6 shadow-lg sm:mx-0 sm:flex-none sm:p-24">
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(getError('name'))}
            aria-describedby={getError('name') ? 'name-error' : undefined}
          />
          {getError('name') && (
            <p
              id="name-error"
              className="mt-2 text-sm text-danger"
              aria-live="polite"
            >
              {getError('name')}
            </p>
          )}

          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(getError('email'))}
            aria-describedby={getError('email') ? 'email-error' : undefined}
          />
          {getError('email') && (
            <p
              id="email-error"
              className="mt-2 text-sm text-danger"
              aria-live="polite"
            >
              {getError('email')}
            </p>
          )}

          <TextField
            label="Phone"
            id="tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(getError('tel'))}
            aria-describedby={getError('tel') ? 'tel-error' : undefined}
          />
          {getError('tel') && (
            <p
              id="tel-error"
              className="mt-2 text-sm text-danger"
              aria-live="polite"
            >
              {getError('tel')}
            </p>
          )}

          <TextField
            label="Company"
            id="company"
            name="company"
            type="text"
            aria-invalid={Boolean(getError('company'))}
            aria-describedby={getError('company') ? 'company-error' : undefined}
          />
          {getError('company') && (
            <p
              id="company-error"
              className="mt-2 text-sm text-danger"
              aria-live="polite"
            >
              {getError('company')}
            </p>
          )}

          <TextAreaField
            label="Message"
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a little about your service, team or current process."
            aria-invalid={Boolean(getError('message'))}
            aria-describedby={getError('message') ? 'message-error' : undefined}
          />
          {getError('message') && (
            <p
              id="message-error"
              className="mt-2 text-sm text-danger"
              aria-live="polite"
            >
              {getError('message')}
            </p>
          )}

          <div className="mt-6">
            {!isSuccess && (
              <Button type="submit" color="brand" disabled={isLoading}>
                {!isLoading ? (
                  <span className="flex items-center">Request a demo</span>
                ) : (
                  <span className="flex items-center">
                    Requesting demo
                    <span
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 animate-spin"
                    >
                      <Spinner />
                    </span>
                  </span>
                )}
              </Button>
            )}

            {isSuccess && (
              <div
                className="col-span-full rounded-md bg-brand-500 p-4"
                aria-live="polite"
              >
                <p className="flex items-center text-surface">
                  <HiOutlineCheck className="mr-3 size-7" />
                  <span className="font-semibold">Thank you.</span>&nbsp;Your
                  demo request has been received, and you will be contacted
                  shortly.
                </p>
              </div>
            )}

            {isError && (
              <div
                className="col-span-full mt-4 rounded-md bg-danger p-4"
                aria-live="assertive"
              >
                <p className="flex items-center text-surface">
                  <HiOutlineExclamationCircle className="mr-3 size-7" />
                  <span className="font-semibold">Oh dear.</span>&nbsp;There has
                  been a problem while requesting your demo. Please check your
                  details and try again.
                </p>
                <p className="mt-2 text-surface">
                  If the problem continues, please email{' '}
                  <a
                    href="mailto:info@salvify.co.uk"
                    className="cursor-pointer font-semibold underline"
                  >
                    info@salvify.co.uk
                  </a>
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookADemo
