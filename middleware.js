import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  
  // Headers de seguridad adicionales
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // Protección contra hotlinking de imágenes
  const referer = request.headers.get('referer')
  const url = request.nextUrl
  
  if (url.pathname.startsWith('/images/') && referer) {
    const refererUrl = new URL(referer)
    const currentUrl = new URL(request.url)
    
    // Permitir solo desde el mismo dominio
    if (refererUrl.hostname !== currentUrl.hostname) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  // Bloquear user agents sospechosos
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousAgents = [
    'scrapy',
    'crawler',
    'spider',
    'bot',
    'scraper',
    'curl',
    'wget',
    'python-requests',
    'postman'
  ]
  
  const isSuspicious = suspiciousAgents.some(agent => 
    userAgent.toLowerCase().includes(agent)
  )
  
  // Permitir bots legítimos de motores de búsqueda
  const legitimateBots = ['googlebot', 'bingbot', 'slurp', 'duckduckbot']
  const isLegitimate = legitimateBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  )
  
  if (isSuspicious && !isLegitimate) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
