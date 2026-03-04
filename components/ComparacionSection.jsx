'use client'

import { useEffect, useState } from 'react'
import { Check, X, Zap } from 'lucide-react'

export default function ComparacionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredRow, setHoveredRow] = useState(null)

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

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Tag Label */}
        <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase"
            style={{
              background: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
              color: '#0a0e1a',
              boxShadow: '0 4px 20px rgba(39, 238, 231, 0.3)'
            }}
          >
            <Zap className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
            ¿Por qué elegirnos?
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
          <span style={{ color: '#27eee7' }}>VENMET</span> vs. La alternativa<br />
          de no calibrar (o hacerlo mal)
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
          La diferencia entre operar con confianza o arriesgar tu producción.
        </p>

        {/* Comparación Moderna - Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card VENMET */}
          <div 
            className={`bg-white/80 backdrop-blur-sm rounded-[24px] p-8 border-2 border-[#27eee7]/30 shadow-xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 8px 32px rgba(39, 238, 231, 0.15)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)'
                }}
              >
                <Check className="w-6 h-6 text-[#0a0e1a]" strokeWidth={3} />
              </div>
              <h3 className="font-['Inter'] font-bold text-[24px]" style={{ color: '#0a0e1a' }}>
                Con <span style={{ color: '#27eee7' }}>VENMET</span>
              </h3>
            </div>

            <div className="space-y-4">
              {criterios.map((criterio, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredRow === index ? 'scale-110' : 'scale-100'
                  }`}
                    style={{
                      background: hoveredRow === index 
                        ? 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)'
                        : 'rgba(39, 238, 231, 0.15)'
                    }}
                  >
                    <Check className="w-4 h-4" style={{ color: hoveredRow === index ? '#0a0e1a' : '#27eee7' }} strokeWidth={3} />
                  </div>
                  <p className="font-['Inter'] text-[15px] leading-relaxed" 
                    style={{ 
                      color: '#0a0e1a',
                      fontWeight: 500
                    }}
                  >
                    {criterio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card Sin Calibrar */}
          <div 
            className={`bg-white/80 backdrop-blur-sm rounded-[24px] p-8 border-2 border-[#FF6B6B]/20 shadow-xl transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              boxShadow: '0 8px 32px rgba(255, 107, 107, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/15 flex items-center justify-center">
                <X className="w-6 h-6 text-[#FF6B6B]" strokeWidth={3} />
              </div>
              <h3 className="font-['Inter'] font-bold text-[24px]" style={{ color: '#0a0e1a' }}>
                Sin Calibrar
              </h3>
            </div>

            <div className="space-y-4">
              {[
                'Certificados rechazados en auditorías',
                'Sin respaldo técnico documentado',
                'Retrasos impredecibles en producción',
                'Múltiples proveedores sin coordinación',
                'Riesgo de fraude o servicio deficiente',
                'Comunicación lenta y poco clara'
              ].map((problema, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF6B6B]/15 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-[#FF6B6B]" strokeWidth={3} />
                  </div>
                  <p className="font-['Inter'] text-[15px] leading-relaxed" 
                    style={{ 
                      color: 'rgba(10, 14, 26, 0.7)',
                      fontWeight: 500
                    }}
                  >
                    {problema}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
