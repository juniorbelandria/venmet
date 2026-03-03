'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

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
    'Fallaste una auditoría porque no tenías los certificados de calibración al día',
    'Tuviste que repetir un proceso entero porque los datos de temperatura no eran confiables',
    'No sabes cuándo fue la última vez que calibraron tus balanzas o manómetros',
    'Buscaste un servicio de calibración y no te dieron certeza de los plazos de entrega',
    'Tu laboratorio no tiene trazabilidad documentada para respaldar sus mediciones',
    'Perdiste un cliente o contrato por no tener la certificación que exigían'
  ]

  return (
    <section 
      id="problema"
      className="bg-[#EEF1F6] py-[90px] px-[5%]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Tag Label */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            El Problema Real
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] leading-[1.15] mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          ¿Cuánto te cuesta un instrumento<br />
          fuera de calibración?
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-[#8A96A8] leading-relaxed mb-8 max-w-[700px] transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Más de lo que imaginas. Un solo error de medición puede paralizar tu producción,
          generar rechazos en auditoría y costarte caro en pérdidas de lote y reputación.
        </p>

        {/* Párrafo 1 */}
        <p className={`font-['Inter'] text-[16px] text-[#3A4D63] leading-relaxed mb-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          En Venezuela, las industrias farmacéutica, alimentaria y química están sujetas a
          inspecciones rigurosas de SENCAMER, el MPPS y auditorías ISO. Un solo instrumento
          descalibrado puede ser el motivo de rechazo de un lote completo o la suspensión de
          tu línea de producción.
        </p>

        {/* Párrafo 2 */}
        <p className={`font-['Inter'] text-[16px] text-[#3A4D63] leading-relaxed mb-10 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          El problema es que la mayoría de las empresas solo descubren que sus equipos están
          fuera de especificación cuando ya es demasiado tarde: en medio de una auditoría,
          con producción detenida y pérdidas económicas acumulándose por hora.
        </p>

        {/* Banner Oscuro */}
        <div className={`gradient-azul rounded-[16px] p-8 mb-10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="font-['Inter'] text-[18px] text-white leading-relaxed text-center">
            La buena noticia: <span className="text-[#00C9A7] font-medium">este riesgo se elimina por completo</span> con un plan de calibración
            periódica. Nosotros te lo hacemos fácil, rápido y con certificado que respalda
            cada resultado.
          </p>
        </div>

        {/* Checklist */}
        <div className={`transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-[#1A2B42] mb-6">
            ¿Te ha pasado alguna de estas?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 bg-white rounded-[12px] transition-all duration-500 hover:shadow-md ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-[#FFF0F0] border border-[#FFCECE] flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 text-[#FF6B6B]" strokeWidth={3} />
                </div>
                <p className="font-['Inter'] text-[14px] text-[#3A4D63] leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
