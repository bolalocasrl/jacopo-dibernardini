import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-[#1a1713] py-8 border-t border-[#c9b87a]/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#f5f0e8]/30 text-xs tracking-widest">
          © {new Date().getFullYear()} Dott. Jacopo Di Bernardini — {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="text-[#f5f0e8]/20 text-xs tracking-widest hover:text-[#c9b87a] transition-colors">
            Privacy Policy
          </a>
          <p className="text-[#f5f0e8]/20 text-xs tracking-widest">
            {t.footer.vat}: DBRJCP90P11H501M
          </p>
        </div>
      </div>
    </footer>
  )
}
