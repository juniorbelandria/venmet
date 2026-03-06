'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function ProtectedImage({ src, alt, ...props }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    // Prevenir arrastrar imagen
    const preventDrag = (e) => {
      e.preventDefault()
      return false
    }

    // Prevenir clic derecho en la imagen
    const preventContext = (e) => {
      e.preventDefault()
      return false
    }

    img.addEventListener('dragstart', preventDrag)
    img.addEventListener('contextmenu', preventContext)

    return () => {
      img.removeEventListener('dragstart', preventDrag)
      img.removeEventListener('contextmenu', preventContext)
    }
  }, [])

  return (
    <div ref={imgRef} style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
      <Image
        src={src}
        alt={alt}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        {...props}
      />
    </div>
  )
}
