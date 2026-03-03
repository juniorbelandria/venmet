'use client'

import { useEffect, useState } from 'react'
import { Thermometer, Scale, Gauge, Timer, Ruler, FlaskConical, Droplets, TestTube, ArrowRight } from 'lucide-react'

export default function ServiciosSection() {
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
      descripcion: 'Monitoreamos y certificamos condiciones ambientales críticas para industrias farmacéutica, alimentaria y de salud. Control completo de ambientes regulados.',
      items: [
        'Dataloggers y termohigrómetros',
        'Cámaras climáticas y cuartos fríos',
        'Monitoreo de almacenes y depósitos',
        'Verificación de condiciones BPF/BPA'
      ],
      bgColor: 'rgba(0,201,167,0.10)'
    },
    {
      icon: Thermometer,
      titulo: 'Temperatura',
      descripcion: 'Garantizamos que todos tus sensores y sistemas térmicos registren temperaturas reales y confiables para cumplir con normas de proceso y calidad.',
      items: [
        'Termómetros de líquido en vidrio',
        'Estufas, incubadoras y baños térmicos',
        'Neveras, congeladores y disolutores',
        'Controladores e indicadores de temperatura'
      ],
      bgColor: 'rgba(255,200,100,0.12)'
    },
    {
      icon: Scale,
      titulo: 'Masa',
      descripcion: 'Tus balanzas son críticas para el control de proceso y calidad. Las calibramos para que cada pesaje sea confiable y trazable al Sistema Internacional.',
      items: [
        'Balanzas analíticas de precisión',
        'Balanzas semianalíticas',
        'Balanzas industriales y de plataforma',
        'Certificación para uso farmacéutico y alimentario'
      ],
      bgColor: 'rgba(255,179,71,0.10)'
    },
    {
      icon: FlaskConical,
      titulo: 'Volumen',
      descripcion: 'El material volumétrico de tu laboratorio debe ser exacto. Garantizamos que cada medida sea confiable para tus análisis y formulaciones.',
      items: [
        'Buretas y pipetas aforadas',
        'Cilindros graduados',
        'Balones y matraces aforados',
        'Material de vidrio clase A y B'
      ],
      bgColor: 'rgba(100,180,255,0.12)'
    },
    {
      icon: Gauge,
      titulo: 'Presión',
      descripcion: 'Evita accidentes y paros de producción. Calibramos manómetros, presostatos y válvulas de seguridad bajo normas estrictas de trazabilidad.',
      items: [
        'Manómetros analógicos y digitales',
        'Presostatos y transmisores',
        'Válvulas de seguridad',
        'Registradores e indicadores de presión'
      ],
      bgColor: 'rgba(255,107,107,0.10)'
    },
    {
      icon: Timer,
      titulo: 'Tiempo',
      descripcion: 'Un cronómetro descalibrado puede significar un lote fallado. Verificamos la exactitud de tus instrumentos de tiempo para procesos críticos.',
      items: [
        'Cronómetros de laboratorio',
        'Temporizadores de proceso',
        'Friabilizadores',
        'Instrumentos de control de ciclos'
      ],
      bgColor: 'rgba(0,201,167,0.08)'
    },
    {
      icon: Ruler,
      titulo: 'Dimensional',
      descripcion: 'La exactitud en mediciones dimensionales es esencial en manufactura e ingeniería. Trazabilidad documentada para cada instrumento de tu taller o laboratorio.',
      items: [
        'Vernier / Calibres pie de rey',
        'Micrómetros exteriores e interiores',
        'Medidores de profundidad',
        'Tipómetros y galgas'
      ],
      bgColor: 'rgba(23,53,96,0.08)'
    },
    {
      icon: TestTube,
      titulo: 'Físico-Químico',
      descripcion: 'Calibración de instrumentos de análisis físico-químico para laboratorios de control de calidad, investigación y procesos industriales que requieren trazabilidad de parámetros analíticos.',
      items: [
        'pH-metros y electroanalizadores',
        'Conductivímetros',
        'Equipos de medición analítica',
        'Refractómetros',
        'Instrumentos de análisis de proceso',
        'Instrumentos de laboratorio especializado'
      ],
      bgColor: 'rgba(108,99,255,0.10)',
      fullWidth: true
    }
  ]

  return (
    <section 
      id="servicios"
      className="bg-[#EEF1F6] py-[90px] px-[5%]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Nuestros Servicios
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Calibración en las 7 magnitudes<br />
          críticas de la industria
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-[#8A96A8] text-center leading-relaxed mb-12 max-w-[700px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Cubrimos todas las magnitudes físicas que tu operación necesita certificar,
          bajo un solo proveedor de confianza.
        </p>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`bg-white rounded-[18px] p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                servicio.fullWidth ? 'lg:col-span-2' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icono */}
              <div 
                className="w-14 h-14 rounded-[12px] flex items-center justify-center mb-4"
                style={{ backgroundColor: servicio.bgColor }}
              >
                <servicio.icon className="w-7 h-7 text-[#0B1F3A]" strokeWidth={2} />
              </div>

              {/* Título y Badge */}
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-[#1A2B42]">
                  {servicio.titulo}
                </h3>
                {servicio.badge && (
                  <span className="badge bg-[#00C9A7] text-[#0B1F3A] text-[10px] px-2 py-1">
                    {servicio.badge}
                  </span>
                )}
              </div>

              {/* Descripción */}
              <p className="font-['Inter'] text-[14px] text-[#3A4D63] leading-relaxed mb-4">
                {servicio.descripcion}
              </p>

              {/* Items */}
              <div className={`grid ${servicio.fullWidth ? 'md:grid-cols-2' : 'grid-cols-1'} gap-2 mb-5`}>
                {servicio.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00C9A7] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="font-['Inter'] text-[12px] text-[#3A4D63]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <a
                href="#solicitud"
                className="inline-flex items-center gap-2 text-[#00C9A7] font-['Space_Grotesk'] font-bold text-[13px] hover:gap-3 transition-all group"
              >
                Solicitar servicio 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
