import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import jacopo1 from '../assets/jacopo1.webp'

export default function HeroSection() {
  const { t } = useLang()

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#2a2520]">
      <div
        className="absolute right-0 top-0 h-full w-full md:w-[55%]"
        style={{
          backgroundImage: `url(${jacopo1})`,
          backgroundSize: 'cover',
          backgroundPosition: '75% 0%',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a2520] via-[#2a2520]/80 md:via-[#2a2520]/40 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="md:max-w-[50%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-[#c9b87a] mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl text-[#f5f0e8] leading-tight mb-3">
            {t.hero.title}
          </h1>
          <p className="text-[#c9b87a] tracking-widest uppercase text-sm md:text-base mb-8">
            {t.hero.subtitle}
          </p>
          <div className="w-8 h-px bg-[#c9b87a]/40 mb-8" />
          <p className="text-[#f5f0e8]/50 text-sm tracking-widest mb-12">
            {t.hero.locations}
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block bg-[#c9b87a] text-[#2a2520] px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors duration-300"
          >
            {t.hero.cta}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
