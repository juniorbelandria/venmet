'use client'

import { useEffect, useState } from 'react'
import { Star, Check } from 'lucide-react'

export default function TestimoniosSection() {
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

    const element = document.getElementById('testimonios')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const testimonios = [
    {
      iniciales: 'MR',
      nombre: 'María Rodríguez',
      cargo: 'Directora de Calidad',
      empresa: 'Laboratorio Farmacéutico, Caracas',
      rating: 5,
      badge: 'Auditoría ISO aprobada al 100%',
      texto: '"Gracias a VENMET, nuestra última auditoría de BPF fue un éxito total. El inspector revisó los certificados y no tuvo ni una observación sobre nuestro sistema de medición. Fue la primera vez en 4 años que pasamos sin ninguna no conformidad."'
    },
    {
      iniciales: 'JG',
      nombre: 'José Gutiérrez',
      cargo: 'Gerente de Planta',
      empresa: 'Empresa Alimentaria, Miranda',
      rating: 5,
      badge: 'Entrega en 3 días, 40 equipos calibrados',
      texto: '"Teníamos una auditoría en 5 días y ningún certificado al día. Llamé a VENMET el lunes, el viernes tenía todos los certificados en mano. Pensé que era imposible. Desde entonces somos clientes fijos, no arriesgamos más con eso."'
    },
    {
      iniciales: 'AL',
      nombre: 'Ana López',
      cargo: 'Jefe de Laboratorio',
      empresa: 'Industria Química, Carabobo',
      rating: 5,
      badge: 'Reducción de errores de medición en 85%',
      texto: '"Después de implementar el plan de calibración periódica con VENMET, nuestros datos de control de proceso son consistentes y confiables. Eliminamos prácticamente todos los rechazos internos por desviación de medición. El ROI fue inmediato."'
    }
  ]

  return (
    <section 
      id="testimonios"
      className="bg-white py-[90px] px-[5%]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Lo que dicen nuestros clientes
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Resultados reales de empresas<br />
          como la tuya
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-[#8A96A8] text-center leading-relaxed mb-12 max-w-[700px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Más de 500 empresas venezolanas confían en VENMET para garantizar
          la exactitud de sus procesos.
        </p>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className={`bg-[#F5F7FA] rounded-[18px] p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB347] text-[#FFB347]" strokeWidth={0} />
                ))}
              </div>

              {/* Badge de resultado */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,201,167,0.10)] border border-[rgba(0,201,167,0.20)] mb-4">
                <Check className="w-3 h-3 text-[#00C9A7]" strokeWidth={3} />
                <span className="font-['Inter'] text-[11px] text-[#00C9A7] font-semibold">
                  {testimonio.badge}
                </span>
              </div>

              {/* Texto del testimonio */}
              <p className="font-['Inter'] text-[14px] text-[#3A4D63] leading-relaxed mb-6 italic">
                {testimonio.texto}
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E0E4EA]">
                {/* Avatar con iniciales */}
                <div className="w-[42px] h-[42px] rounded-full bg-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Space_Grotesk'] font-bold text-[14px] text-[#00C9A7]">
                    {testimonio.iniciales}
                  </span>
                </div>

                {/* Info del autor */}
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-[14px] text-[#1A2B42] leading-tight">
                    {testimonio.nombre}
                  </p>
                  <p className="font-['Inter'] text-[12px] text-[#8A96A8] leading-tight">
                    {testimonio.cargo} · {testimonio.empresa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
