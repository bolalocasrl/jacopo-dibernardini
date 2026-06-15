import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { useLang } from '../i18n/LangContext'
import jacopo1 from '../assets/jacopo1.webp'

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <div className="relative min-h-[100vh] h-[100vh] flex items-center overflow-hidden bg-[#2a2520]">
        <div
          className="absolute right-0 top-0 h-full w-full md:w-[55%]"
          style={{
            backgroundImage: `url(${jacopo1})`,
            backgroundSize: 'cover',
            backgroundPosition: '60% 0%',
            backgroundRepeat: 'no-repeat',
            paddingTop: '120px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2520] via-[#2a2520]/90 md:via-[#2a2520]/60 to-transparent" />
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:max-w-[50%]">
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
            <Link
              href="/contact"
              className="inline-block bg-[#c9b87a] text-[#2a2520] px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors duration-300"
            >
              {t.hero.cta}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#221e1a] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            className="text-[#c9b87a] tracking-widest uppercase text-xs mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.nav.services}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c9b87a]/10">
            {t.services.items.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
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
      </div>
    </>
  )
}
