import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FORM_SUBMIT_URL } from '../config'
import { IconPerson, IconEnvelope, IconPhone, IconBuilding, IconBriefcase } from './Icons'
import './DemoModal.css'

async function sendToSlack(data) {
  await fetch('/api/slack-demo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function DemoModal({ isOpen, onClose }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }))
    setSubmitError(null)
  }

  const validate = () => {
    const next = {}
    if (!form.fullName?.trim()) next.fullName = 'Required'
    if (!form.email?.trim()) next.email = 'Required'
    else if (!EMAIL_REGEX.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone?.trim()) next.phone = 'Required'
    if (!form.company?.trim()) next.company = 'Required'
    if (!form.jobTitle?.trim()) next.jobTitle = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setSubmitError(null)
    const formData = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        jobTitle: form.jobTitle.trim(),
        program: 'Broker',
      }
    try {
      if (FORM_SUBMIT_URL) {
        const res = await fetch(FORM_SUBMIT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Submission failed')
      }
      try {
        await sendToSlack(formData)
      } catch (_) {
        // still redirect if Slack fails
      }
      onClose()
      navigate('/demo')
      setForm({ fullName: '', email: '', phone: '', company: '', jobTitle: '' })
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <div className="demo-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
      <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
        <div className="demo-modal__head">
          <h2 id="demo-modal-title" className="demo-modal__title">Register to watch the free demo</h2>
          <button type="button" className="demo-modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <form className="demo-modal__form" onSubmit={handleSubmit}>
          <div className="demo-modal__field">
            <label htmlFor="demo-fullName">Full Name *</label>
            <span className="demo-modal__input-wrap">
              <span className="demo-modal__icon" aria-hidden><IconPerson /></span>
              <input
                id="demo-fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                className={errors.fullName ? 'demo-modal__input--error' : ''}
              />
            </span>
            {errors.fullName && <span className="demo-modal__error">{errors.fullName}</span>}
          </div>
          <div className="demo-modal__field">
            <label htmlFor="demo-email">Email Address *</label>
            <span className="demo-modal__input-wrap">
              <span className="demo-modal__icon" aria-hidden><IconEnvelope /></span>
              <input
                id="demo-email"
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={errors.email ? 'demo-modal__input--error' : ''}
              />
            </span>
            {errors.email && <span className="demo-modal__error">{errors.email}</span>}
          </div>
          <div className="demo-modal__field">
            <label htmlFor="demo-phone">Phone number *</label>
            <span className="demo-modal__input-wrap">
              <span className="demo-modal__icon" aria-hidden><IconPhone /></span>
              <input
                id="demo-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={errors.phone ? 'demo-modal__input--error' : ''}
              />
            </span>
            {errors.phone && <span className="demo-modal__error">{errors.phone}</span>}
          </div>
          <div className="demo-modal__row">
            <div className="demo-modal__field">
              <label htmlFor="demo-company">Company *</label>
              <span className="demo-modal__input-wrap">
                <span className="demo-modal__icon" aria-hidden><IconBuilding /></span>
                <input
                  id="demo-company"
                  type="text"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className={errors.company ? 'demo-modal__input--error' : ''}
                />
              </span>
              {errors.company && <span className="demo-modal__error">{errors.company}</span>}
            </div>
            <div className="demo-modal__field">
              <label htmlFor="demo-jobTitle">Job Title *</label>
              <span className="demo-modal__input-wrap">
                <span className="demo-modal__icon" aria-hidden><IconBriefcase /></span>
                <input
                  id="demo-jobTitle"
                  type="text"
                  placeholder="Enter your role"
                  value={form.jobTitle}
                  onChange={(e) => update('jobTitle', e.target.value)}
                  className={errors.jobTitle ? 'demo-modal__input--error' : ''}
                />
              </span>
              {errors.jobTitle && <span className="demo-modal__error">{errors.jobTitle}</span>}
            </div>
          </div>
          {submitError && <p className="demo-modal__submit-error">{submitError}</p>}
          <div className="demo-modal__actions">
            <button type="button" className="demo-modal__btn demo-modal__btn--secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="demo-modal__btn demo-modal__btn--primary" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Watch Free Demo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
