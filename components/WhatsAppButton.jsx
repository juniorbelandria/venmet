'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-7 right-7 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-[#0B1F3A] text-white text-[13px] font-['Inter'] font-medium rounded-lg whitespace-nowrap shadow-lg animate-fadeInUp">
          💬 Cotiza por WhatsApp
          <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-[#0B1F3A] rotate-45" />
        </div>
      )}

      {/* Botón */}
      <a
        href="https://wa.me/584242049381"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce-slow"
        style={{ 
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          animation: 'wa-bounce 3s ease-in-out infinite 2s'
        }}
      >
        <MessageCircle size={28} className="text-white" strokeWidth={2} />
      </a>

      <style jsx>{`
        @keyframes wa-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  )
}
