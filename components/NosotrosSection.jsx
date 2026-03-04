'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { TrendingUp, Users, Layers, ShieldCheck, Target, Telescope, ClipboardCheck, Zap, Building2, MapPin, Phone, ArrowRight } from 'lucide-react'

export default function NosotrosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    magnitudes: 0,
    traceability: 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('nosotros')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const targets = { years: 20, clients: 500, magnitudes: 7, traceability: 100 }
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      setCounts({
        years: Math.floor(targets.years * easeOutCubic),
        clients: Math.floor(targets.clients * easeOutCubic),
        magnitudes: Math.floor(targets.magnitudes * easeOutCubic),
        traceability: Math.floor(targets.traceability * easeOutCubic)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)
  }

  return (
    <section 
      id="nosotros"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[80px] px-[5%] overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Grid Pattern CYAN Más Visible */}
      <div 
        className="absolute inset-0 opacity-[0.3]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,238,231,0.35) 2px, transparent 2px),
            linear-gradient(90deg, rgba(39,238,231,0.35) 2px, transparent 2px)
          `,
          backgroundSize: '25px 25px'
        }} 
      />

      {/* Glassmorphism Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#27eee7]/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#27eee7]/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#27eee7]/10 rounded-full blur-3xl"></div>
      </div>
      {/* Header */}
      <div className={`max-w-[1400px] mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-block px-4 py-2 rounded-full text-[13px] font-['Inter'] font-semibold tracking-wide uppercase mb-6"
          style={{
            background: '#152b86',
            color: 'white'
          }}
        >
          Quiénes Somos
        </span>
        <h2 
          className="font-['Inter'] font-bold leading-[1.1] max-w-[900px]"
          style={{ 
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            letterSpacing: '-0.03em',
            fontVariationSettings: '"wght" 700',
            color: '#152b86'
          }}
        >
          Más de{' '}
          <span style={{ color: '#27eee7' }}>
            20 años
          </span>
          {' '}siendo el respaldo técnico de la{' '}
          <span style={{ color: '#27eee7' }}>
            industria venezolana
          </span>
        </h2>
      </div>

      {/* Split Layout - Image + Stats */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Large Image with Floating Badges */}
          <div 
            className={`relative h-[650px] rounded-3xl overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Image
              src="/images/laboratorio.jpg"
              alt="Laboratorio VENMET"
              fill
              className="object-cover"
              quality={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent" />
            
            {/* Floating Stats Badges */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-3">
                <div 
                  className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: '#152b86' }}
                    >
                      <TrendingUp className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Space_Grotesk'] font-extrabold text-[28px] text-[#0a0e1a] leading-none">
                        +{counts.years}
                      </p>
                      <p className="font-['Inter'] text-[11px] text-[#0a0e1a]/60 font-medium">Años de Experiencia</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="rounded-2xl p-5 shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    transitionDelay: '400ms',
                    background: '#152b86'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Space_Grotesk'] font-extrabold text-[28px] text-white leading-none">
                        +{counts.clients}
                      </p>
                      <p className="font-['Inter'] text-[11px] text-white/70 font-medium">Empresas Atendidas</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: '500ms' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: '#152b86' }}
                    >
                      <Layers className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Space_Grotesk'] font-extrabold text-[28px] text-[#0a0e1a] leading-none">
                        {counts.magnitudes}
                      </p>
                      <p className="font-['Inter'] text-[11px] text-[#0a0e1a]/60 font-medium">Magnitudes Físicas</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="rounded-2xl p-5 shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    transitionDelay: '600ms',
                    background: '#152b86'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Space_Grotesk'] font-extrabold text-[28px] text-white leading-none">
                        {counts.traceability}%
                      </p>
                      <p className="font-['Inter'] text-[11px] text-white/70 font-medium">Trazabilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Cards (Smaller) */}
          <div className="space-y-4">
            {/* Misión */}
            <div 
              className={`bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-700 hover:border-[#27eee7]/30 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#152b86' }}
                >
                  <Target className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-[#0a0e1a] mb-2">
                    Misión
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-[#0a0e1a]/70 leading-relaxed">
                    Ser una empresa sólida, con capacidades técnicas y un excelente grupo de trabajo que brinda soluciones metrológicas adaptadas a las exigencias de un mercado creciente y competitivo.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div 
              className={`rounded-2xl p-6 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                transitionDelay: '800ms',
                background: '#152b86'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0">
                  <Telescope className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white mb-2">
                    Visión
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-white/80 leading-relaxed">
                    Afianzarnos como un laboratorio de calibración de referencia con amplio alcance, que demuestre competencia técnica, genere resultados confiables y cumpla con los requisitos de la norma ISO/IEC 17025 y la satisfacción plena del cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Values - Compact */}
            <div className="grid grid-cols-3 gap-3">
              <div 
                className={`bg-white border border-gray-200 rounded-xl p-4 text-center transition-all duration-700 hover:border-[#27eee7]/30 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: '#152b86' }}
                >
                  <Target className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-[13px] text-[#0a0e1a] mb-1">Exactitud</h4>
                <p className="font-['Inter'] text-[11px] text-[#0a0e1a]/60">Trazabilidad internacional</p>
              </div>

              <div 
                className={`bg-white border border-gray-200 rounded-xl p-4 text-center transition-all duration-700 hover:border-[#27eee7]/30 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: '#152b86' }}
                >
                  <Zap className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-[13px] text-[#0a0e1a] mb-1">Entrega</h4>
                <p className="font-['Inter'] text-[11px] text-[#0a0e1a]/60">Plazos cumplidos</p>
              </div>

              <div 
                className={`bg-white border border-gray-200 rounded-xl p-4 text-center transition-all duration-700 hover:border-[#27eee7]/30 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: '#152b86' }}
                >
                  <Building2 className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-[13px] text-[#0a0e1a] mb-1">Normas</h4>
                <p className="font-['Inter'] text-[11px] text-[#0a0e1a]/60">ISO/IEC 17025</p>
              </div>
            </div>

            {/* Política */}
            <div 
              className={`rounded-2xl p-6 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                transitionDelay: '1200ms',
                background: '#152b86'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white mb-2">
                    Política de Calidad
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-white/80 leading-relaxed">
                    VENMET C.A. está comprometido en satisfacer las necesidades de los clientes, asegurando la confiabilidad y entrega oportuna de los resultados, soportados con equipos de vanguardia y personal altamente capacitado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Bar */}
      <div className="max-w-[1400px] mx-auto">
        <div 
          className={`rounded-3xl p-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ 
            transitionDelay: '1000ms',
            background: '#152b86'
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#27eee7]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#27eee7]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-['Space_Grotesk'] font-bold text-white text-[15px] mb-1">Ubicación</p>
                <p className="font-['Inter'] text-[14px] text-white/70">
                  Urb. El Marqués, Miranda<br/>Caracas, Venezuela
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#27eee7]/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#27eee7]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-['Space_Grotesk'] font-bold text-white text-[15px] mb-1">Contáctanos</p>
                <p className="font-['Inter'] text-[14px] text-white/70">
                  +58 424-204-9381<br/>
                  +58 212-715-7060
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="#solicitud"
                className="inline-flex items-center gap-3 bg-[#27eee7] text-[#0a0e1a] px-8 py-4 rounded-2xl font-['Space_Grotesk'] font-bold text-[16px] hover:scale-105 hover:shadow-2xl hover:shadow-[#27eee7]/30 transition-all group"
              >
                Solicitar Servicio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
