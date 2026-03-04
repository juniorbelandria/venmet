'use client'

import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
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
    <footer className="relative text-white py-[35px] px-[5%] overflow-hidden"
      style={{ background: '#152b86' }}
    >
      {/* Grid Pattern TEAL */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,238,231,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39,238,231,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} 
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="lg:col-span-1">
            {/* Logo más pequeño */}
            <div className="mb-3">
              <Image
                src="/images/FOOTER.png"
                alt="VENMET Logo"
                width={110}
                height={36}
                className="h-auto"
              />
            </div>

            <p className="font-['Inter'] text-[12px] text-white/70 leading-relaxed mb-4">
              Más de 20 años brindando servicios de calibración con trazabilidad garantizada.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-2.5 mb-4">
              <a 
                href="https://facebook.com/venmet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#27eee7'
                  e.currentTarget.style.borderColor = '#27eee7'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(39, 238, 231, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Facebook size={14} className="text-white group-hover:text-[#152b86] transition-colors" strokeWidth={2} />
              </a>

              <a 
                href="https://instagram.com/venmet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#27eee7'
                  e.currentTarget.style.borderColor = '#27eee7'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(39, 238, 231, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Instagram size={14} className="text-white group-hover:text-[#152b86] transition-colors" strokeWidth={2} />
              </a>
            </div>

            {/* Contacto Directo */}
            <div className="space-y-2">
              <a href="tel:+584242049381" className="flex items-center gap-2 text-white/70 hover:text-[#27eee7] transition-colors group">
                <Phone size={13} className="text-[#27eee7]" strokeWidth={2} />
                <span className="font-['Inter'] text-[11px]">+58 0424-204.93.81</span>
              </a>
              <a href="mailto:info@venmet.com.ve" className="flex items-center gap-2 text-white/70 hover:text-[#27eee7] transition-colors group">
                <Mail size={13} className="text-[#27eee7]" strokeWidth={2} />
                <span className="font-['Inter'] text-[11px]">info@venmet.com.ve</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Empresa */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-3">
              Empresa
            </h4>
            <ul className="space-y-1.5">
              {enlaces.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[12px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-3">
              Servicios
            </h4>
            <ul className="space-y-1.5">
              {enlaces.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[12px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Soporte y Ubicación */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[14px] text-white mb-3">
              Soporte
            </h4>
            <ul className="space-y-1.5 mb-4">
              {enlaces.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[12px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ubicación */}
            <div className="flex items-start gap-2 text-white/70">
              <MapPin size={13} className="text-[#27eee7] mt-0.5 flex-shrink-0" strokeWidth={2} />
              <p className="font-['Inter'] text-[11px] leading-relaxed">
                Urb. El Marqués, Miranda<br />
                Caracas, Venezuela
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            
            {/* Copyright */}
            <p className="font-['Inter'] text-[11px] text-white/50 text-center md:text-left">
              © {currentYear} Venezolana de Metrología C.A. Todos los derechos reservados.
            </p>

            {/* Certificaciones */}
            <div className="flex items-center gap-2.5">
              <span className="font-['Inter'] text-[10px] text-white/40">Certificado por:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-['Inter'] font-bold text-[9px] text-[#27eee7] tracking-wide">
                  ISO/IEC 17025
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-['Inter'] font-bold text-[9px] text-[#27eee7] tracking-wide">
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
