import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-300 bg-surface px-3 py-2 text-ink placeholder-ink/30 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-brand-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 mt-3 block text-sm font-medium text-salvify-secondary"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className={clsx(
          formClasses,
          props['aria-invalid'] && 'border-danger focus:border-danger focus:ring-danger'
        )}
      />
    </div>
  )
}

export function TextAreaField({
  id,
  label,
  className = '',
  rows = 5,
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea
        id={id}
        rows={rows}
        {...props}
        className={clsx(
          formClasses,
          'resize-y',
          props['aria-invalid'] && 'border-danger focus:border-danger focus:ring-danger'
        )}
      />
    </div>
  )
}

export function SelectField({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...props}
        className={clsx(
          formClasses,
          'pr-8',
          props['aria-invalid'] && 'border-danger focus:border-danger focus:ring-danger'
        )}
      />
    </div>
  )
}