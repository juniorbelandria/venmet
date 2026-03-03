'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Microscope } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Cómo Funciona', href: '#proceso' },
    { name: 'Clientes', href: '#testimonios' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[5%] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group">
          <Image
            src="/images/LOGOTIPOPRINCIPAL.png"
            alt="VENMET Logo"
            width={260}
            height={80}
            className="transition-transform group-hover:scale-105 object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#3A4D63] hover:text-[var(--acento)] transition-colors text-[15px] font-['Inter'] font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[var(--acento)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#solicitud"
          className="hidden lg:flex items-center gap-2 text-white px-6 py-3 rounded-full font-['Space_Grotesk'] font-bold text-[15px] hover:brightness-110 hover:shadow-xl transition-all"
          style={{ 
            background: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)',
            boxShadow: '0 4px 20px rgba(10, 14, 26, 0.3)' 
          }}
        >
          Solicitar Servicio
          <Microscope className="w-5 h-5" strokeWidth={2.5} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F5F7FA] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#0B1F3A]" strokeWidth={2} />
          ) : (
            <Menu className="w-6 h-6 text-[#0B1F3A]" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] border-t border-[#EEF1F6]' : 'max-h-0'
        }`}
      >
        <div className="px-[5%] py-6 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-[#3A4D63] hover:text-[var(--acento)] transition-colors font-['Inter'] font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#solicitud"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 text-white px-6 py-3 rounded-full font-['Space_Grotesk'] font-bold text-center"
            style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)' }}
          >
            Solicitar Servicio
            <Microscope className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </nav>
  )
}
