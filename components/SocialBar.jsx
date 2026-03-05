'use client'

import { useState } from 'react'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function SocialBar() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/venmet',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/venmet',
      color: '#E4405F'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/584242049381',
      color: '#25D366'
    }
  ]

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div 
        className="flex flex-col gap-3 p-3 rounded-2xl backdrop-blur-md"
        style={{
          background: 'rgba(21, 43, 134, 0.95)',
          boxShadow: '0 8px 32px rgba(21, 43, 134, 0.3), 0 0 20px rgba(39, 238, 231, 0.2)',
          border: '1px solid rgba(39, 238, 231, 0.2)'
        }}
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          const isHovered = hoveredIcon === social.name
          
          return (
            <div key={social.name} className="relative">
              {/* Tooltip */}
              {isHovered && (
                <div 
                  className="absolute left-full ml-4 px-4 py-2 text-white text-[13px] font-['Inter'] font-semibold rounded-lg whitespace-nowrap shadow-xl animate-fadeInLeft"
                  style={{ 
                    background: '#152b86',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  {social.name}
                  <div 
                    className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0"
                    style={{
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      borderRight: '6px solid #152b86'
                    }}
                  />
                </div>
              )}

              {/* Botón */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon(social.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 group"
                style={{
                  background: isHovered ? '#27eee7' : 'rgba(39, 238, 231, 0.1)',
                  border: isHovered ? '2px solid #27eee7' : '2px solid rgba(39, 238, 231, 0.3)',
                  boxShadow: isHovered ? '0 6px 20px rgba(39, 238, 231, 0.4)' : 'none'
                }}
              >
                <Icon 
                  size={20} 
                  strokeWidth={2.5}
                  className="transition-colors duration-300"
                  style={{ 
                    color: isHovered ? '#152b86' : '#27eee7'
                  }}
                />
              </a>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
