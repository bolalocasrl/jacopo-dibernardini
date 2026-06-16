import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

export default function ServicesSection() {
  const { t } = useLang()

  return (
    <section id="services" className="bg-[#2a2520] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-px bg-[#c9b87a] mb-6 mx-auto" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-4">
            {t.services.title}
          </h2>
          <p className="text-[#f5f0e8]/40 text-sm tracking-widest">
            {t.services.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c9b87a]/10">
          {t.services.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2520] p-8 md:p-10 hover:bg-[#2f2a24] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-[#c9b87a]/30 text-xs tracking-widest mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-[#f5f0e8] font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
