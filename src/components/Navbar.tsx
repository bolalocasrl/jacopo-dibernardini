import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import type { Lang } from '../i18n/translations'
import sagomelogo from '../assets/logojacopo1.png'

const langs: Lang[] = ['it', 'es', 'en']

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#2a2520]/95 backdrop-blur-sm border-b border-[#c9b87a]/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('#hero')} className="outline-none">
          <img src={sagomelogo} alt="JDB" className="h-14 w-auto opacity-80" />
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm tracking-widest uppercase text-[#f5f0e8]/70 hover:text-[#c9b87a] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-4 border-l border-[#c9b87a]/30 pl-4">
            {langs.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs tracking-widest uppercase transition-colors ${lang === l ? 'text-[#c9b87a]' : 'text-[#f5f0e8]/40 hover:text-[#c9b87a]'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <button className="md:hidden text-[#c9b87a]" onClick={() => setOpen(!open)}>
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#2a2520] border-t border-[#c9b87a]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm tracking-widest uppercase text-[#f5f0e8]/70 text-left"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-3 pt-2 border-t border-[#c9b87a]/20">
            {langs.map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false) }}
                className={`text-xs tracking-widest uppercase ${lang === l ? 'text-[#c9b87a]' : 'text-[#f5f0e8]/40'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
