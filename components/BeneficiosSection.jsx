'use client'

import { useEffect, useState } from 'react'
import { Shield, DollarSign, Clock, FileCheck, X, Check } from 'lucide-react'

export default function BeneficiosSection() {
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
      descripcion: 'Pasa cualquier inspección ISO, MPPS o SENCAMER con todos tus certificados al día y la documentación lista para presentar.',
      antes: [
        'Auditoría suspendida por',
        'equipos sin certificar.',
        'No conformidades críticas.',
        'Producción paralizada.'
      ],
      despues: [
        'Auditoría aprobada.',
        'Cero observaciones en',
        'metrología. Operación',
        'continua sin interrupciones.'
      ]
    },
    {
      icon: DollarSign,
      titulo: 'Cero pérdidas por medición incorrecta',
      descripcion: 'Un solo lote rechazado por datos de temperatura o peso fuera de rango puede costar más que un año de calibraciones.',
      antes: [
        'Lotes rechazados. Reprocesos',
        'costosos. Clientes',
        'insatisfechos. Pérdidas',
        'difíciles de rastrear.'
      ],
      despues: [
        'Datos de proceso confiables.',
        'Decisiones seguras. Cero',
        'rechazos atribuibles a errores',
        'de medición.'
      ]
    },
    {
      icon: Clock,
      titulo: 'Plazos que puedes planificar',
      descripcion: 'Confirmamos fechas antes de iniciar. Tu mantenimiento preventivo no depende de la incertidumbre del proveedor.',
      antes: [
        'Proveedor sin plazo definido.',
        'Equipos semanas fuera de línea.',
        'Planificación imposible.'
      ],
      despues: [
        'Entrega en el plazo acordado.',
        'Programas de mantenimiento',
        'cumplidos. Sin sorpresas.'
      ]
    },
    {
      icon: FileCheck,
      titulo: 'Trazabilidad total documentada',
      descripcion: 'Cada certificado incluye trazabilidad a patrones nacionales e internacionales, válida para cualquier sistema de gestión de calidad.',
      antes: [
        'Certificados sin trazabilidad.',
        'Rechazados en auditorías.',
        'Sistema de calidad sin',
        'respaldo técnico.'
      ],
      despues: [
        'Trazabilidad documentada',
        'ISO/IEC 17025. Certificados',
        'aceptados por cualquier ente',
        'regulador.'
      ]
    }
  ]

  return (
    <section 
      id="beneficios"
      className="relative bg-[#0B1F3A] py-[90px] px-[5%] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Beneficios Reales
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-white text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Lo que cambia en tu empresa cuando<br />
          trabajas con VENMET
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-white/65 text-center leading-relaxed mb-12 max-w-[700px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Cada servicio tiene un impacto directo en tu operación, tu rentabilidad y tu tranquilidad.
        </p>

        {/* Grid de Beneficios */}
        <div className="grid md:grid-cols-2 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-[18px] p-6 border border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Icono y Título */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00C9A7]/10 rounded-xl flex items-center justify-center">
                  <beneficio.icon className="w-6 h-6 text-[#00C9A7]" strokeWidth={2} />
                </div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-white leading-tight">
                  {beneficio.titulo}
                </h3>
              </div>

              {/* Descripción */}
              <p className="font-['Inter'] text-[14px] text-white/70 leading-relaxed mb-6">
                {beneficio.descripcion}
              </p>

              {/* Comparación Antes/Después */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* ANTES */}
                <div 
                  className="rounded-[12px] p-4 border"
                  style={{ 
                    backgroundColor: 'rgba(255,107,107,0.10)',
                    borderColor: 'rgba(255,107,107,0.20)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
                      <X className="w-3 h-3 text-[#FF6B6B]" strokeWidth={3} />
                    </div>
                    <span className="font-['Space_Grotesk'] font-bold text-[12px] text-[#FF6B6B] uppercase tracking-wide">
                      Antes
                    </span>
                  </div>
                  <div className="space-y-1">
                    {beneficio.antes.map((linea, idx) => (
                      <p key={idx} className="font-['Inter'] text-[12px] text-white/80 leading-relaxed">
                        {linea}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CON VENMET */}
                <div 
                  className="rounded-[12px] p-4 border"
                  style={{ 
                    backgroundColor: 'rgba(0,201,167,0.10)',
                    borderColor: 'rgba(0,201,167,0.20)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#00C9A7]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#00C9A7]" strokeWidth={3} />
                    </div>
                    <span className="font-['Space_Grotesk'] font-bold text-[12px] text-[#00C9A7] uppercase tracking-wide">
                      Con VENMET
                    </span>
                  </div>
                  <div className="space-y-1">
                    {beneficio.despues.map((linea, idx) => (
                      <p key={idx} className="font-['Inter'] text-[12px] text-white/80 leading-relaxed">
                        {linea}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
