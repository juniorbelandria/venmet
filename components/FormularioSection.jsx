'use client'

import { useEffect, useState } from 'react'
import { Building2, Package, Calendar, User, Mail, Phone, MapPin, FileText, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'

export default function FormularioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Paso 1: Información de la Empresa
    nombreEmpresa: '',
    sector: '',
    // Paso 2: Equipos a Calibrar
    tipoEquipos: '',
    cantidad: '',
    magnitud: '',
    // Paso 3: Plazo y Urgencia
    plazo: '',
    fechaAuditoria: '',
    // Paso 4: Datos de Contacto
    nombreContacto: '',
    cargo: '',
    email: '',
    telefono: '',
    ubicacion: '',
    comentarios: ''
  })

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

    const element = document.getElementById('solicitud')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const steps = [
    { number: 1, title: 'Empresa', icon: Building2 },
    { number: 2, title: 'Equipos', icon: Package },
    { number: 3, title: 'Plazo', icon: Calendar },
    { number: 4, title: 'Contacto', icon: User }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log('Form submitted:', formData)
    alert('¡Solicitud enviada! Nos pondremos en contacto contigo en menos de 24 horas.')
  }

  return (
    <section 
      id="solicitud"
      className="relative py-[120px] md:py-[140px] lg:py-[160px] px-[5%] overflow-hidden"
      style={{ background: '#27eee7' }}
    >
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url("/images/solicita.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay oscuro para mejor contraste */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(39, 238, 231, 0.7) 0%, rgba(39, 238, 231, 0.6) 100%)'
        }}
      />

      {/* Glassmorphism Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#152b86]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Tag Label */}
        <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-5 py-2.5 rounded-full text-[13px] font-['Inter'] font-bold tracking-wide uppercase"
            style={{
              background: 'rgba(21, 43, 134, 0.15)',
              color: '#152b86',
              border: '2px solid rgba(21, 43, 134, 0.3)'
            }}
          >
            Solicita tu Servicio
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
          Solicita tu <span style={{ color: 'white' }}>cotización gratis</span>
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[19px] leading-relaxed mb-16 max-w-[600px] mx-auto text-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
          style={{ 
            fontWeight: 500, 
            letterSpacing: '-0.01em',
            color: 'rgba(21, 43, 134, 0.8)'
          }}
        >
          Completa el formulario y recibe una respuesta personalizada en menos de 24 horas.
        </p>

        {/* Grid Layout: Pasos a la izquierda, Formulario a la derecha */}
        <div className={`grid lg:grid-cols-[1fr_1.4fr] gap-24 xl:gap-32 items-start transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Columna Izquierda - Pasos Minimalistas */}
          <div className="space-y-14 lg:space-y-16">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              
              const descriptions = {
                1: 'Cuéntanos sobre tu empresa y el sector en el que operas',
                2: 'Especifica qué equipos necesitas calibrar y en qué cantidad',
                3: 'Indícanos cuándo necesitas el servicio y si tienes auditorías próximas',
                4: 'Déjanos tus datos para enviarte la cotización personalizada'
              }

              return (
                <div 
                  key={step.number}
                  className={`flex gap-5 transition-all duration-500 ${
                    isActive ? 'translate-x-2' : 'translate-x-0'
                  }`}
                >
                  {/* Icono Circular Minimalista */}
                  <div 
                    className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive ? '#152b86' : isCompleted ? '#152b86' : 'rgba(21, 43, 134, 0.2)',
                      border: isActive ? '4px solid #27eee7' : '4px solid transparent',
                      boxShadow: isActive ? '0 0 0 10px rgba(39, 238, 231, 0.15), 0 8px 24px rgba(21, 43, 134, 0.2)' : 'none'
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={36} style={{ color: '#27eee7' }} strokeWidth={2.5} />
                    ) : (
                      <Icon size={36} style={{ color: isActive ? '#27eee7' : 'rgba(21, 43, 134, 0.4)' }} strokeWidth={2} />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span 
                        className="font-['Inter'] text-[13px] font-bold tracking-wider"
                        style={{
                          color: isActive || isCompleted ? '#152b86' : 'rgba(21, 43, 134, 0.5)'
                        }}
                      >
                        PASO {step.number}
                      </span>
                    </div>
                    <h3 
                      className="font-['Inter'] font-bold text-[30px] mb-4 leading-tight"
                      style={{ 
                        color: isActive || isCompleted ? '#152b86' : 'rgba(21, 43, 134, 0.5)',
                        fontWeight: 700 
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="font-['Inter'] text-[17px] leading-relaxed"
                      style={{ 
                        color: isActive || isCompleted ? 'rgba(21, 43, 134, 0.8)' : 'rgba(21, 43, 134, 0.4)',
                        fontWeight: 500 
                      }}
                    >
                      {descriptions[step.number]}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Columna Derecha - Formulario Minimalista */}
          <div 
            className="rounded-[40px] p-14 md:p-16 lg:p-20 sticky top-8"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 32px 120px rgba(21, 43, 134, 0.2), 0 16px 48px rgba(21, 43, 134, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.9)'
            }}
          >

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
          
          {/* PASO 1: Información de la Empresa */}
          {currentStep === 1 && (
            <div className="space-y-9 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  <Building2 size={18} style={{ color: '#27eee7' }} />
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                  placeholder="Ej: Laboratorios Farmacéuticos XYZ"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  <FileText size={18} style={{ color: '#27eee7' }} />
                  Sector Industrial *
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] focus:outline-none transition-all"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                >
                  <option value="">Selecciona tu sector</option>
                  <option value="farmaceutica">Industria Farmacéutica</option>
                  <option value="alimentaria">Sector Alimentario</option>
                  <option value="quimica">Industria Química</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="laboratorios">Laboratorios Clínicos</option>
                  <option value="salud">Sector Salud</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
          )}

          {/* PASO 2: Equipos a Calibrar */}
          {currentStep === 2 && (
            <div className="space-y-9 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  <Package size={18} style={{ color: '#27eee7' }} />
                  Tipo de Equipos a Calibrar *
                </label>
                <textarea
                  name="tipoEquipos"
                  value={formData.tipoEquipos}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                  placeholder="Ej: Balanzas analíticas, termómetros digitales, manómetros..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] mb-3 block"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    Cantidad Aproximada *
                  </label>
                  <input
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                    placeholder="Ej: 15"
                  />
                </div>

                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] mb-3 block"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    Magnitud Principal *
                  </label>
                  <select
                    name="magnitud"
                    value={formData.magnitud}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                  >
                    <option value="">Selecciona magnitud</option>
                    <option value="temperatura-humedad">Temperatura y Humedad</option>
                    <option value="temperatura">Temperatura</option>
                    <option value="masa">Masa</option>
                    <option value="volumen">Volumen</option>
                    <option value="presion">Presión</option>
                    <option value="tiempo">Tiempo</option>
                    <option value="dimensional">Dimensional</option>
                    <option value="fisico-quimico">Físico-Químico</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* PASO 3: Plazo y Urgencia */}
          {currentStep === 3 && (
            <div className="space-y-9 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  <Calendar size={18} style={{ color: '#27eee7' }} />
                  ¿En qué plazo necesitas el servicio? *
                </label>
                <select
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] focus:outline-none transition-all"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                >
                  <option value="">Selecciona el plazo</option>
                  <option value="urgente">Urgente (1-3 días)</option>
                  <option value="normal">Normal (4-7 días)</option>
                  <option value="flexible">Flexible (más de 7 días)</option>
                </select>
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[14px] mb-3 block"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  ¿Tienes una auditoría próxima? (Opcional)
                </label>
                <input
                  type="date"
                  name="fechaAuditoria"
                  value={formData.fechaAuditoria}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] focus:outline-none transition-all"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                />
              </div>
            </div>
          )}

          {/* PASO 4: Datos de Contacto */}
          {currentStep === 4 && (
            <div className="space-y-9 animate-fadeInUp">
              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    <User size={18} style={{ color: '#27eee7' }} />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombreContacto"
                    value={formData.nombreContacto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] mb-3 block"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                    placeholder="Ej: Gerente de Calidad"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    <Mail size={18} style={{ color: '#27eee7' }} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                    style={{ fontWeight: 600, color: '#152b86' }}
                  >
                    <Phone size={18} style={{ color: '#27eee7' }} />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                    style={{ 
                      fontWeight: 500,
                      color: '#152b86',
                      borderColor: 'rgba(21, 43, 134, 0.15)',
                      background: 'rgba(21, 43, 134, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                    placeholder="+58 424-000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-3"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  <MapPin size={18} style={{ color: '#27eee7' }} />
                  Ubicación de la Empresa *
                </label>
                <input
                  type="text"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                  placeholder="Ciudad, Estado"
                />
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[14px] mb-3 block"
                  style={{ fontWeight: 600, color: '#152b86' }}
                >
                  Comentarios Adicionales (Opcional)
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-6 py-5 rounded-[16px] border-2 font-['Inter'] text-[16px] placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                  style={{ 
                    fontWeight: 500,
                    color: '#152b86',
                    borderColor: 'rgba(21, 43, 134, 0.15)',
                    background: 'rgba(21, 43, 134, 0.03)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27eee7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(21, 43, 134, 0.15)'}
                  placeholder="Información adicional que consideres relevante..."
                />
              </div>
            </div>
          )}

          {/* Botones de Navegación */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t"
            style={{ borderColor: 'rgba(21, 43, 134, 0.1)' }}
          >
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-['Inter'] font-bold text-[14px] transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'border-2 hover:-translate-x-1'
              }`}
              style={{
                borderColor: 'rgba(21, 43, 134, 0.2)',
                color: '#152b86',
                fontWeight: 600
              }}
            >
              <ChevronLeft size={18} />
              Anterior
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Inter'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
                style={{
                  background: '#152b86',
                  color: 'white',
                  boxShadow: '0 8px 24px rgba(21, 43, 134, 0.3)',
                  fontWeight: 600
                }}
              >
                Siguiente
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Inter'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
                style={{
                  background: '#27eee7',
                  color: '#152b86',
                  boxShadow: '0 8px 24px rgba(39, 238, 231, 0.4)',
                  fontWeight: 600
                }}
              >
                <CheckCircle2 size={18} />
                Enviar Solicitud
              </button>
            )}
          </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  )
}

