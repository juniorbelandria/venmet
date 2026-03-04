'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
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
    <footer className="relative text-white py-[60px] px-[5%] overflow-hidden"
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

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/images/FOOTER.png"
                alt="VENMET Logo"
                width={140}
                height={46}
                className="h-auto"
              />
            </div>

            <p className="font-['Inter'] text-[14px] text-white/70 leading-relaxed mb-6">
              Más de 20 años brindando servicios de calibración y verificación de instrumentos de medición con trazabilidad garantizada.
            </p>

            {/* Contacto Directo */}
            <div className="space-y-3">
              <a href="tel:+584242049381" className="flex items-center gap-2 text-white/80 hover:text-[#27eee7] transition-colors group">
                <Phone size={16} className="text-[#27eee7]" />
                <span className="font-['Inter'] text-[13px]">+58 0424-204.93.81</span>
              </a>
              <a href="mailto:info@venmet.com.ve" className="flex items-center gap-2 text-white/80 hover:text-[#27eee7] transition-colors group">
                <Mail size={16} className="text-[#27eee7]" />
                <span className="font-['Inter'] text-[13px]">info@venmet.com.ve</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Empresa */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[16px] text-white mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              {enlaces.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[14px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[16px] text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {enlaces.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[14px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Soporte y Ubicación */}
          <div>
            <h4 className="font-['Inter'] font-bold text-[16px] text-white mb-4">
              Soporte
            </h4>
            <ul className="space-y-2 mb-6">
              {enlaces.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-['Inter'] text-[14px] text-white/70 hover:text-[#27eee7] transition-colors inline-block"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ubicación */}
            <div className="flex items-start gap-2 text-white/70">
              <MapPin size={16} className="text-[#27eee7] mt-0.5 flex-shrink-0" />
              <p className="font-['Inter'] text-[13px] leading-relaxed">
                Urb. El Marqués, Miranda<br />
                Caracas, Venezuela
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="font-['Inter'] text-[13px] text-white/60 text-center md:text-left">
              © {currentYear} Venezolana de Metrología C.A. Todos los derechos reservados.
            </p>

            {/* Certificaciones */}
            <div className="flex items-center gap-4">
              <span className="font-['Inter'] text-[12px] text-white/50">Certificado por:</span>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-['Inter'] font-bold text-[10px] text-[#27eee7]">
                  ISO/IEC 17025
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-['Inter'] font-bold text-[10px] text-[#27eee7]">
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
