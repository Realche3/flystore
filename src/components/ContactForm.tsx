'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'

export default function ContactForm() {
  const { colors, typography, buttons } = siteConfig
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className={`w-full py-20 px-6 md:px-12 lg:px-24 ${colors.background} ${typography.fontFamily}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className={`${colors.secondaryText} text-base leading-relaxed`}>
            Got a question about a drop? Want to collab? Or just say hey? Fill the form and we'll be in touch.
          </p>
          <p className="text-sm text-neutral-600 mt-4">Response time: usually within 24 hours.</p>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="md:w-1/2 w-full bg-neutral-900 rounded-xl p-6 shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm text-white">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-white">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-white">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <button
                type="submit"
                className={`${buttons.primary} bg-gradient-to-r ${colors.gradient} ${colors.buttonShadow} w-full`}
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center text-lg text-lime-400 font-semibold">
              ✅ Message sent! We’ll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
