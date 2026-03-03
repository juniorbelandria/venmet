'use client'

import { useEffect, useState, useRef } from 'react'
import { TrendingUp, Users, Layers, ShieldCheck } from 'lucide-react'

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    magnitudes: 0,
    traceability: 0
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-bar')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = {
      years: 20,
      clients: 500,
      magnitudes: 7,
      traceability: 100
    }

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      setCounts({
        years: Math.floor(targets.years * easeOutCubic),
        clients: Math.floor(targets.clients * easeOutCubic),
        magnitudes: Math.floor(targets.magnitudes * easeOutCubic),
        traceability: Math.floor(targets.traceability * easeOutCubic)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)
  }

  const stats = [
    {
      icon: TrendingUp,
      value: `+${counts.years}`,
      label: 'Años de Experiencia',
      gradient: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)',
      iconGradient: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
      delay: 0
    },
    {
      icon: Users,
      value: `+${counts.clients}`,
      label: 'Empresas Atendidas',
      gradient: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
      iconGradient: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)',
      delay: 100
    },
    {
      icon: Layers,
      value: counts.magnitudes,
      label: 'Magnitudes Físicas',
      gradient: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)',
      iconGradient: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
      delay: 200
    },
    {
      icon: ShieldCheck,
      value: `${counts.traceability}%`,
      label: 'Trazabilidad Garantizada',
      gradient: 'linear-gradient(135deg, #27eee7 0%, #1dd4cd 100%)',
      iconGradient: 'linear-gradient(135deg, #0a0e1a 0%, #1a3a52 100%)',
      delay: 300
    }
  ]

  return (
    <section 
      id="stats-bar"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-[60px] px-[5%] overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#27eee7]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0a0e1a]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              {/* Circular Icon with Gradient */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ 
                  background: stat.gradient,
                  boxShadow: '0 4px 20px rgba(39, 238, 231, 0.2)'
                }}
              >
                <stat.icon 
                  className="w-8 h-8" 
                  style={{ color: index % 2 === 0 ? '#27eee7' : '#0a0e1a' }}
                  strokeWidth={2}
                />
              </div>

              {/* Value with Gradient Text */}
              <p 
                className="font-['Space_Grotesk'] font-extrabold mb-2 bg-clip-text text-transparent"
                style={{ 
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  backgroundImage: stat.gradient
                }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="font-['Inter'] text-[14px] text-[#0a0e1a]/70 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
