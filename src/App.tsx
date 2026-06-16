import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import SportSection from './components/SportSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  const [isPrivacy, setIsPrivacy] = useState(window.location.pathname === '/privacy')

  useEffect(() => {
    const onPop = () => setIsPrivacy(window.location.pathname === '/privacy')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path)
    setIsPrivacy(path === '/privacy')
    window.scrollTo(0, 0)
  }

  if (isPrivacy) {
    return (
      <div className="min-h-screen bg-[#2a2520] text-[#f5f0e8]">
        <PrivacyPolicy />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#2a2520] text-[#f5f0e8]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SportSection />
      <ContactSection />
      <Footer navigateTo={navigateTo} />
      <WhatsAppButton />
    </div>
  )
}
