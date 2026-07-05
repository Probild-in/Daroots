import { useState } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Front-end only demo. Wire to your email/CRM endpoint later (see README).
    setSent(true)
  }

  return (
    <section id="contact" className="contact section pad no-roll" style={{ isolation: 'isolate' }}>
      <div className="wrap split">
        <div>
          <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Let's begin</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-s">
              Request a Catalogue <br /><em>or Begin a Commission</em>
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
              <div className="row"><div className="k">Email</div><div className="v">export@daroots.com</div></div>
              <div className="row"><div className="k">WhatsApp</div><div className="v">+91 98765 43210</div></div>
              <div className="row"><div className="k">Atelier</div><div className="v">Bhadohi, Uttar Pradesh, India</div></div>
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
              <div className="field"><label htmlFor="n">Name</label><input id="n" name="name" required /></div>
              <div className="field"><label htmlFor="e">Email</label><input id="e" name="email" type="email" required /></div>
              <div className="field"><label htmlFor="c">Country</label><input id="c" name="country" /></div>
              <div className="field">
                <label htmlFor="i">Interest</label>
                <select id="i" name="interest">
                  <option>Catalogue request</option>
                  <option>Custom commission</option>
                  <option>Trade / wholesale</option>
                  <option>Hospitality project</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="m">Message</label>
                <textarea id="m" name="message" placeholder="Room size, colours, timeline…" />
              </div>
              <div className="full">
                <button className="btn" type="submit">Send enquiry <span className="btn__arrow">→</span></button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
