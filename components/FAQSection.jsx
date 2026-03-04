'use client'

import { useEffect, useState } from 'react'

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

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

    const element = document.getElementById('faq')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      pregunta: '¿Cuánto tiempo tarda el proceso de calibración?',
      respuesta: 'Depende del tipo y cantidad de instrumentos. Para servicios estándar, el tiempo habitual es de 2 a 5 días hábiles. Si tienes una auditoría urgente, contáctanos directamente y evaluamos la posibilidad de un servicio prioritario. Siempre te confirmamos el plazo antes de comenzar.'
    },
    {
      pregunta: '¿El certificado que emiten es válido para auditorías SENCAMER e ISO?',
      respuesta: 'Sí. Nuestros certificados incluyen trazabilidad documentada a patrones nacionales e internacionales, cumpliendo con los requisitos de ISO/IEC 17025, las normas COVENIN aplicables y los requerimientos de SENCAMER. Son aceptados por auditores de los principales entes reguladores venezolanos.'
    },
    {
      pregunta: '¿Tienen que llevar los equipos al laboratorio o pueden calibrar en sitio?',
      respuesta: 'Ofrecemos ambas opciones. Puedes traer tus instrumentos a nuestro laboratorio en El Marqués, Caracas, o podemos coordinar la visita de nuestro equipo técnico a tu empresa para realizar la calibración in situ. La modalidad depende del tipo de equipo y tus necesidades operativas.'
    },
    {
      pregunta: '¿Qué información necesito proporcionar para solicitar una cotización?',
      respuesta: 'Necesitamos conocer el tipo de instrumentos a calibrar, la cantidad, el rango de medición de cada uno y el plazo en el que necesitas el servicio. Si tienes especificaciones técnicas o manuales de los equipos, también son útiles. Con esta información podemos preparar una cotización precisa en menos de 24 horas.'
    },
    {
      pregunta: '¿Ofrecen planes de calibración periódica para empresas?',
      respuesta: 'Sí. Diseñamos planes de calibración periódica adaptados a las necesidades de tu empresa, considerando la frecuencia recomendada para cada tipo de instrumento, tus ciclos de auditoría y tu presupuesto. Esto te permite mantener todos tus equipos al día sin preocuparte por los vencimientos.'
    },
    {
      pregunta: '¿Qué pasa si un equipo no pasa la calibración?',
      respuesta: 'Si un instrumento está fuera de especificación, lo documentamos en el certificado y te asesoramos sobre las opciones: ajuste, reparación o reemplazo. En algunos casos podemos realizar el ajuste en el momento. Siempre te informamos antes de proceder con cualquier acción correctiva.'
    }
  ]

  return (
    <section 
      id="faq"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
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
            Preguntas Frecuentes
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
            color: '#0a0e1a'
          }}
        >
          Todo lo que necesitas saber<br />
          antes de contactarnos
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
          Resolvemos las dudas más comunes sobre nuestros servicios de calibración.
        </p>

        {/* Acordeón de FAQs en 2 columnas */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-[20px] border border-gray-200 overflow-hidden transition-all duration-700 hover:shadow-lg hover:border-[#27eee7]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              {/* Pregunta - Botón */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
              >
                <h4 className="font-['Inter'] font-semibold text-[16px] pr-4 leading-tight"
                  style={{ 
                    color: '#0a0e1a',
                    fontWeight: 600,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {faq.pregunta}
                </h4>
                <div 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#27eee7] rotate-180' 
                      : 'bg-[#27eee7]/20'
                  }`}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M4 6L8 10L12 6" 
                      stroke={openIndex === index ? '#0a0e1a' : '#27eee7'}
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Respuesta - Contenido expandible */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="font-['Inter'] text-[15px] leading-relaxed"
                    style={{ 
                      color: 'rgba(10, 14, 26, 0.7)',
                      fontWeight: 500
                    }}
                  >
                    {faq.respuesta}
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
