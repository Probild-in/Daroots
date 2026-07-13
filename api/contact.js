import formidable from 'formidable'
import nodemailer from 'nodemailer'

/* Vercel serverless function: receives the contact form (multipart, incl. the
   uploaded design file) and emails it to info@daroots.in via Hostinger SMTP.
   Configure these Environment Variables in the Vercel project settings:
     SMTP_HOST  = smtp.hostinger.com        (default if unset)
     SMTP_PORT  = 465                        (default if unset)
     SMTP_USER  = info@daroots.in            (your Hostinger mailbox)
     SMTP_PASS  = <your Hostinger email password>
     TO_EMAIL   = info@daroots.in            (where enquiries are delivered; defaults to SMTP_USER)
   Note: Vercel caps the request body at ~4.5 MB, so uploads must stay under 5 MB. */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const form = formidable({ maxFileSize: 5 * 1024 * 1024, keepExtensions: true })
    const [fields, files] = await form.parse(req)
    const v = (k) => (Array.isArray(fields[k]) ? fields[k][0] : fields[k]) || ''

    // spam honeypot
    if (v('botcheck')) return res.status(200).json({ success: true })

    const name = v('name')
    const email = v('email')
    const country = v('country')
    const interest = v('interest')
    const message = v('message')

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ success: false, message: 'Email is not configured yet.' })
    }

    const port = Number(process.env.SMTP_PORT || 465)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    const attachments = []
    let design = files.design
    if (Array.isArray(design)) design = design[0]
    if (design && design.filepath) {
      attachments.push({ filename: design.originalFilename || 'design', path: design.filepath })
    }

    const esc = (s) => (s || '—').toString().replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const rows = [
      ['Name', name],
      ['Email', email],
      ['Country', country],
      ['Interest', interest],
      ['Message', message],
    ]
      .map(
        ([k, val]) =>
          `<tr><td style="padding:6px 14px;font-weight:600;vertical-align:top">${k}</td><td style="padding:6px 14px">${esc(val)}</td></tr>`,
      )
      .join('')

    await transporter.sendMail({
      from: `"Daroots Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email || undefined,
      subject: `New enquiry: ${interest || 'General'} — ${name || 'Website visitor'}`,
      html: `<h2 style="font-family:Georgia,serif">New enquiry from the Daroots website</h2>
             <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>
             ${attachments.length ? '<p style="font-family:Arial,sans-serif;font-size:13px;color:#666">A design file is attached.</p>' : ''}`,
      attachments,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('CONTACT_FORM_ERROR:', err)
    const tooBig = /maxFileSize|exceeded/i.test(err?.message || '')
    return res.status(tooBig ? 413 : 500).json({
      success: false,
      message: tooBig
        ? 'Design file is too large (max 5 MB). Please email it to info@daroots.in or share a link.'
        : 'Sorry, the message could not be sent. Please email info@daroots.in directly.',
      // TEMPORARY debug detail — remove once the form is confirmed working:
      debug: `${err?.code || ''} ${err?.message || err}`.trim(),
    })
  }
}
