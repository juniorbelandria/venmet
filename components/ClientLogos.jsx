'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ClientLogos() {
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

    const element = document.getElementById('client-logos')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  // Logos de clientes (5.png a 12.png)
  const logos = [
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
    '/images/10.png',
    '/images/11.png',
    '/images/12.png'
  ]

  return (
    <section 
      id="client-logos"
      className="relative py-20 px-[5%] overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(21,43,134,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(21,43,134,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} 
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-['Inter'] text-[13px] font-semibold text-[#152b86]/60 uppercase tracking-wider mb-2">
            Confían en Nosotros
          </p>
          <h3 className="font-['Inter'] font-bold text-[24px] text-[#152b86]"
            style={{ letterSpacing: '-0.01em' }}
          >
            Empresas que garantizan su calidad con VENMET
          </h3>
        </div>

        {/* Infinite Slider Container */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Gradient Overlays para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Slider Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {/* Primera copia de logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 mx-16 flex items-center justify-center group"
                  style={{ width: '260px', height: '130px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Cliente ${index + 1}`}
                      width={240}
                      height={120}
                      className="object-contain transition-all duration-300 logo-grayscale"
                      style={{
                        filter: 'grayscale(100%) brightness(1.2) contrast(0.9) opacity(0.6)',
                        maxWidth: '240px',
                        maxHeight: '120px'
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* Segunda copia de logos para loop infinito */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 mx-16 flex items-center justify-center group"
                  style={{ width: '260px', height: '130px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Cliente ${index + 1}`}
                      width={240}
                      height={120}
                      className="object-contain transition-all duration-300 logo-grayscale"
                      style={{
                        filter: 'grayscale(100%) brightness(1.2) contrast(0.9) opacity(0.6)',
                        maxWidth: '240px',
                        maxHeight: '120px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .group:hover .logo-grayscale {
          filter: grayscale(0%) brightness(1) contrast(1) opacity(1) sepia(100%) saturate(300%) hue-rotate(180deg) !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
