'use client'

import { useEffect, useState } from 'react'
import { MessageSquare, Package, Settings, FileCheck } from 'lucide-react'

export default function ProcesoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

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

    const element = document.getElementById('proceso')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const pasos = [
    {
      numero: '1',
      titulo: 'Solicita tu Cotización',
      descripcion: 'Contáctanos por WhatsApp o teléfono. Cuéntanos qué equipos necesitas calibrar y en qué plazo. En menos de 24h tienes tu presupuesto.',
      icon: MessageSquare,
      color: '#27eee7'
    },
    {
      numero: '2',
      titulo: 'Enviamos o Recibimos',
      descripcion: 'Puedes traer tus instrumentos a nuestro laboratorio en El Marqués o coordinar la visita de nuestro equipo técnico a tu empresa.',
      icon: Package,
      color: '#27eee7'
    },
    {
      numero: '3',
      titulo: 'Calibramos y Verificamos',
      descripcion: 'Nuestros técnicos certificados realizan la calibración bajo norma específica para cada tipo de instrumento y magnitud. Trazabilidad total.',
      icon: Settings,
      color: '#27eee7'
    },
    {
      numero: '4',
      titulo: 'Recibes tu Certificado',
      descripcion: 'Te entregamos el certificado oficial de calibración listo para usar en auditorías, sistemas de gestión y registros de calidad.',
      icon: FileCheck,
      color: '#27eee7'
    }
  ]

  return (
    <section 
      id="proceso"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#27eee7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#27eee7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
            style={{
              background: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
              color: '#0a0e1a',
              boxShadow: '0 4px 20px rgba(39, 238, 231, 0.3)'
            }}
          >
            ⚡ Cómo Funciona
          </span>
          <h2 
            className="font-['Inter'] font-bold leading-[1.1] max-w-[900px] mx-auto mb-6"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              fontWeight: 700,
              color: '#0a0e1a'
            }}
          >
            De la solicitud al certificado<br />
            en{' '}
            <span style={{ color: '#27eee7' }}>4 pasos simples</span>
          </h2>
          <p className="font-['Inter'] text-[19px] text-[#0a0e1a]/60 leading-relaxed max-w-[700px] mx-auto"
            style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            Sin burocracia, sin complicaciones. Así de fácil trabajamos contigo.
          </p>
        </div>

        {/* Circular Process Design */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block">
            <div className="relative w-full aspect-square max-w-[700px] mx-auto">
              {/* Center Circle */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#27eee7] to-[#1dd4cd] flex flex-col items-center justify-center shadow-2xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="text-center">
                  <div className="text-[72px] font-['Inter'] font-bold text-[#0a0e1a] mb-2">
                    {pasos[activeStep].numero}
                  </div>
                  <div className="text-[18px] font-['Inter'] font-semibold text-[#0a0e1a] px-6"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    {pasos[activeStep].titulo}
                  </div>
                </div>
              </div>

              {/* Rotating Circle Path */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#27eee7"
                  strokeWidth="0.3"
                  opacity="0.2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#27eee7"
                  strokeWidth="0.5"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 - (282.7 * (activeStep + 1)) / 4}
                  className="transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>

              {/* Step Cards positioned around circle */}
              {pasos.map((paso, index) => {
                const Icon = paso.icon
                const angle = (index * 90) - 90 // Start from top
                const radius = 350 // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                const isActive = activeStep === index

                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 cursor-pointer transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      transitionDelay: `${400 + index * 150}ms`
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className={`bg-white rounded-2xl p-6 shadow-xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                        isActive ? 'border-[#27eee7] shadow-[0_0_40px_rgba(39,238,231,0.3)]' : 'border-gray-200'
                      }`}
                      style={{ width: '240px' }}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        isActive ? 'bg-gradient-to-br from-[#27eee7] to-[#1dd4cd] scale-110' : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-7 h-7 ${isActive ? 'text-[#0a0e1a]' : 'text-gray-600'}`} strokeWidth={2} />
                      </div>
                      <div className={`text-[14px] font-['Inter'] font-bold mb-1 ${isActive ? 'text-[#27eee7]' : 'text-gray-400'}`}>
                        Paso {paso.numero}
                      </div>
                      <h3 className="font-['Inter'] font-bold text-[16px] text-[#0a0e1a] mb-2"
                        style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {paso.titulo}
                      </h3>
                      <p className="font-['Inter'] text-[13px] text-[#0a0e1a]/70 leading-relaxed"
                        style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Layout */}
          <div className="lg:hidden space-y-6">
            {pasos.map((paso, index) => {
              const Icon = paso.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:border-[#27eee7] transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#27eee7] to-[#1dd4cd] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#0a0e1a]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px] font-['Inter'] font-bold text-[#27eee7] mb-1">
                        Paso {paso.numero}
                      </div>
                      <h3 className="font-['Inter'] font-bold text-[18px] text-[#0a0e1a] mb-2"
                        style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {paso.titulo}
                      </h3>
                      <p className="font-['Inter'] text-[15px] text-[#0a0e1a]/70 leading-relaxed"
                        style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>
                  {/* Connector line */}
                  {index < pasos.length - 1 && (
                    <div className="absolute left-[43px] bottom-0 w-0.5 h-6 bg-gradient-to-b from-[#27eee7] to-transparent translate-y-full"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-['Inter'] text-[17px] text-[#0a0e1a]/70 leading-relaxed"
            style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            Sin contratos largos. Sin letra pequeña.{' '}
            <span className="text-[#27eee7] font-semibold">
              Solo resultados que puedes presentar con confianza.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
