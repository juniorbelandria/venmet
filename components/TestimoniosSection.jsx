'use client'

import { useEffect, useState, useRef } from 'react'
import { Star, Check } from 'lucide-react'

export default function TestimoniosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef(null)

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

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Velocidad del scroll (píxeles por frame)

    const scroll = () => {
      scrollPosition += scrollSpeed
      
      // Cuando llegamos a la mitad del contenido, reseteamos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

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
    },
    {
      iniciales: 'CF',
      nombre: 'Carlos Fernández',
      cargo: 'Director Técnico',
      empresa: 'Industria Metalmecánica, Zulia',
      rating: 5,
      badge: 'Certificación ISO 9001 lograda',
      texto: '"Sin el soporte de VENMET no hubiéramos logrado nuestra certificación ISO 9001. Su equipo nos guió en todo el proceso de trazabilidad metrológica. Ahora competimos con empresas internacionales."'
    },
    {
      iniciales: 'LM',
      nombre: 'Luisa Martínez',
      cargo: 'Gerente de Operaciones',
      empresa: 'Laboratorio Clínico, Lara',
      rating: 5,
      badge: 'Acreditación SVCAL obtenida',
      texto: '"La precisión de nuestros análisis clínicos mejoró notablemente. VENMET calibró todos nuestros equipos de laboratorio y nos ayudó a obtener la acreditación SVCAL. Nuestros pacientes confían más en nosotros."'
    },
    {
      iniciales: 'RP',
      nombre: 'Roberto Pérez',
      cargo: 'Jefe de Mantenimiento',
      empresa: 'Planta Automotriz, Aragua',
      rating: 5,
      badge: 'Cero rechazos en 6 meses',
      texto: '"Implementamos el programa de calibración preventiva y los resultados son increíbles. Llevamos 6 meses sin rechazos por problemas de medición. El ahorro en reprocesos pagó el servicio en el primer mes."'
    }
  ]

  // Duplicamos los testimonios para el efecto infinito
  const testimoniosInfinitos = [...testimonios, ...testimonios]

  return (
    <section 
      id="testimonios"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Tag Label */}
        <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase"
            style={{
              background: '#152b86',
              color: 'white',
              boxShadow: '0 4px 20px rgba(21, 43, 134, 0.3)'
            }}
          >
            <Star className="inline w-3.5 h-3.5 mr-2 -mt-0.5 fill-[#0a0e1a]" />
            Lo que dicen nuestros clientes
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Inter'] font-bold text-center leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            fontWeight: 700,
            color: '#152b86'
          }}
        >
          Resultados reales de empresas<br />
          como la tuya
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[19px] leading-relaxed mb-16 max-w-[700px] mx-auto text-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ 
            fontWeight: 500, 
            letterSpacing: '-0.01em',
            color: 'rgba(10, 14, 26, 0.6)'
          }}
        >
          Más de 500 empresas venezolanas confían en VENMET para garantizar
          la exactitud de sus procesos.
        </p>

        {/* Slider Infinito de Testimonios */}
        <div className="relative overflow-hidden">
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Container del slider */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimoniosInfinitos.map((testimonio, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] bg-[#F5F7FA] rounded-[18px] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
      </div>
    </section>
  )
}
