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
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Glassmorphism Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#ff6b6b]/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#27eee7]/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className={`relative max-w-[1400px] mx-auto mb-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
          style={{
            background: '#152b86',
            color: 'white',
            boxShadow: '0 4px 20px rgba(21, 43, 134, 0.3)'
          }}
        >
          El Problema Real
        </span>
        <h2 
          className="font-['Inter'] font-bold leading-[1.1] max-w-[1000px] mx-auto mb-6"
          style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            fontVariationSettings: '"wght" 800',
            fontWeight: 700,
            color: '#152b86'
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
        <p className="font-['Inter'] text-[19px] text-[#0a0e1a]/60 leading-relaxed max-w-[700px] mx-auto"
          style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
        >
          Si reconoces alguna de estas situaciones, no estás solo. Son problemas comunes que pueden costarte mucho más de lo que imaginas.
        </p>
      </div>

      {/* Main Content Grid - Info Cards Left + Image with Floating Badges Right */}
      <div className="relative max-w-[1400px] mx-auto mb-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          
          {/* Left - Compact Info Cards */}
          <div className="space-y-5">
            {/* Card 1 - Regulatory Risk */}
            <div 
              className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-700 hover:border-[#ff6b6b]/50 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ background: '#152b86' }}
                >
                  <AlertTriangle className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-['Inter'] font-bold text-[17px] text-[#0a0e1a] mb-2"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    El Riesgo Regulatorio
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-[#0a0e1a]/70 leading-relaxed"
                    style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                  >
                    Un solo instrumento descalibrado puede causar el rechazo de un lote completo o la suspensión de tu línea de producción.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Hidden Cost */}
            <div 
              className={`rounded-xl p-6 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: '300ms',
                background: '#152b86'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/30 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-['Inter'] font-bold text-[17px] text-white mb-2"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    El Costo Oculto
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-white/80 leading-relaxed"
                    style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                  >
                    La mayoría descubre que sus equipos están fuera de especificación cuando ya es tarde: en medio de una auditoría.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Solution */}
            <div 
              className={`rounded-xl p-6 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: '400ms',
                background: '#152b86'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-3xl text-white">✓</div>
                <div>
                  <h3 className="font-['Inter'] font-bold text-[17px] text-white mb-2"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    La Buena Noticia
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-white/80 leading-relaxed"
                    style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                  >
                    Este riesgo se elimina con un plan de calibración periódica. Te lo hacemos fácil, rápido y con certificado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Large Image with Professional Floating Badges */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative">
              {/* Main Image con efecto de desvanecimiento */}
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/PERSONA.png"
                    alt="Profesional preocupado por calibración"
                    width={900}
                    height={1000}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  {/* Gradient fade en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
                  {/* Gradient fade en los lados */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Professional Floating Problem Badges */}
              {problems.map((problem, index) => {
                const Icon = problem.icon
                const positions = [
                  { top: '8%', left: '-5%', delay: '600ms' },
                  { top: '22%', right: '-3%', delay: '700ms' },
                  { top: '40%', left: '-8%', delay: '800ms' },
                  { top: '58%', right: '-5%', delay: '900ms' },
                  { bottom: '20%', left: '-6%', delay: '1000ms' },
                  { bottom: '8%', right: '-4%', delay: '1100ms' }
                ]
                
                return (
                  <div
                    key={index}
                    className={`hidden xl:flex absolute items-center gap-3 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 max-w-[260px] border border-gray-200/50 hover:border-[#ff6b6b] hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,107,107,0.3)] transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      ...positions[index],
                      transitionDelay: positions[index].delay,
                      zIndex: 10
                    }}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                      style={{ background: '#152b86' }}
                    >
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="font-['Inter'] text-[11px] text-[#0a0e1a] leading-tight font-semibold"
                      style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                    >
                      {problem.text}
                    </p>
                  </div>
                )
              })}

              {/* Mobile/Tablet version - badges below image */}
              <div className="xl:hidden mt-8 space-y-3">
                {problems.map((problem, index) => {
                  const Icon = problem.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3 bg-white rounded-xl shadow-lg p-4 border border-gray-200 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: '#152b86' }}
                      >
                        <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <p className="font-['Inter'] text-[13px] text-[#0a0e1a] leading-relaxed font-medium"
                        style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        {problem.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
