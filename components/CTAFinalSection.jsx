'use client'

import { useEffect, useState } from 'react'
import { Phone, MapPin, Globe, Check } from 'lucide-react'

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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#27eee7] opacity-[0.08] blur-[120px] rounded-full" />

      <div className="relative max-w-[900px] mx-auto text-center">
        {/* Título H2 */}
        <h2 
          className={`font-['Inter'] font-bold text-white leading-[1.1] mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            fontWeight: 700
          }}
        >
          ¿Listo para <span style={{ color: '#27eee7' }}>calibrar</span> tus equipos<br />
          <span style={{ color: '#27eee7' }}>sin complicaciones</span>?
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[19px] text-white/70 leading-relaxed mb-4 max-w-[700px] mx-auto transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ 
            fontWeight: 500, 
            letterSpacing: '-0.01em'
          }}
        >
          Solicita tu cotización gratis y recibe una respuesta en menos de 24 horas.
          Sin compromisos, sin letra pequeña.
        </p>

        {/* Microcopy */}
        <p className={`font-['Inter'] text-[15px] text-white/50 mb-10 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ fontWeight: 500 }}
        >
          <span className="inline-flex items-center gap-1">
            <Check className="w-4 h-4 text-[#27eee7]" strokeWidth={2.5} />
            Certificados válidos para auditorías
          </span>
          {' · '}
          <span className="inline-flex items-center gap-1">
            <Check className="w-4 h-4 text-[#27eee7]" strokeWidth={2.5} />
            Trazabilidad garantizada
          </span>
          {' · '}
          <span className="inline-flex items-center gap-1">
            <Check className="w-4 h-4 text-[#27eee7]" strokeWidth={2.5} />
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-['Inter'] font-bold text-[16px] hover:-translate-y-1 hover:shadow-xl transition-all"
            style={{
              background: '#152b86',
              color: 'white',
              boxShadow: '0 4px 20px rgba(21, 43, 134, 0.3)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Solicitar Cotización por WhatsApp
          </a>

          <a
            href="tel:+584242049381"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-['Inter'] font-bold text-[16px] hover:bg-white/10 hover:border-white/50 transition-all"
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
              <p className="font-['Inter'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Phone className="w-4 h-4" strokeWidth={2} /> Teléfonos
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70"
                style={{ fontWeight: 500 }}
              >
                +58 0424-204.93.81<br />
                +58 212-715.70.60
              </p>
            </div>
            <div>
              <p className="font-['Inter'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" strokeWidth={2} /> Ubicación
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70"
                style={{ fontWeight: 500 }}
              >
                Urb. El Marqués, Miranda<br />
                Caracas, Venezuela
              </p>
            </div>
            <div>
              <p className="font-['Inter'] font-bold text-white text-[14px] mb-1 flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Globe className="w-4 h-4" strokeWidth={2} /> Web
              </p>
              <p className="font-['Inter'] text-[13px] text-white/70"
                style={{ fontWeight: 500 }}
              >
                www.venmet.com.ve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
