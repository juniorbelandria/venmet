'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, XCircle, TrendingDown, Clock, FileX, Ban } from 'lucide-react'
import Image from 'next/image'

export default function ProblemSection() {
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

    const element = document.getElementById('problema')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const problems = [
    {
      icon: XCircle,
      text: 'Fallaste una auditoría porque no tenías los certificados de calibración al día'
    },
    {
      icon: TrendingDown,
      text: 'Tuviste que repetir un proceso entero porque los datos de temperatura no eran confiables'
    },
    {
      icon: Clock,
      text: 'No sabes cuándo fue la última vez que calibraron tus balanzas o manómetros'
    },
    {
      icon: AlertTriangle,
      text: 'Buscaste un servicio de calibración y no te dieron certeza de los plazos de entrega'
    },
    {
      icon: FileX,
      text: 'Tu laboratorio no tiene trazabilidad documentada para respaldar sus mediciones'
    },
    {
      icon: Ban,
      text: 'Perdiste un cliente o contrato por no tener la certificación que exigían'
    }
  ]

  return (
    <section 
      id="problema"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#ff6b6b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#27eee7]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className={`relative max-w-[1400px] mx-auto mb-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
          style={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
            color: 'white',
            boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)'
          }}
        >
          ⚠️ El Problema Real
        </span>
        <h2 
          className="font-['Inter'] font-bold leading-[1.1] max-w-[1000px] mx-auto mb-6"
          style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            fontVariationSettings: '"wght" 800',
            color: '#0a0e1a'
          }}
        >
          ¿Te ha pasado{' '}
          <span className="relative inline-block">
            <span style={{ color: '#ff6b6b' }}>alguna de estas?</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C60 2 140 2 198 10" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p className="font-['Inter'] text-[19px] text-[#0a0e1a]/60 leading-relaxed max-w-[700px] mx-auto">
          Si reconoces alguna de estas situaciones, no estás solo. Son problemas comunes que pueden costarte mucho más de lo que imaginas.
        </p>
      </div>

      {/* Problems Grid - Main Focus with Image */}
      <div className="relative max-w-[1400px] mx-auto mb-16">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          
          {/* Left - Image */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/laboratorio.jpg"
                alt="Laboratorio de calibración profesional"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent"></div>
              
              {/* Floating stat badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b6b] to-[#ee5a52] flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-['Space_Grotesk'] font-bold text-[18px] text-[#0a0e1a]">
                      ¿Cuánto te cuesta?
                    </p>
                    <p className="font-['Inter'] text-[13px] text-[#0a0e1a]/60">
                      Un error puede paralizar tu producción
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Problems Checklist */}
          <div 
            className={`bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 md:p-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ 
              transitionDelay: '300ms',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="grid gap-5">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <div
                    key={index}
                    className={`group relative flex items-start gap-5 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-[#ff6b6b] hover:shadow-xl hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6b6b] to-[#ee5a52] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <p className="font-['Inter'] text-[15px] md:text-[16px] text-[#0a0e1a] leading-relaxed font-medium">
                        {problem.text}
                      </p>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Context Cards */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1 - Regulatory Risk */}
          <div 
            className={`bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:border-[#ff6b6b]/50 hover:shadow-xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b6b] to-[#ee5a52] flex items-center justify-center mb-5">
              <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-[#0a0e1a] mb-3">
              El Riesgo Regulatorio
            </h3>
            <p className="font-['Inter'] text-[15px] text-[#0a0e1a]/70 leading-relaxed">
              Un solo instrumento descalibrado puede causar el rechazo de un lote completo o la suspensión de tu línea de producción.
            </p>
          </div>

          {/* Card 2 - Hidden Cost */}
          <div 
            className={`bg-gradient-to-br from-[#0a0e1a] via-[#1a3a52] to-[#0a0e1a] rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#ff6b6b]/20 flex items-center justify-center mb-5">
              <TrendingDown className="w-6 h-6 text-[#ff6b6b]" strokeWidth={2} />
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-white mb-3">
              El Costo Oculto
            </h3>
            <p className="font-['Inter'] text-[15px] text-white/80 leading-relaxed">
              La mayoría descubre que sus equipos están fuera de especificación cuando ya es tarde: en medio de una auditoría.
            </p>
          </div>

          {/* Card 3 - Solution */}
          <div 
            className={`bg-gradient-to-br from-[#27eee7] to-[#1dd4cd] rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-[#0a0e1a] mb-3">
              La Buena Noticia
            </h3>
            <p className="font-['Inter'] text-[15px] text-[#0a0e1a] leading-relaxed">
              Este riesgo se elimina con un plan de calibración periódica. Te lo hacemos fácil, rápido y con certificado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
