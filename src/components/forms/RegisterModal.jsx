import { useState } from 'react'
import { X } from 'lucide-react'

export default function RegisterModal({ isOpen, onClose, containerRef }) {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    admissionNo: '',
    name: '',
    contact: '',
    password: '',
    confirm: '',
  })
  const [error, setError] = useState('')

  if (!isOpen) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.admissionNo || !form.name || !form.contact || !form.password) {
      setError('Please fill in every field.')
      return
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }

    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(11,15,25,0.55)' }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-modal-title"
        className="relative w-full max-w-xs sm:max-w-md rounded-modal p-6 sm:p-8"
        style={{ backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-3)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close registration form"
          className="absolute top-4 right-4 sm:top-5 sm:right-5"
          style={{ color: 'var(--color-ink-40)' }}
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <h2 id="register-modal-title" className="heading-2">
              Request received
            </h2>
            <p className="body mt-3">
              We've sent a verification link to the contact you provided.
              Portal access activates once the school office confirms your
              ward's admission number.
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-6">
              Done
            </button>
          </div>
        ) : (
          <>
            {/* School logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/favicon.svg"
                alt="Vasant Valley School"
                className="w-16 h-16 sm:w-20 sm:h-20"
                loading="eager"
              />
            </div>

            <h2 id="register-modal-title" className="heading-2 text-center">
              Register for portal access
            </h2>
            <p className="text-small mt-2 text-center">
              For parents only. Teachers and students receive credentials
              directly from the school office.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <Field label="Ward's admission number" value={form.admissionNo} onChange={update('admissionNo')} />
              <Field label="Your full name" value={form.name} onChange={update('name')} />
              <Field label="Registered mobile or email" value={form.contact} onChange={update('contact')} />
              <Field label="Create password" type="password" value={form.password} onChange={update('password')} />
              <Field label="Confirm password" type="password" value={form.confirm} onChange={update('confirm')} />

              {error && (
                <p role="alert" className="text-small" style={{ color: 'var(--color-error)' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center"
              >
                {status === 'submitting' ? 'Submitting…' : 'Register'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, type = 'text', value, onChange }) {
  return (
    <label className="block text-left">
      <span className="text-small font-semibold" style={{ color: 'var(--color-ink)' }}>
        {label}
      </span>
      <input type={type} value={value} onChange={onChange} className="input mt-2" required />
    </label>
  )
}