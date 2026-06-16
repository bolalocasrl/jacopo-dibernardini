import { useLang } from '../i18n/LangContext'
import logojacopo1 from '../assets/logojacopo1.png'

interface FooterProps {
  navigateTo: (path: string) => void
}

export default function Footer({ navigateTo }: FooterProps) {
  const { t } = useLang()
  return (
    <footer className="bg-[#1a1713] py-12 border-t border-[#c9b87a]/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <img src={logojacopo1} alt="Jacopo Di Bernardini" className="h-16 w-auto opacity-60" />
        <div className="w-8 h-px bg-[#c9b87a]/30" />
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-[#f5f0e8]/30 text-xs tracking-widest">
            © {new Date().getFullYear()} Dott. Jacopo Di Bernardini — {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('/privacy')}
              className="text-[#f5f0e8]/20 text-xs tracking-widest hover:text-[#c9b87a] transition-colors"
            >
              Privacy Policy
            </button>
            <p className="text-[#f5f0e8]/20 text-xs tracking-widest">
              {t.footer.vat}: DBRJCP90P11H501M
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
