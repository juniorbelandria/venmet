'use client'

import { useEffect, useState } from 'react'
import { Globe, Flag, Scale, Pill, ArrowRight } from 'lucide-react'

export default function CertificacionesSection() {
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

    const element = document.getElementById('certificaciones')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const certificaciones = [
    {
      icon: Globe,
      titulo: 'ISO/IEC 17025',
      sublabel: 'NORMA INTERNACIONAL',
      descripcion: 'Requisitos generales para la competencia de laboratorios de ensayo y calibración. El estándar de oro internacional para la validez de certificados metrológicos.',
      color: '#0052B4',
      bgColor: 'rgba(0,82,180,0.08)',
      borderColor: 'rgba(0,82,180,0.18)'
    },
    {
      icon: Flag,
      titulo: 'COVENIN',
      sublabel: 'NORMAS VENEZOLANAS',
      descripcion: 'Comisión Venezolana de Normas Industriales. Aplicamos las normas COVENIN específicas para cada tipo de instrumento y proceso de calibración a nivel nacional.',
      color: '#CF1020',
      bgColor: 'rgba(207,16,32,0.08)',
      borderColor: 'rgba(207,16,32,0.18)'
    },
    {
      icon: Scale,
      titulo: 'SENCAMER',
      sublabel: 'ENTE REGULADOR',
      descripcion: 'Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos. Nuestros certificados son reconocidos y aceptados ante este ente regulador.',
      color: '#F5A623',
      bgColor: 'rgba(245,166,35,0.08)',
      borderColor: 'rgba(245,166,35,0.18)'
    },
    {
      icon: Pill,
      titulo: 'BPF / BPA / BPL',
      sublabel: 'BUENAS PRÁCTICAS',
      descripcion: 'Buenas Prácticas de Fabricación, Almacenamiento y Laboratorio. Calibramos los instrumentos requeridos para cumplimiento en industria farmacéutica y alimentaria.',
      color: '#00C9A7',
      bgColor: 'rgba(0,201,167,0.08)',
      borderColor: 'rgba(0,201,167,0.18)'
    }
  ]

  return (
    <section 
      id="certificaciones"
      className="bg-white py-[90px] px-[5%]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Respaldo Técnico
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Las normas que aplicamos son<br />
          las que tus auditores exigen
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-[#8A96A8] text-center leading-relaxed mb-12 max-w-[800px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Nuestros certificados son válidos porque están respaldados por los marcos normativos
          más rigurosos del sector industrial venezolano e internacional.
        </p>

        {/* Grid de Certificaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificaciones.map((cert, index) => (
            <div
              key={index}
              className={`bg-[#F5F7FA] rounded-[18px] p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icono circular */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                style={{ 
                  backgroundColor: cert.bgColor,
                  borderColor: cert.borderColor
                }}
              >
                <cert.icon className="w-8 h-8" style={{ color: cert.color }} strokeWidth={2} />
              </div>

              {/* Título */}
              <h3 
                className="font-['Space_Grotesk'] font-bold text-[18px] text-center mb-2"
                style={{ color: cert.color }}
              >
                {cert.titulo}
              </h3>

              {/* Sublabel */}
              <p 
                className="font-['Space_Grotesk'] font-bold text-[10px] text-center uppercase tracking-wider mb-3"
                style={{ color: cert.color, opacity: 0.7 }}
              >
                {cert.sublabel}
              </p>

              {/* Descripción */}
              <p className="font-['Inter'] text-[13px] text-[#3A4D63] leading-relaxed text-center">
                {cert.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Banner inferior */}
        <div 
          className={`gradient-azul rounded-[16px] p-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="font-['Inter'] text-[16px] text-white/90 leading-relaxed text-center mb-6 max-w-[900px] mx-auto">
            Todos nuestros certificados incluyen trazabilidad documentada a patrones nacionales e
            internacionales, número de identificación del equipo, incertidumbre de medición, fecha
            de calibración y fecha de vencimiento recomendada. Listos para usar en cualquier auditoría.
          </p>

          <div className="text-center">
            <a
              href="#solicitud"
              className="inline-flex items-center gap-2 bg-[#00C9A7] text-[#0B1F3A] px-8 py-4 rounded-[10px] font-['Space_Grotesk'] font-bold text-[15px] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00C9A7]/30 transition-all"
            >
              Ver cómo aplicarlo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
