'use client'

import { useEffect, useState } from 'react'
import { Thermometer, Scale, Gauge, Timer, Ruler, FlaskConical, Droplets, TestTube, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function ServiciosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

    const element = document.getElementById('servicios')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const servicios = [
    {
      icon: Droplets,
      titulo: 'Temperatura y Humedad',
      badge: 'Más Solicitado',
      descripcion: 'Monitoreamos y certificamos condiciones ambientales críticas para industrias farmacéutica, alimentaria y de salud.',
      items: [
        'Dataloggers y termohigrómetros',
        'Cámaras climáticas y cuartos fríos',
        'Monitoreo de almacenes y depósitos',
        'Verificación de condiciones BPF/BPA'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    },
    {
      icon: Thermometer,
      titulo: 'Temperatura',
      descripcion: 'Garantizamos que todos tus sensores y sistemas térmicos registren temperaturas reales y confiables.',
      items: [
        'Termómetros de líquido en vidrio',
        'Estufas, incubadoras y baños térmicos',
        'Neveras, congeladores y disolutores',
        'Controladores e indicadores'
      ],
      color: '#ff6b6b',
      gradient: 'from-[#ff6b6b]/10 to-[#ee5a52]/5'
    },
    {
      icon: Scale,
      titulo: 'Masa',
      descripcion: 'Tus balanzas son críticas para el control de proceso y calidad. Las calibramos para que cada pesaje sea confiable.',
      items: [
        'Balanzas analíticas de precisión',
        'Balanzas semianalíticas',
        'Balanzas industriales y de plataforma',
        'Certificación farmacéutica y alimentaria'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    },
    {
      icon: FlaskConical,
      titulo: 'Volumen',
      descripcion: 'El material volumétrico de tu laboratorio debe ser exacto. Garantizamos que cada medida sea confiable.',
      items: [
        'Buretas y pipetas aforadas',
        'Cilindros graduados',
        'Balones y matraces aforados',
        'Material de vidrio clase A y B'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    },
    {
      icon: Gauge,
      titulo: 'Presión',
      descripcion: 'Evita accidentes y paros de producción. Calibramos manómetros, presostatos y válvulas de seguridad.',
      items: [
        'Manómetros analógicos y digitales',
        'Presostatos y transmisores',
        'Válvulas de seguridad',
        'Registradores e indicadores'
      ],
      color: '#ff6b6b',
      gradient: 'from-[#ff6b6b]/10 to-[#ee5a52]/5'
    },
    {
      icon: Timer,
      titulo: 'Tiempo',
      descripcion: 'Un cronómetro descalibrado puede significar un lote fallado. Verificamos la exactitud de tus instrumentos.',
      items: [
        'Cronómetros de laboratorio',
        'Temporizadores de proceso',
        'Friabilizadores',
        'Instrumentos de control de ciclos'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    },
    {
      icon: Ruler,
      titulo: 'Dimensional',
      descripcion: 'La exactitud en mediciones dimensionales es esencial en manufactura e ingeniería.',
      items: [
        'Vernier / Calibres pie de rey',
        'Micrómetros exteriores e interiores',
        'Medidores de profundidad',
        'Tipómetros y galgas'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    },
    {
      icon: TestTube,
      titulo: 'Físico-Químico',
      descripcion: 'Calibración de instrumentos de análisis físico-químico para laboratorios de control de calidad, investigación y procesos industriales.',
      items: [
        'pH-metros y electroanalizadores',
        'Conductivímetros',
        'Equipos de medición analítica',
        'Refractómetros'
      ],
      color: '#27eee7',
      gradient: 'from-[#27eee7]/10 to-[#1dd4cd]/5'
    }
  ]

  return (
    <section 
      id="servicios"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-[100px] px-[5%] overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Grid Pattern CYAN Más Visible */}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#27eee7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase mb-6"
            style={{
              background: '#152b86',
              color: 'white',
              boxShadow: '0 4px 20px rgba(21, 43, 134, 0.3)'
            }}
          >
            <Sparkles className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
            Nuestros Servicios
          </span>
          <h2 
            className="font-['Inter'] font-bold leading-[1.1] max-w-[900px] mx-auto mb-6"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              fontWeight: 700,
              color: '#0a0e1a'
            }}
          >
            Calibración en las{' '}
            <span style={{ color: '#27eee7' }}>7 magnitudes</span>
            <br />críticas de la industria
          </h2>
          <p className="font-['Inter'] text-[19px] text-[#0a0e1a]/60 leading-relaxed max-w-[700px] mx-auto"
            style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            Cubrimos todas las magnitudes físicas que tu operación necesita certificar, bajo un solo proveedor de confianza.
          </p>
        </div>

        {/* Services Grid - Modern Cards - 8 cards in 4x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon
            const isHovered = hoveredCard === index
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-5 border-2 border-gray-200 transition-all duration-500 hover:border-[${servicio.color}] hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 80}ms`,
                  boxShadow: isHovered ? `0 20px 60px ${servicio.color}20` : undefined
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge if exists */}
                {servicio.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-['Inter'] font-bold tracking-wide uppercase bg-gradient-to-r from-[#27eee7] to-[#1dd4cd] text-[#0a0e1a]">
                      <Sparkles className="w-2.5 h-2.5" />
                      {servicio.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div 
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${servicio.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon 
                    className="w-6 h-6 transition-colors duration-500" 
                    style={{ color: isHovered ? servicio.color : '#0a0e1a' }}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="font-['Inter'] font-bold text-[16px] text-[#0a0e1a] mb-2"
                  style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
                >
                  {servicio.titulo}
                </h3>

                {/* Description */}
                <p className="font-['Inter'] text-[12px] text-[#0a0e1a]/70 leading-relaxed mb-4"
                  style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                >
                  {servicio.descripcion}
                </p>

                {/* Items */}
                <div className="space-y-1.5 mb-4">
                  {servicio.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 
                        className="w-3 h-3 flex-shrink-0 mt-0.5 transition-colors duration-300" 
                        style={{ color: isHovered ? servicio.color : '#27eee7' }}
                        strokeWidth={2.5}
                      />
                      <span className="font-['Inter'] text-[11px] text-[#0a0e1a]/70 leading-snug"
                        style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#solicitud"
                  className="inline-flex items-center gap-1.5 font-['Inter'] font-semibold text-[12px] group-hover:gap-2.5 transition-all duration-300"
                  style={{ 
                    color: servicio.color,
                    fontWeight: 600,
                    letterSpacing: '-0.01em'
                  }}
                >
                  Solicitar
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </a>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${servicio.color}10, transparent 70%)`
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
