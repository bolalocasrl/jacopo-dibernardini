import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import jacopo3 from '../assets/jacopo3.webp'

export default function SportSection() {
  const { t } = useLang()

  return (
    <section id="sport" className="bg-[#2a2520] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -inset-4 border border-[#c9b87a]/20" />
            <img
              src={jacopo3}
              alt="Jacopo Di Bernardini - Fisioterapia Sportiva"
              className="w-full h-[500px] object-cover object-center relative z-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="w-12 h-px bg-[#c9b87a] mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-6">
              {t.sport.title}
            </h2>
            <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-6">
              {t.sport.p1}
            </p>
            <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-10">
              {t.sport.p2}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#c9b87a]/20">
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-4">{t.sport.asPlayer}</p>
                <ul className="text-[#f5f0e8]/50 text-xs space-y-2">
                  <li>— Club Basquèt Roser</li>
                  <li>— Urania Basket Milano</li>
                  <li>— APD Vigna Pia Roma</li>
                </ul>
              </div>
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-4">{t.sport.asPhysio}</p>
                <ul className="text-[#f5f0e8]/50 text-xs space-y-2">
                  <li>— Club Basquèt Roser (EBA)</li>
                  <li>— Urania Basket Serie A2</li>
                  <li>— Club Social OSA Milano</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
