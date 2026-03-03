'use client'

import { useEffect, useState } from 'react'

export default function ProcesoSection() {
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

    const element = document.getElementById('proceso')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const pasos = [
    {
      numero: '1',
      titulo: 'Solicita tu Cotización',
      descripcion: 'Contáctanos por WhatsApp o teléfono. Cuéntanos qué equipos necesitas calibrar y en qué plazo. En menos de 24h tienes tu presupuesto.'
    },
    {
      numero: '2',
      titulo: 'Enviamos o Recibimos',
      descripcion: 'Puedes traer tus instrumentos a nuestro laboratorio en El Marqués o coordinar la visita de nuestro equipo técnico a tu empresa.'
    },
    {
      numero: '3',
      titulo: 'Calibramos y Verificamos',
      descripcion: 'Nuestros técnicos certificados realizan la calibración bajo norma específica para cada tipo de instrumento y magnitud. Trazabilidad total.'
    },
    {
      numero: '4',
      titulo: 'Recibes tu Certificado',
      descripcion: 'Te entregamos el certificado oficial de calibración listo para usar en auditorías, sistemas de gestión y registros de calidad.'
    }
  ]

  return (
    <section 
      id="proceso"
      className="relative bg-[#0B1F3A] py-[90px] px-[5%] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Cómo Funciona
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-white text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          De la solicitud al certificado<br />
          en 4 pasos simples
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-white/65 text-center leading-relaxed mb-16 max-w-[600px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Sin burocracia, sin complicaciones. Así de fácil trabajamos contigo.
        </p>

        {/* 4 Pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 hover:bg-white/10 hover:border-[#00C9A7]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Número en círculo verde */}
              <div className="w-14 h-14 bg-[#00C9A7] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#00C9A7]/30">
                <span className="font-['Space_Grotesk'] font-extrabold text-[24px] text-[#0B1F3A]">
                  {paso.numero}
                </span>
              </div>

              {/* Título */}
              <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white mb-3">
                {paso.titulo}
              </h3>

              {/* Descripción */}
              <p className="font-['Inter'] text-[14px] text-white/70 leading-relaxed">
                {paso.descripcion}
              </p>

              {/* Línea conectora (excepto el último) */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00C9A7] to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div 
          className={`text-center transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-['Inter'] text-[16px] text-white/80 leading-relaxed">
            Sin contratos largos. Sin letra pequeña.{' '}
            <span className="text-[#00C9A7] font-medium">
              Solo resultados que puedes presentar con confianza.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
