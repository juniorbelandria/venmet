'use client'

import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const enlaces = {
    empresa: [
      { nombre: 'Nosotros', href: '#nosotros' },
      { nombre: 'Servicios', href: '#servicios' },
      { nombre: 'Proceso', href: '#proceso' },
      { nombre: 'Certificaciones', href: '#certificaciones' }
    ],
    servicios: [
      { nombre: 'Temperatura y Humedad', href: '#servicios' },
      { nombre: 'Masa', href: '#servicios' },
      { nombre: 'Presión', href: '#servicios' },
      { nombre: 'Dimensional', href: '#servicios' }
    ],
    soporte: [
      { nombre: 'FAQ', href: '#faq' },
      { nombre: 'Solicitar Cotización', href: '#solicitud' },
      { nombre: 'Contacto', href: '#contacto' },
      { nombre: 'Testimonios', href: '#testimonios' }
    ]
  }

  return (
    <footer className="relative text-white overflow-hidden"
      style={{ background: '#152b86' }}
    >
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,238,231,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39,238,231,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#27eee7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#27eee7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-[5%]">
        
        {/* CTA Section - Más prominente */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-[600px]">
              <h3 className="font-['Inter'] font-bold text-white mb-3"
                style={{ 
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                ¿Necesitas calibrar tus equipos?
              </h3>
              <p className="font-['Inter'] text-[16px] text-white/70 leading-relaxed"
                style={{ fontWeight: 500 }}
              >
                Obtén tu cotización gratis en menos de 24 horas
              </p>
            </div>
            <a
              href="https://wa.me/584242049381"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-['Inter'] font-semibold text-[15px] hover:scale-105 transition-all group overflow-hidden whitespace-nowrap"
              style={{
                background: '#27eee7',
                color: '#152b86',
                boxShadow: '0 8px 32px rgba(39, 238, 231, 0.3)'
              }}
            >
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  width: '50%'
                }}
              />
              <span className="relative">Solicitar Cotización</span>
              <ArrowRight className="relative" size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Main Content - Grid optimizado */}
        <div className="py-16">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Logo y Descripción - 4 columnas */}
            <div className="lg:col-span-4">
              <div className="text-center lg:text-left">
                <Image
                  src="/images/FOOTER.png"
                  alt="VENMET Logo"
                  width={140}
                  height={46}
                  className="h-auto mb-5 mx-auto lg:mx-0"
                />
                <p className="font-['Inter'] text-[14px] text-white/70 leading-relaxed mb-8"
                  style={{ fontWeight: 500 }}
                >
                  +20 años brindando servicios de calibración con trazabilidad garantizada.
                </p>
              </div>
              
              {/* Redes Sociales - Centradas */}
              <div className="flex items-center justify-center lg:justify-center gap-4 mb-6">
                <a 
                  href="https://facebook.com/venmet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  style={{
                    background: 'rgba(39, 238, 231, 0.1)',
                    border: '1px solid rgba(39, 238, 231, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#27eee7'
                    e.currentTarget.style.borderColor = '#27eee7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(39, 238, 231, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(39, 238, 231, 0.2)'
                  }}
                >
                  <Facebook size={22} className="text-white group-hover:text-[#152b86] transition-colors" strokeWidth={2} />
                </a>

                <a 
                  href="https://instagram.com/venmet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  style={{
                    background: 'rgba(39, 238, 231, 0.1)',
                    border: '1px solid rgba(39, 238, 231, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#27eee7'
                    e.currentTarget.style.borderColor = '#27eee7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(39, 238, 231, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(39, 238, 231, 0.2)'
                  }}
                >
                  <Instagram size={22} className="text-white group-hover:text-[#152b86] transition-colors" strokeWidth={2} />
                </a>
              </div>

              {/* Contacto - En una sola línea centrado */}
              <div className="flex flex-wrap items-center justify-center lg:justify-center gap-3 text-white/70 text-[13px]"
                style={{ fontWeight: 500 }}
              >
                <a href="tel:+584242049381" className="hover:text-[#27eee7] transition-colors whitespace-nowrap">
                  +58 0424-204.93.81
                </a>
                <span className="text-white/30">•</span>
                <a href="mailto:info@venmet.com.ve" className="hover:text-[#27eee7] transition-colors whitespace-nowrap">
                  info@venmet.com.ve
                </a>
                <span className="text-white/30">•</span>
                <span className="whitespace-nowrap">
                  Urb. El Marqués, Miranda, Caracas, Venezuela
                </span>
              </div>
            </div>

            {/* Empresa - 2 columnas */}
            <div className="lg:col-span-2">
              <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="space-y-2.5">
                {enlaces.empresa.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-['Inter'] text-[13px] text-white/70 hover:text-[#27eee7] hover:translate-x-1 transition-all inline-block"
                      style={{ fontWeight: 500 }}
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios - 3 columnas */}
            <div className="lg:col-span-3">
              <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
                Servicios
              </h4>
              <ul className="space-y-2.5">
                {enlaces.servicios.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-['Inter'] text-[13px] text-white/70 hover:text-[#27eee7] hover:translate-x-1 transition-all inline-block"
                      style={{ fontWeight: 500 }}
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soporte - 3 columnas */}
            <div className="lg:col-span-3">
              <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
                Soporte
              </h4>
              <ul className="space-y-2.5">
                {enlaces.soporte.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-['Inter'] text-[13px] text-white/70 hover:text-[#27eee7] hover:translate-x-1 transition-all inline-block"
                      style={{ fontWeight: 500 }}
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Más elegante */}
        <div className="py-6 border-t border-white/10">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="font-['Inter'] text-[12px] text-white/50 text-center md:text-left"
              style={{ fontWeight: 500 }}
            >
              © {currentYear} Venezolana de Metrología C.A. Todos los derechos reservados.
            </p>

            {/* Certificaciones - Más prominentes */}
            <div className="flex items-center gap-3">
              <span className="font-['Inter'] text-[11px] text-white/40" style={{ fontWeight: 500 }}>Certificado por:</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#27eee7]/10 border border-[#27eee7]/30 font-['Inter'] font-bold text-[10px] text-[#27eee7] tracking-wider uppercase">
                  ISO/IEC 17025
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#27eee7]/10 border border-[#27eee7]/30 font-['Inter'] font-bold text-[10px] text-[#27eee7] tracking-wider uppercase">
                  COVENIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
