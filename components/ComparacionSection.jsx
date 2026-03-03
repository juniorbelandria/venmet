'use client'

import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'

export default function ComparacionSection() {
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

    const element = document.getElementById('comparacion')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const criterios = [
    'Certificado válido para auditorías ISO y SENCAMER',
    'Trazabilidad documentada a patrones nacionales',
    'Plazo de entrega definido y cumplido',
    'Servicio en 7 magnitudes físicas bajo un solo proveedor',
    'Más de 20 años de experiencia técnica verificable',
    'Atención directa con técnicos, no con intermediarios'
  ]

  return (
    <section 
      id="comparacion"
      className="bg-[#EEF1F6] py-[90px] px-[5%]"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            ¿Por qué elegirnos?
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          VENMET vs. La alternativa<br />
          de no calibrar (o hacerlo mal)
        </h2>

        {/* Tabla Comparativa */}
        <div 
          className={`bg-white rounded-[16px] shadow-lg overflow-hidden transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header de la tabla */}
          <div className="grid grid-cols-3 bg-[#0B1F3A] text-white">
            <div className="col-span-1 p-4 border-r border-white/10">
              <p className="font-['Space_Grotesk'] font-bold text-[14px]">Criterio</p>
            </div>
            <div className="col-span-1 p-4 border-r border-white/10 text-center">
              <p className="font-['Space_Grotesk'] font-bold text-[14px]">
                <span className="text-[#00C9A7]">VENMET</span> ✅
              </p>
            </div>
            <div className="col-span-1 p-4 text-center">
              <p className="font-['Space_Grotesk'] font-bold text-[14px]">
                Sin Calibrar / Sin Soporte ❌
              </p>
            </div>
          </div>

          {/* Filas de la tabla */}
          {criterios.map((criterio, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-[#E0E4EA] last:border-b-0 hover:bg-[#F5F7FA] transition-colors ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms`, transition: 'all 0.6s ease-out' }}
            >
              {/* Criterio */}
              <div className="col-span-1 p-4 border-r border-[#E0E4EA]">
                <p className="font-['Inter'] text-[14px] text-[#3A4D63] leading-relaxed">
                  {criterio}
                </p>
              </div>

              {/* VENMET - Check */}
              <div className="col-span-1 p-4 border-r border-[#E0E4EA] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[rgba(0,201,167,0.10)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#00C9A7]" strokeWidth={3} />
                </div>
              </div>

              {/* Sin Soporte - X */}
              <div className="col-span-1 p-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[rgba(255,107,107,0.10)] flex items-center justify-center">
                  <X className="w-5 h-5 text-[#FF6B6B]" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
