import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import SportSection from './components/SportSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-[#2a2520] text-[#f5f0e8]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SportSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
