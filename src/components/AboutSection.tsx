import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import jacopo2 from '../assets/jacopo2.webp'

export default function AboutSection() {
  const { t } = useLang()

  return (
    <section id="about" className="bg-[#221e1a] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-[#c9b87a] mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-[#f5f0e8]/60 text-sm leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
              <p>{t.about.p5}</p>
            </div>
            <div className="mt-10 pt-10 border-t border-[#c9b87a]/20 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-3">{t.about.formation}</p>
                <ul className="text-[#f5f0e8]/50 text-xs space-y-2">
                  <li>Barcelona College of Chiropractic</li>
                  <li>Università La Sapienza — Roma</li>
                  <li>Manual Physical Therapist</li>
                  <li>Rieducazione Posturale Globale</li>
                </ul>
              </div>
              <div>
                <p className="text-[#c9b87a] text-xs tracking-widest uppercase mb-3">{t.about.experience}</p>
                <ul className="text-[#f5f0e8]/50 text-xs space-y-2">
                  <li>Club Basquèt Roser — Barcelona</li>
                  <li>Urania Basket Milano</li>
                  <li>CM Ostiense — Roma</li>
                  <li>Columbus Clinic Center</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#c9b87a]/20" />
            <img
              src={jacopo2}
              alt="Jacopo Di Bernardini"
              className="w-full h-[500px] object-cover object-top relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
