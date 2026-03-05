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
      className="relative py-[100px] px-[5%] overflow-hidden"
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

      <div className="max-w-[900px] mx-auto relative z-10">
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
        <div className={`grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Columna Izquierda - Pasos con Descripciones */}
          <div className="space-y-6">
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
                  className={`flex gap-4 p-6 rounded-2xl transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  style={{
                    background: isActive || isCompleted ? '#152b86' : 'rgba(21, 43, 134, 0.3)',
                    border: isActive ? '2px solid #27eee7' : '2px solid transparent',
                    boxShadow: isActive ? '0 8px 32px rgba(39, 238, 231, 0.3)' : 'none'
                  }}
                >
                  {/* Icono */}
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive || isCompleted ? '#27eee7' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive || isCompleted ? '0 4px 16px rgba(39, 238, 231, 0.4)' : 'none'
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={24} style={{ color: '#152b86' }} strokeWidth={2.5} />
                    ) : (
                      <Icon size={24} style={{ color: isActive || isCompleted ? '#152b86' : 'rgba(255, 255, 255, 0.5)' }} strokeWidth={2} />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="font-['Inter'] text-[12px] font-bold px-2 py-0.5 rounded"
                        style={{
                          background: isActive || isCompleted ? '#27eee7' : 'rgba(255, 255, 255, 0.1)',
                          color: isActive || isCompleted ? '#152b86' : 'rgba(255, 255, 255, 0.5)'
                        }}
                      >
                        PASO {step.number}
                      </span>
                    </div>
                    <h3 
                      className="font-['Inter'] font-bold text-[18px] mb-2"
                      style={{ 
                        color: isActive || isCompleted ? '#27eee7' : 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 600 
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="font-['Inter'] text-[14px] leading-relaxed"
                      style={{ 
                        color: isActive || isCompleted ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)',
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

          {/* Columna Derecha - Formulario */}
          <div 
            className="rounded-[24px] p-8 md:p-10 sticky top-8"
            style={{
              background: '#152b86',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1)'
            }}
          >

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
          
          {/* PASO 1: Información de la Empresa */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-2 text-white"
                  style={{ fontWeight: 600 }}
                >
                  <Building2 size={18} className="text-[#27eee7]" />
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                  style={{ fontWeight: 500 }}
                  placeholder="Ej: Laboratorios Farmacéuticos XYZ"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] mb-2 text-white"
                  style={{ fontWeight: 600 }}
                >
                  <FileText size={18} className="text-[#27eee7]" />
                  Sector Industrial *
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                  style={{ fontWeight: 500 }}
                >
                  <option value="" style={{ background: '#152b86', color: 'white' }}>Selecciona tu sector</option>
                  <option value="farmaceutica" style={{ background: '#152b86', color: 'white' }}>Industria Farmacéutica</option>
                  <option value="alimentaria" style={{ background: '#152b86', color: 'white' }}>Sector Alimentario</option>
                  <option value="quimica" style={{ background: '#152b86', color: 'white' }}>Industria Química</option>
                  <option value="manufactura" style={{ background: '#152b86', color: 'white' }}>Manufactura</option>
                  <option value="laboratorios" style={{ background: '#152b86', color: 'white' }}>Laboratorios Clínicos</option>
                  <option value="salud" style={{ background: '#152b86', color: 'white' }}>Sector Salud</option>
                  <option value="otro" style={{ background: '#152b86', color: 'white' }}>Otro</option>
                </select>
              </div>
            </div>
          )}

          {/* PASO 2: Equipos a Calibrar */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                  <Package size={18} className="text-[#27eee7]" />
                  Tipo de Equipos a Calibrar *
                </label>
                <textarea
                  name="tipoEquipos"
                  value={formData.tipoEquipos}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all resize-none"
                  placeholder="Ej: Balanzas analíticas, termómetros digitales, manómetros..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] text-white mb-2 block">
                    Cantidad Aproximada *
                  </label>
                  <input
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                    placeholder="Ej: 15"
                  />
                </div>

                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] text-white mb-2 block">
                    Magnitud Principal *
                  </label>
                  <select
                    name="magnitud"
                    value={formData.magnitud}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                  >
                    <option value="" style={{ background: '#152b86', color: 'white' }}>Selecciona magnitud</option>
                    <option value="temperatura-humedad" style={{ background: '#152b86', color: 'white' }}>Temperatura y Humedad</option>
                    <option value="temperatura" style={{ background: '#152b86', color: 'white' }}>Temperatura</option>
                    <option value="masa" style={{ background: '#152b86', color: 'white' }}>Masa</option>
                    <option value="volumen" style={{ background: '#152b86', color: 'white' }}>Volumen</option>
                    <option value="presion" style={{ background: '#152b86', color: 'white' }}>Presión</option>
                    <option value="tiempo" style={{ background: '#152b86', color: 'white' }}>Tiempo</option>
                    <option value="dimensional" style={{ background: '#152b86', color: 'white' }}>Dimensional</option>
                    <option value="fisico-quimico" style={{ background: '#152b86', color: 'white' }}>Físico-Químico</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* PASO 3: Plazo y Urgencia */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                  <Calendar size={18} className="text-[#27eee7]" />
                  ¿En qué plazo necesitas el servicio? *
                </label>
                <select
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                >
                  <option value="" style={{ background: '#152b86', color: 'white' }}>Selecciona el plazo</option>
                  <option value="urgente" style={{ background: '#152b86', color: 'white' }}>Urgente (1-3 días)</option>
                  <option value="normal" style={{ background: '#152b86', color: 'white' }}>Normal (4-7 días)</option>
                  <option value="flexible" style={{ background: '#152b86', color: 'white' }}>Flexible (más de 7 días)</option>
                </select>
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[14px] text-white mb-2 block">
                  ¿Tienes una auditoría próxima? (Opcional)
                </label>
                <input
                  type="date"
                  name="fechaAuditoria"
                  value={formData.fechaAuditoria}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                />
              </div>
            </div>
          )}

          {/* PASO 4: Datos de Contacto */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeInUp">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                    <User size={18} className="text-[#27eee7]" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombreContacto"
                    value={formData.nombreContacto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="font-['Inter'] font-semibold text-[14px] text-white mb-2 block">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                    placeholder="Ej: Gerente de Calidad"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                    <Mail size={18} className="text-[#27eee7]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                    <Phone size={18} className="text-[#27eee7]" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                    placeholder="+58 424-000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-white mb-2">
                  <MapPin size={18} className="text-[#27eee7]" />
                  Ubicación de la Empresa *
                </label>
                <input
                  type="text"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all"
                  placeholder="Ciudad, Estado"
                />
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[14px] text-white mb-2 block">
                  Comentarios Adicionales (Opcional)
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-[10px] border-2 border-white/20 bg-white/10 font-['Inter'] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#27eee7] focus:bg-white/15 transition-all resize-none"
                  placeholder="Información adicional que consideres relevante..."
                />
              </div>
            </div>
          )}

          {/* Botones de Navegación */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-['Inter'] font-bold text-[14px] transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'border-2 border-white/20 text-white hover:border-[#27eee7] hover:text-[#27eee7] hover:bg-white/5'
              }`}
            >
              <ChevronLeft size={18} />
              Anterior
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[10px] font-['Inter'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-xl transition-all"
                style={{
                  background: '#27eee7',
                  color: '#152b86',
                  boxShadow: '0 4px 20px rgba(39, 238, 231, 0.4)'
                }}
              >
                Siguiente
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[10px] font-['Inter'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-xl transition-all"
                style={{
                  background: '#27eee7',
                  color: '#152b86',
                  boxShadow: '0 4px 20px rgba(39, 238, 231, 0.4)'
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
