'use client'

import { useState, useEffect } from 'react'
import { X, Phone, MessageCircle, Check, Clock } from 'lucide-react'

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const hasShown = sessionStorage.getItem('venmet_exit')
    if (hasShown) return

    const handleMouseLeave = (e) => {
      // Solo mostrar si el mouse sale por arriba
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        sessionStorage.setItem('venmet_exit', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fadeIn">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-[24px] p-8 max-w-[500px] mx-4 shadow-2xl animate-scaleIn"
        style={{ animation: 'modalEnter 0.4s ease-out' }}
      >
        {/* Botón Cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EEF1F6] transition-colors"
        >
          <X size={20} className="text-[#8A96A8]" />
        </button>

        {/* Contenido */}
        <div className="text-center">
          {/* Icono */}
          <div className="w-20 h-20 bg-[#00C9A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-10 h-10 text-[#00C9A7]" strokeWidth={2} />
          </div>

          {/* Título */}
          <h3 className="font-['Space_Grotesk'] font-bold text-[28px] text-[#1A2B42] mb-3 leading-tight">
            ¡Espera! No te vayas sin tu cotización
          </h3>

          {/* Subtítulo */}
          <p className="font-['Inter'] text-[16px] text-[#3A4D63] leading-relaxed mb-6">
            Más de 500 empresas confían en nosotros. Obtén tu cotización gratis en menos de 24 horas.
          </p>

          {/* Beneficios */}
          <div className="bg-[#F5F7FA] rounded-[12px] p-4 mb-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00C9A7]" strokeWidth={2.5} />
                <span className="font-['Inter'] text-[14px] text-[#3A4D63]">
                  Respuesta en menos de 24 horas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00C9A7]" strokeWidth={2.5} />
                <span className="font-['Inter'] text-[14px] text-[#3A4D63]">
                  Certificados válidos para auditorías
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00C9A7]" strokeWidth={2.5} />
                <span className="font-['Inter'] text-[14px] text-[#3A4D63]">
                  +20 años de experiencia
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/584242049381"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-[12px] font-['Space_Grotesk'] font-bold text-[15px] hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>

            <a
              href="tel:+584242049381"
              onClick={handleClose}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00C9A7] text-[#00C9A7] px-6 py-4 rounded-[12px] font-['Space_Grotesk'] font-bold text-[15px] hover:bg-[#00C9A7]/5 transition-all"
            >
              <Phone size={20} />
              Llamar Ahora
            </a>
          </div>

          {/* Texto pequeño */}
          <p className="font-['Inter'] text-[12px] text-[#8A96A8] mt-4">
            Sin compromisos. Cotización 100% gratis.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
