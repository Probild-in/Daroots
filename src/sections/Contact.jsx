import { useState } from 'react'
import Reveal from '../components/Reveal'

const INTERESTS = ['Catalogue request', 'Create your design', 'Trade / wholesale', 'Hospitality project']

const MAX_FILE_MB = 5

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [interest, setInterest] = useState(INTERESTS[0])
  const [fileName, setFileName] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const data = new FormData(e.target)
    const file = data.get('design')
    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Design file is too large (max ${MAX_FILE_MB} MB). Please email it to info@daroots.in or share a link in the message.`)
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setSent(true)
      } else {
        setError((json.message || 'Something went wrong.') + (json.debug ? ` [${json.debug}]` : ''))
      }
    } catch {
      setError('Network error. Please email us at info@daroots.in.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact section pad no-roll" style={{ isolation: 'isolate' }}>
      <div className="wrap split">
        <div>
          <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Let's begin</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-s">
              Request a Catalogue <br /><em>or Create Your Design</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-s" style={{ color: 'rgba(243,233,220,0.8)' }}>
              Tell us about your space or project. Our export team replies within one business day
              with a catalogue, pricing, and lead times.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="contact-info mt-m">
              <div className="row">
                <div className="k">Email</div>
                <div className="v">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@daroots.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@daroots.in
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="k">WhatsApp</div>
                <div className="v">
                  <a href="https://wa.me/918604827114" target="_blank" rel="noopener noreferrer">+91 86048 27114</a>,{' '}
                  <a href="https://wa.me/916388441416" target="_blank" rel="noopener noreferrer">+91 6388 441 416</a>
                </div>
              </div>
              <div className="row"><div className="k">Atelier</div><div className="v">Kanpur, India</div></div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {sent ? (
            <div className="custom-card" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(243,233,220,0.3)' }}>
              <h3 className="display">Thank you.</h3>
              <p className="muted" style={{ color: 'rgba(243,233,220,0.8)' }}>
                Your enquiry is in. Our export desk will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
              <div className="field"><label htmlFor="n">Name</label><input id="n" name="name" required /></div>
              <div className="field"><label htmlFor="e">Email</label><input id="e" name="email" type="email" required /></div>
              <div className="field"><label htmlFor="c">Country</label><input id="c" name="country" /></div>
              <div className="field">
                <label>Interest</label>
                <div className="hoverselect" tabIndex={0}>
                  <span className="hoverselect__value">
                    {interest} <span className="hoverselect__caret">▾</span>
                  </span>
                  <ul className="hoverselect__menu" role="listbox">
                    {INTERESTS.map((opt) => (
                      <li key={opt}>
                        <button
                          type="button"
                          className={opt === interest ? 'is-active' : ''}
                          onClick={() => setInterest(opt)}
                        >
                          {opt}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <input type="hidden" name="interest" value={interest} />
              </div>

              {interest === 'Create your design' && (
                <div className="field full">
                  <label htmlFor="design">Upload your design</label>
                  <label className="filedrop" htmlFor="design">
                    <span className="filedrop__icon" aria-hidden="true">↑</span>
                    <span className="filedrop__text">
                      {fileName || 'Click to upload your design (JPG, PNG, PDF)'}
                    </span>
                  </label>
                  <input
                    id="design"
                    name="design"
                    type="file"
                    accept="image/*,.pdf,.ai,.eps"
                    className="filedrop__input"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  />
                </div>
              )}

              <div className="field full">
                <label htmlFor="m">Message</label>
                <textarea id="m" name="message" placeholder="Room size, colours, timeline…" />
              </div>
              <div className="full">
                <button className="btn" type="submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send enquiry'} <span className="btn__arrow">→</span>
                </button>
                {error && (
                  <p className="form__error" role="alert">{error}</p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
