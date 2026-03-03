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
      className="bg-white py-[90px] px-[5%]"
    >
      <div className="max-w-[740px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Preguntas Frecuentes
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Todo lo que necesitas saber<br />
          antes de contactarnos
        </h2>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F5F7FA] rounded-[16px] overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Pregunta - Botón */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#EEF1F6] transition-colors"
              >
                <h4 className="font-['Space_Grotesk'] font-semibold text-[16px] text-[#1A2B42] pr-4 leading-tight">
                  {faq.pregunta}
                </h4>
                <div 
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#00C9A7] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
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
                      stroke="#0B1F3A" 
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
                  <p className="font-['Inter'] text-[15px] text-[#3A4D63] leading-relaxed">
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
