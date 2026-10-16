import React, { useState, useRef } from 'react';
import './Contact.css';

// ─── Formspree endpoint (one identifiable location) ─────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrperveq';
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: 'chinmayneema20@gmail.com',
    href: 'mailto:chinmayneema20@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'chinmay-neema-b96532357',
    href: 'https://www.linkedin.com/in/chinmay-neema-b96532357',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'chinmayneema-dev',
    href: 'https://github.com/chinmayneema-dev',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    external: true,
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim())    errors.name    = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  if (!fields.message.trim()) errors.message = 'Message is required.';
  else if (fields.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const submitLock              = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (submitLock.current || status === 'loading') return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first field with error
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(`contact-${firstErrorField}`)?.focus();
      return;
    }

    submitLock.current = true;
    setStatus('loading');
    setErrorMsg('');

    try {
      const payload = {
        name:    form.name.trim(),
        email:   form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        _replyto: form.email.trim(),  // Formspree Reply-To header
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        // Formspree returns errors array
        const message = data?.errors?.map(e => e.message).join(', ')
          || 'Something went wrong. Please try again or email me directly.';
        setErrorMsg(message);
        setStatus('error');
      }
    } catch {
      setErrorMsg(
        'Network error. Please check your connection and try again, or reach me directly at chinmayneema20@gmail.com.'
      );
      setStatus('error');
    } finally {
      submitLock.current = false;
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title" id="contact-heading">
            Get In <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project idea, a question, or just want to say hello? I'd love to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          {/* Left: contact info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              You can reach me through any of these channels. I typically respond within a day or two.
            </p>

            <ul className="contact-links" role="list">
              {CONTACT_LINKS.map(({ id, label, value, href, icon, external }) => (
                <li key={id}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="contact-link"
                    aria-label={`${label}: ${value}${external ? ' (opens in new tab)' : ''}`}
                  >
                    <span className="contact-link-icon">{icon}</span>
                    <div>
                      <span className="contact-link-label">{label}</span>
                      <span className="contact-link-value">{value}</span>
                    </div>
                    {external && (
                      <svg className="contact-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success" role="alert" aria-live="polite">
                <div className="contact-success-icon" aria-hidden="true">✅</div>
                <h3>Message Sent!</h3>
                <p>
                  Your message was submitted successfully. A delivery confirmation email
                  will appear in your inbox if Formspree is configured correctly.{' '}
                  <strong>Note:</strong> Successful submission does not guarantee inbox delivery
                  — please verify that the form endpoint is active.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="contact-form"
              >
                {/* Honeypot spam protection */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" autoComplete="off" />

                {/* Error banner */}
                {status === 'error' && (
                  <div className="form-error-banner" role="alert" aria-live="assertive">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {errorMsg}
                  </div>
                )}

                {/* Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name <span className="form-required" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span id="error-name" className="form-field-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email <span className="form-required" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span id="error-email" className="form-field-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="form-required" aria-label="required">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                    placeholder="What's this about?"
                    aria-required="true"
                    aria-describedby={errors.subject ? 'error-subject' : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <span id="error-subject" className="form-field-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="form-required" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Tell me what you have in mind..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="error-message" className="form-field-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg form-submit"
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                  aria-label={status === 'loading' ? 'Sending message, please wait' : 'Send message'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="form-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
