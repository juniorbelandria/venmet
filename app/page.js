import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import NosotrosSection from '@/components/NosotrosSection'
import ProcesoSection from '@/components/ProcesoSection'
import ServiciosSection from '@/components/ServiciosSection'
import StatsBar from '@/components/StatsBar'
import BeneficiosSection from '@/components/BeneficiosSection'
import TestimoniosSection from '@/components/TestimoniosSection'
import ComparacionSection from '@/components/ComparacionSection'
import CertificacionesSection from '@/components/CertificacionesSection'
import FAQSection from '@/components/FAQSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import FormularioSection from '@/components/FormularioSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ExitPopup from '@/components/ExitPopup'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NosotrosSection />
      <TrustBar />
      <ProblemSection />
      <ProcesoSection />
      <ServiciosSection />
      <BeneficiosSection />
      <TestimoniosSection />
      <ComparacionSection />
      <CertificacionesSection />
      <FAQSection />
      <CTAFinalSection />
      <FormularioSection />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </main>
  )
}
