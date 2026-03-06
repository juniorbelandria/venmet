'use client'

import { useEffect } from 'react'

export default function SecurityProtection() {
  useEffect(() => {
    // Deshabilitar clic derecho
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Deshabilitar teclas de desarrollador
    const handleKeyDown = (e) => {
      // F12 - Herramientas de desarrollador
      if (e.keyCode === 123) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+I - Inspeccionar elemento
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+J - Consola
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+U - Ver código fuente
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+C - Selector de elementos
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+S - Guardar página
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault()
        return false
      }
    }

    // Detectar si las DevTools están abiertas
    const detectDevTools = () => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold
      
      if (widthThreshold || heightThreshold) {
        // Opcional: Redirigir o mostrar mensaje
        console.clear()
      }
    }

    // Deshabilitar selección de texto (opcional)
    const disableTextSelection = (e) => {
      // Puedes comentar esto si quieres permitir selección de texto
      // e.preventDefault()
      // return false
    }

    // Deshabilitar arrastrar imágenes
    const disableDragStart = (e) => {
      e.preventDefault()
      return false
    }

    // Limpiar consola periódicamente
    const clearConsoleInterval = setInterval(() => {
      console.clear()
    }, 1000)

    // Detectar si se está usando el debugger
    const antiDebugger = () => {
      setInterval(() => {
        debugger
      }, 100)
    }

    // Protección contra copiar contenido
    const handleCopy = (e) => {
      // Opcional: Puedes permitir copiar pero modificar el contenido
      // e.preventDefault()
      // return false
    }

    // Agregar event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('selectstart', disableTextSelection)
    document.addEventListener('dragstart', disableDragStart)
    document.addEventListener('copy', handleCopy)
    
    // Detectar DevTools cada segundo
    const devToolsInterval = setInterval(detectDevTools, 1000)

    // Opcional: Activar anti-debugger (puede afectar rendimiento)
    // antiDebugger()

    // Deshabilitar console.log en producción
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {}
      console.warn = () => {}
      console.error = () => {}
      console.info = () => {}
      console.debug = () => {}
    }

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('selectstart', disableTextSelection)
      document.removeEventListener('dragstart', disableDragStart)
      document.removeEventListener('copy', handleCopy)
      clearInterval(clearConsoleInterval)
      clearInterval(devToolsInterval)
    }
  }, [])

  return null // Este componente no renderiza nada
}
