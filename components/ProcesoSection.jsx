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
      }, 2000) // Cambiado de 3000 a 2000ms (más rápido)
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
      className="relative py-[120px] px-[5%] overflow-hidden mb-[80px]"
      style={{ background: '#152b86' }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,238,231,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39,238,231,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} 
      />

      {/* Glassmorphism Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#27eee7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#27eee7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
            style={{
              background: '#27eee7',
              color: '#152b86',
              boxShadow: '0 4px 20px rgba(39, 238, 231, 0.3)'
            }}
          >
            ⚡ Cómo Funciona
          </span>
        </div>

        {/* Main Content: Text Left + Circle Right */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          {/* Left Side - Title and Description */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 
              className="font-['Inter'] font-bold text-white leading-[1.1] mb-6"
              style={{ 
                fontSize: 'clamp(36px, 4.8vw, 62px)',
                letterSpacing: '-0.03em',
                fontWeight: 700
              }}
            >
              De la solicitud al certificado<br />
              en{' '}
              <span style={{ color: '#27eee7' }}>4 pasos simples</span>
            </h2>
            
            <p className="font-['Inter'] text-[18px] text-white/70 leading-relaxed mb-8"
              style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
            >
              Sin contratos largos. Sin letra pequeña.{' '}
              <span className="text-[#27eee7] font-semibold">
                Solo resultados que puedes presentar con confianza.
              </span>
            </p>

            {/* Steps List for Mobile */}
            <div className="lg:hidden space-y-4 mt-8">
              {pasos.map((paso, index) => {
                const Icon = paso.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#27eee7]/30 hover:bg-white/10 hover:border-[#27eee7]/50 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: '#27eee7' }}
                    >
                      <Icon className="w-7 h-7" style={{ color: '#152b86' }} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-['Inter'] font-bold text-[#27eee7] mb-2 uppercase tracking-wider">
                        Paso {paso.numero}
                      </div>
                      <h3 className="font-['Inter'] font-bold text-[18px] text-white mb-2"
                        style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {paso.titulo}
                      </h3>
                      <p className="font-['Inter'] text-[15px] text-white/70 leading-relaxed"
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

          {/* Right Side - Circular Process (Desktop Only) */}
          <div 
            className={`hidden lg:block transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Center Circle - Sin transparencia */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ 
                  transitionDelay: '400ms',
                  background: '#27eee7',
                  boxShadow: '0 0 60px rgba(39, 238, 231, 0.4), 0 0 100px rgba(39, 238, 231, 0.2)'
                }}
              >
                <div className="text-center">
                  <div className="text-[80px] font-['Inter'] font-bold leading-none"
                    style={{ color: '#152b86' }}
                  >
                    {pasos[activeStep].numero}
                  </div>
                  <div className="text-[14px] font-['Inter'] font-semibold px-4 mt-2"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em', color: '#152b86' }}
                  >
                    {pasos[activeStep].titulo}
                  </div>
                </div>
              </div>

              {/* Rotating Circle Path - Más grande */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#27eee7"
                  strokeWidth="0.3"
                  opacity="0.2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#27eee7"
                  strokeWidth="1"
                  strokeDasharray="251.3"
                  strokeDashoffset={251.3 - (251.3 * (activeStep + 1)) / 4}
                  className="transition-all duration-700"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(39, 238, 231, 0.6))' }}
                />
              </svg>

              {/* Step Cards positioned around circle - Optimizadas */}
              {pasos.map((paso, index) => {
                const Icon = paso.icon
                const angle = (index * 90) - 90 // Start from top
                const radius = 300 // Aumentado para más espacio horizontal
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
                      transitionDelay: `${500 + index * 100}ms`
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className={`rounded-2xl p-4 border-2 transition-all duration-500 hover:scale-105 ${
                        isActive 
                          ? 'border-[#27eee7] shadow-[0_0_40px_rgba(39,238,231,0.4)]' 
                          : 'border-[#27eee7]/30 hover:border-[#27eee7]/50'
                      }`}
                      style={{ 
                        width: '210px',
                        background: isActive ? 'rgba(39, 238, 231, 0.08)' : 'rgba(21, 43, 134, 0.6)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                      }}
                    >
                      {/* Header con icono y paso */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive ? 'scale-110' : ''
                        }`}
                          style={{ 
                            background: isActive ? '#27eee7' : 'rgba(39, 238, 231, 0.15)',
                            boxShadow: isActive ? '0 4px 20px rgba(39, 238, 231, 0.3)' : 'none'
                          }}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-[#152b86]' : 'text-[#27eee7]'}`} strokeWidth={2} />
                        </div>
                        <div className={`text-[10px] font-['Inter'] font-bold uppercase tracking-wider ${isActive ? 'text-[#27eee7]' : 'text-white/50'}`}>
                          Paso {paso.numero}
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="font-['Inter'] font-bold text-[15px] text-white mb-2 leading-tight"
                        style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {paso.titulo}
                      </h3>

                      {/* Descripción compacta */}
                      <p className="font-['Inter'] text-[11.5px] text-white/70 leading-[1.4]"
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
        </div>
      </div>
    </section>
  )
}
