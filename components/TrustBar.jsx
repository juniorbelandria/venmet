'use client'

import { useEffect, useState } from 'react'
import { Factory, Utensils, FlaskConical, Building2, Microscope, Hospital } from 'lucide-react'
import Image from 'next/image'

export default function TrustBar() {
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

    const element = document.getElementById('trust-bar')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const sectors = [
    { icon: Factory, name: 'Industria Farmacéutica' },
    { icon: Utensils, name: 'Sector Alimentario' },
    { icon: FlaskConical, name: 'Industria Química' },
    { icon: Building2, name: 'Manufactura' },
    { icon: Microscope, name: 'Laboratorios Clínicos' },
    { icon: Hospital, name: 'Sector Salud' },
  ]

  return (
    <section 
      id="trust-bar"
      className="relative py-[80px] px-[5%] overflow-hidden"
      style={{ background: '#152b86' }}
    >
      {/* Background Image with blur */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/images/laboratorio.jpg"
          alt=""
          fill
          className="object-cover blur-sm scale-110"
          priority
          quality={100}
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.3) 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }} 
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Badge with Glassmorphism */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: 'rgba(39, 238, 231, 0.05)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '0.5px solid rgba(39, 238, 231, 0.3)',
              boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 4px 24px rgba(39, 238, 231, 0.15)'
            }}
          >
            <span className="text-white/90 font-['Inter'] text-[13px] font-medium tracking-wide uppercase">
              Sectores que Atendemos
            </span>
            <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--acento)' }} />
          </div>
        </div>

        {/* Sectors Grid - Professional Circular Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:scale-110 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Circular Icon Container */}
                <div 
                  className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    background: 'rgba(39, 238, 231, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(39, 238, 231, 0.2)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05), 0 4px 16px rgba(39, 238, 231, 0.1)'
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 30px rgba(39, 238, 231, 0.4)'
                    }}
                  />
                  <Icon 
                    className="w-10 h-10 transition-all duration-300 relative z-10" 
                    style={{ color: 'var(--acento)' }}
                    strokeWidth={1.5} 
                  />
                </div>
                <p className="font-['Inter'] text-[14px] text-white/90 font-medium text-center leading-tight">
                  {sector.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
