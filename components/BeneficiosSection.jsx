'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Shield, TrendingUp, Clock, FileCheck, CheckCircle2, XCircle, ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function BeneficiosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

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

    const element = document.getElementById('beneficios')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const beneficios = [
    {
      icon: Shield,
      titulo: 'Auditorías sin sorpresas',
      descripcion: 'Pasa cualquier inspección ISO, MPPS o SENCAMER con todos tus certificados al día.',
      impacto: 'Cero no conformidades en metrología',
      antes: ['Auditoría suspendida', 'No conformidades críticas', 'Producción paralizada'],
      despues: ['Auditoría aprobada', 'Cero observaciones', 'Operación continua'],
      color: '#27eee7',
      size: 'large'
    },
    {
      icon: TrendingUp,
      titulo: 'Cero pérdidas por medición',
      descripcion: 'Un lote rechazado cuesta más que un año de calibraciones.',
      impacto: 'Datos de proceso 100% confiables',
      antes: ['Lotes rechazados', 'Reprocesos costosos', 'Clientes insatisfechos'],
      despues: ['Datos confiables', 'Decisiones seguras', 'Cero rechazos'],
      color: '#27eee7',
      size: 'large'
    },
    {
      icon: Clock,
      titulo: 'Plazos que puedes planificar',
      descripcion: 'Confirmamos fechas antes de iniciar. Sin sorpresas.',
      impacto: 'Entrega en el plazo acordado',
      antes: ['Sin plazo definido', 'Equipos fuera de línea', 'Planificación imposible'],
      despues: ['Plazo acordado', 'Programas cumplidos', 'Sin sorpresas'],
      color: '#27eee7',
      size: 'small'
    },
    {
      icon: FileCheck,
      titulo: 'Trazabilidad total',
      descripcion: 'Certificados válidos para cualquier sistema de gestión.',
      impacto: 'ISO/IEC 17025 documentado',
      antes: ['Sin trazabilidad', 'Rechazados en auditorías', 'Sin respaldo técnico'],
      despues: ['Trazabilidad ISO', 'Certificados aceptados', 'Respaldo total'],
      color: '#27eee7',
      size: 'small'
    }
  ]

  return (
    <section 
      id="beneficios"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/imagenhero.webp"
          alt=""
          fill
          className="object-cover blur-sm scale-110"
          priority
        />
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80" />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Grid Pattern CYAN */}
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
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
            style={{
              background: '#152b86',
              color: 'white',
              boxShadow: '0 4px 20px rgba(21, 43, 134, 0.3)'
            }}
          >
            <Zap className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
            Beneficios Reales
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
            Lo que cambia en tu empresa<br />
            cuando trabajas con{' '}
            <span style={{ color: '#27eee7' }}>VENMET</span>
          </h2>
          <p className="font-['Inter'] text-[19px] text-[#0a0e1a]/60 leading-relaxed max-w-[700px] mx-auto"
            style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            Cada servicio tiene un impacto directo en tu operación, tu rentabilidad y tu tranquilidad.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            const isActive = activeCard === index
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 border-gray-200 transition-all duration-500 hover:border-[#27eee7] hover:shadow-2xl cursor-pointer ${
                  beneficio.size === 'large' ? 'lg:row-span-1' : ''
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`,
                  boxShadow: isActive ? '0 20px 60px rgba(39,238,231,0.2)' : undefined
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#27eee7]/10 to-[#1dd4cd]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  >
                    <Icon 
                      className="w-7 h-7 transition-colors duration-500" 
                      style={{ color: isActive ? '#27eee7' : '#0a0e1a' }}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Inter'] font-bold text-[20px] text-[#0a0e1a] mb-2"
                      style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                    >
                      {beneficio.titulo}
                    </h3>
                    <p className="font-['Inter'] text-[14px] text-[#0a0e1a]/70 leading-relaxed"
                      style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                    >
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#27eee7]/10 to-[#1dd4cd]/5 mb-6">
                  <Sparkles className="w-4 h-4 text-[#27eee7]" strokeWidth={2} />
                  <span className="font-['Inter'] text-[13px] font-semibold text-[#0a0e1a]"
                    style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    {beneficio.impacto}
                  </span>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                      <span className="font-['Inter'] text-[11px] font-bold text-red-600 uppercase tracking-wide">
                        Antes
                      </span>
                    </div>
                    <div className="space-y-2">
                      {beneficio.antes.map((item, idx) => (
                        <p key={idx} className="font-['Inter'] text-[12px] text-[#0a0e1a]/70 leading-snug"
                          style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-gradient-to-br from-[#27eee7]/10 to-[#1dd4cd]/5 rounded-xl p-4 border border-[#27eee7]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#27eee7]" strokeWidth={2.5} />
                      <span className="font-['Inter'] text-[11px] font-bold text-[#27eee7] uppercase tracking-wide">
                        Con VENMET
                      </span>
                    </div>
                    <div className="space-y-2">
                      {beneficio.despues.map((item, idx) => (
                        <p key={idx} className="font-['Inter'] text-[12px] text-[#0a0e1a]/70 leading-snug"
                          style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(39,238,231,0.1), transparent 70%)'
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#solicitud"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#27eee7] to-[#1dd4cd] text-[#0a0e1a] px-8 py-4 rounded-xl font-['Inter'] font-bold text-[16px] hover:scale-105 hover:shadow-2xl hover:shadow-[#27eee7]/30 transition-all group"
            style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            Solicitar Servicio Ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
