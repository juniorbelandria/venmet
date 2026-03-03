'use client'

import { useEffect, useState } from 'react'
import { Phone, MapPin, Globe, MessageCircle, Check } from 'lucide-react'

export default function CTAFinalSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contacto')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section 
      id="contacto"
      className="relative bg-[#0B1F3A] py-[90px] px-[5%] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C9A7] opacity-[0.08] blur-[120px] rounded-full" />

      <div className="relative max-w-[900px] mx-auto text-center">
        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-white leading-[1.15] mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          ¿Listo para calibrar tus equipos<br />
          sin complicaciones?
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[18px] text-white/70 leading-relaxed mb-4 max-w-[700px] mx-auto transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Solicita tu cotización gratis y recibe una respuesta en menos de 24 horas.
          Sin compromisos, sin letra pequeña.
        </p>

        {/* Microcopy */}
        <p className={`font-['Inter'] text-[14px] text-white/50 mb-10 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="inline-flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#00C9A7]" strokeWidth={2.5} />
            Certificados válidos para auditorías
          </span>
          {' · '}
          <span className="inline-flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#00C9A7]" strokeWidth={2.5} />
            Trazabilidad garantizada
          </span>
          {' · '}
          <span className="inline-flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#00C9A7]" strokeWidth={2.5} />
            Entrega en tiempo récord
          </span>
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="https://wa.me/584242049381"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00C9A7] text-[#0B1F3A] px-8 py-4 rounded-[10px] font-['Space_Grotesk'] font-bold text-[16px] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00C9A7]/30 transition-all"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
            Solicitar Cotización por WhatsApp
          </a>

          <a
            href="tel:+584242049381"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-[10px] font-['Space_Grotesk'] font-bold text-[16px] hover:bg-white/10 hover:border-white/50 transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={2} />
            Llamar Ahora
          </a>
        </div>

        {/* Info de contacto */}
        <div className={`mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" strokeWidth={2} /> Teléfonos
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70">
                +58 0424-204.93.81<br />
                +58 212-715.70.60
              </p>
            </div>
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={2} /> Ubicación
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70">
                Urb. El Marqués, Miranda<br />
                Caracas, Venezuela
              </p>
            </div>
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" strokeWidth={2} /> Web
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70">
                www.venmet.com.ve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
