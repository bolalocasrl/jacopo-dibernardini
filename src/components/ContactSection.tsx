import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function ContactSection() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [privacy, setPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacy) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xvznydpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#221e1a] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-[#c9b87a] mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-4">
              {t.contact.title}
            </h2>
            <p className="text-[#f5f0e8]/40 text-sm mb-12">{t.contact.subtitle}</p>
            <div className="space-y-6">
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-3">{t.contact.directContact}</p>
                <a href="tel:+393807190072" className="text-[#f5f0e8]/70 text-sm hover:text-[#c9b87a] transition-colors block mb-1">+39 380 719 0072</a>
                <a href="mailto:jacopo.dibernardini@yahoo.it" className="text-[#f5f0e8]/70 text-sm hover:text-[#c9b87a] transition-colors block">jacopo.dibernardini@yahoo.it</a>
              </div>
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-3">{t.contact.locations}</p>
                <p className="text-[#f5f0e8]/50 text-sm">Barcelona · Milano · Roma</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'sent' ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-[#c9b87a] text-sm tracking-widest">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={t.contact.name}
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#2a2520] border border-[#c9b87a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9b87a]/60 transition-colors"
                />
                <input
                  type="email"
                  placeholder={t.contact.email}
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#2a2520] border border-[#c9b87a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9b87a]/60 transition-colors"
                />
                <input
                  type="tel"
                  placeholder={t.contact.phone}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#2a2520] border border-[#c9b87a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9b87a]/60 transition-colors"
                />
                <textarea
                  placeholder={t.contact.message}
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#2a2520] border border-[#c9b87a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9b87a]/60 transition-colors resize-none"
                />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={e => setPrivacy(e.target.checked)}
                    className="mt-0.5 accent-[#c9b87a]"
                  />
                  <span className="text-[#f5f0e8]/40 text-xs leading-relaxed">
                    {t.contact.privacyText}{' '}
                    <span
                      onClick={() => { window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new PopStateEvent('popstate')) }}
                      className="text-[#c9b87a] hover:underline cursor-pointer"
                    >
                      {t.contact.privacyLink}
                    </span>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending' || !privacy}
                  className="w-full bg-[#c9b87a] text-[#2a2520] py-3 text-sm tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? t.contact.sending : t.contact.send}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs">{t.contact.error}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
