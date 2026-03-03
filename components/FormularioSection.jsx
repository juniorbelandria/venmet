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
      className="bg-[#EEF1F6] py-[90px] px-[5%]"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Tag Label */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag">
            Solicita tu Servicio
          </span>
        </div>

        {/* Título H2 */}
        <h2 
          className={`font-['Space_Grotesk'] font-extrabold text-[#1A2B42] text-center leading-[1.15] mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
        >
          Solicita tu cotización gratis
        </h2>

        {/* Subtítulo */}
        <p className={`font-['Inter'] text-[17px] text-[#8A96A8] text-center leading-relaxed mb-12 max-w-[600px] mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Completa el formulario y recibe una respuesta personalizada en menos de 24 horas.
        </p>

        {/* Stepper */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex justify-between items-center relative">
            {/* Línea de progreso */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#D0D5DD] -z-10">
              <div 
                className="h-full bg-[#00C9A7] transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>

            {steps.map((step) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number

              return (
                <div key={step.number} className="flex flex-col items-center">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-[#00C9A7] text-white' 
                        : isActive 
                        ? 'bg-[#00C9A7] text-white scale-110' 
                        : 'bg-white text-[#8A96A8] border-2 border-[#D0D5DD]'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <Icon size={20} />
                    )}
                  </div>
                  <p className={`font-['Space_Grotesk'] font-semibold text-[12px] mt-2 ${
                    isActive || isCompleted ? 'text-[#00C9A7]' : 'text-[#8A96A8]'
                  }`}>
                    {step.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className={`bg-white rounded-[20px] p-8 shadow-lg transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* PASO 1: Información de la Empresa */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                  <Building2 size={18} className="text-[#00C9A7]" />
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                  placeholder="Ej: Laboratorios Farmacéuticos XYZ"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                  <FileText size={18} className="text-[#00C9A7]" />
                  Sector Industrial *
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
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
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                  <Package size={18} className="text-[#00C9A7]" />
                  Tipo de Equipos a Calibrar *
                </label>
                <textarea
                  name="tipoEquipos"
                  value={formData.tipoEquipos}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all resize-none"
                  placeholder="Ej: Balanzas analíticas, termómetros digitales, manómetros..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2 block">
                    Cantidad Aproximada *
                  </label>
                  <input
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                    placeholder="Ej: 15"
                  />
                </div>

                <div>
                  <label className="font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2 block">
                    Magnitud Principal *
                  </label>
                  <select
                    name="magnitud"
                    value={formData.magnitud}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
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
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                  <Calendar size={18} className="text-[#00C9A7]" />
                  ¿En qué plazo necesitas el servicio? *
                </label>
                <select
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                >
                  <option value="">Selecciona el plazo</option>
                  <option value="urgente">Urgente (1-3 días)</option>
                  <option value="normal">Normal (4-7 días)</option>
                  <option value="flexible">Flexible (más de 7 días)</option>
                </select>
              </div>

              <div>
                <label className="font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2 block">
                  ¿Tienes una auditoría próxima? (Opcional)
                </label>
                <input
                  type="date"
                  name="fechaAuditoria"
                  value={formData.fechaAuditoria}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                />
              </div>
            </div>
          )}

          {/* PASO 4: Datos de Contacto */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeInUp">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                    <User size={18} className="text-[#00C9A7]" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombreContacto"
                    value={formData.nombreContacto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2 block">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                    placeholder="Ej: Gerente de Calidad"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                    <Mail size={18} className="text-[#00C9A7]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                    <Phone size={18} className="text-[#00C9A7]" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                    placeholder="+58 424-000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2">
                  <MapPin size={18} className="text-[#00C9A7]" />
                  Ubicación de la Empresa *
                </label>
                <input
                  type="text"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all"
                  placeholder="Ciudad, Estado"
                />
              </div>

              <div>
                <label className="font-['Space_Grotesk'] font-semibold text-[14px] text-[#1A2B42] mb-2 block">
                  Comentarios Adicionales (Opcional)
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D0D5DD] font-['Inter'] text-[15px] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/20 transition-all resize-none"
                  placeholder="Información adicional que consideres relevante..."
                />
              </div>
            </div>
          )}

          {/* Botones de Navegación */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#E0E4EA]">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-['Space_Grotesk'] font-bold text-[14px] transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'border-2 border-[#D0D5DD] text-[#1A2B42] hover:border-[#00C9A7] hover:text-[#00C9A7]'
              }`}
            >
              <ChevronLeft size={18} />
              Anterior
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#00C9A7] text-[#0B1F3A] px-8 py-3 rounded-[10px] font-['Space_Grotesk'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00C9A7]/30 transition-all"
              >
                Siguiente
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#00C9A7] text-[#0B1F3A] px-8 py-3 rounded-[10px] font-['Space_Grotesk'] font-bold text-[14px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00C9A7]/30 transition-all"
              >
                <CheckCircle2 size={18} />
                Enviar Solicitud
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
