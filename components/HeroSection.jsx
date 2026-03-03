'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Sparkles, Shield, Microscope, FileText, Link2, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { 
      title: 'ISO/IEC 17025', 
      subtitle: 'Acreditación Internacional',
      Icon: Microscope
    },
    { 
      title: 'COVENIN', 
      subtitle: 'Normas Venezolanas',
      Icon: FileText
    },
    { 
      title: 'Trazabilidad', 
      subtitle: 'Garantía Total',
      Icon: Link2
    },
    { 
      title: '48-72h', 
      subtitle: 'Entrega Rápida',
      Icon: Zap
    }
  ]

  return (
    <section 
      id="inicio" 
      className="relative bg-[#0a0e1a] pt-[140px] pb-[120px] px-[5%] overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Blurred Background Image */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/images/imagenhero.webp"
          alt=""
          fill
          className="object-cover blur-sm scale-110"
          priority
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Floating Radial Gradients */}
      <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] opacity-20 rounded-full blur-3xl animate-float-slow" style={{ background: 'radial-gradient(circle, var(--acento) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 via-blue-500/5 to-transparent rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] opacity-10 rounded-full blur-3xl animate-float-slowest" style={{ background: 'radial-gradient(circle, var(--acento) 0%, transparent 70%)' }} />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.3) 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }} 
      />

      <div className="relative max-w-[1100px] mx-auto">
        <div className="text-center">
          {/* Certified Badge - Glassmorphism */}
          <div 
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 transition-all duration-1000 ${
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
            <Shield className="w-3.5 h-3.5" style={{ color: 'var(--acento)' }} strokeWidth={2} />
            <span className="text-white/90 font-['Inter'] text-[13px] font-medium tracking-wide uppercase">
              Laboratorio Certificado
            </span>
            <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--acento)' }} />
          </div>

          {/* Main Headline with Gradient on "exactas" */}
          <h1 
            className={`font-['Inter'] font-bold text-white leading-[1.1] mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              fontSize: 'clamp(40px, 6.5vw, 76px)',
              letterSpacing: '-0.03em',
              fontVariationSettings: '"wght" 700'
            }}
          >
            Tus mediciones{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--acento), #1dd4cd, var(--acento))',
                textShadow: '0 0 60px rgba(39, 238, 231, 0.4)',
                filter: 'drop-shadow(0 0 20px rgba(39, 238, 231, 0.3))'
              }}
            >
              exactas
            </span>
            ,<br />
            tu empresa sin riesgo
          </h1>

          {/* Subtitle */}
          <p 
            className={`font-['Inter'] text-[19px] leading-relaxed mb-10 max-w-[680px] mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Calibramos y certificamos tus instrumentos bajo normas <span style={{ color: 'var(--acento)', fontWeight: 600 }}>ISO</span> y <span style={{ color: 'var(--acento)', fontWeight: 600 }}>COVENIN</span> para que pases cualquier inspección sin rechazos.
          </p>

          {/* CTAs with Shimmer Effect */}
          <div 
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Primary Button with Shimmer */}
            <a
              href="https://wa.me/584242049381"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] hover:brightness-110 transition-all group overflow-hidden"
              style={{
                backgroundColor: 'var(--acento)',
                color: 'var(--azul)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.1) inset, 0 8px 32px rgba(39, 238, 231, 0.4)',
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
              <span className="relative">Solicitar Cotización Gratis</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </a>

            {/* Secondary Button */}
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] transition-all hover:border-white/30"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              Ver Servicios
            </a>
          </div>

          {/* Features List - Simple without cards */}
          <div 
            className={`flex flex-wrap justify-center gap-8 max-w-[900px] mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.Icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-6 h-6" style={{ color: 'var(--acento)' }} strokeWidth={1.5} />
                  <p className="font-['Inter'] font-semibold text-[15px] text-white leading-tight">
                    {feature.title}
                  </p>
                  <p className="font-['Inter'] text-[13px] text-white/50 font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.08); }
        }
        @keyframes float-slowest {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.03); }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float-slowest 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
