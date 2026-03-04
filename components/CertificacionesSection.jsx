'use client'

import { useEffect, useState } from 'react'
import { Globe, Flag, Scale, Pill, Shield } from 'lucide-react'

export default function CertificacionesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

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
      descripcion: 'Requisitos generales para la competencia de laboratorios de ensayo y calibración. El estándar de oro internacional para la validez de certificados metrológicos.'
    },
    {
      icon: Flag,
      titulo: 'COVENIN',
      sublabel: 'NORMAS VENEZOLANAS',
      descripcion: 'Comisión Venezolana de Normas Industriales. Aplicamos las normas COVENIN específicas para cada tipo de instrumento y proceso de calibración a nivel nacional.'
    },
    {
      icon: Scale,
      titulo: 'SENCAMER',
      sublabel: 'ENTE REGULADOR',
      descripcion: 'Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos. Nuestros certificados son reconocidos y aceptados ante este ente regulador.'
    },
    {
      icon: Pill,
      titulo: 'BPF / BPA / BPL',
      sublabel: 'BUENAS PRÁCTICAS',
      descripcion: 'Buenas Prácticas de Fabricación, Almacenamiento y Laboratorio. Calibramos los instrumentos requeridos para cumplimiento en industria farmacéutica y alimentaria.'
    }
  ]

  return (
    <section 
      id="certificaciones"
      className="relative bg-[#0B1F3A] py-[100px] px-[5%] overflow-hidden"
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

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Tag Label */}
        <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase"
            style={{
              background: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
              color: '#0a0e1a',
              boxShadow: '0 4px 20px rgba(39, 238, 231, 0.3)'
            }}
          >
            <Shield className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
            Respaldo Técnico
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Inter'] font-bold text-white text-center leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            fontWeight: 700
          }}
        >
          Las normas que aplicamos son<br />
          las que tus auditores exigen
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[19px] text-white/70 text-center leading-relaxed mb-16 max-w-[800px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ 
            fontWeight: 500, 
            letterSpacing: '-0.01em'
          }}
        >
          Nuestros certificados son válidos porque están respaldados por los marcos normativos
          más rigurosos del sector industrial venezolano e internacional.
        </p>

        {/* Grid de Certificaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificaciones.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-[#27eee7]/10 backdrop-blur-sm rounded-[20px] p-6 border border-[#27eee7]/20 hover:bg-[#27eee7]/15 hover:border-[#27eee7]/40 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icono */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                hoveredCard === index ? 'scale-110' : 'scale-100'
              }`}
                style={{ 
                  background: hoveredCard === index 
                    ? 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)'
                    : 'rgba(39, 238, 231, 0.15)'
                }}
              >
                <cert.icon 
                  className="w-7 h-7 transition-colors duration-300" 
                  style={{ color: hoveredCard === index ? '#0B1F3A' : '#27eee7' }} 
                  strokeWidth={2} 
                />
              </div>

              {/* Título */}
              <h3 
                className="font-['Inter'] font-bold text-[20px] text-white text-center mb-2"
                style={{ letterSpacing: '-0.01em' }}
              >
                {cert.titulo}
              </h3>

              {/* Sublabel */}
              <p 
                className="font-['Inter'] font-semibold text-[11px] text-[#27eee7] text-center uppercase tracking-wider mb-4"
              >
                {cert.sublabel}
              </p>

              {/* Descripción */}
              <p className="font-['Inter'] text-[14px] text-white/70 leading-relaxed text-center"
                style={{ fontWeight: 500 }}
              >
                {cert.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Texto inferior */}
        <p 
          className={`font-['Inter'] text-[17px] text-white/80 leading-relaxed text-center max-w-[900px] mx-auto transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
        >
          Todos nuestros certificados incluyen trazabilidad documentada a patrones nacionales e
          internacionales, número de identificación del equipo, incertidumbre de medición, fecha
          de calibración y fecha de vencimiento recomendada. Listos para usar en cualquier auditoría.
        </p>
      </div>
    </section>
  )
}
