import './globals.css'
import SecurityProtection from '@/components/SecurityProtection'

export const metadata = {
  title: 'VENMET - Venezolana de Metrología C.A.',
  description: 'Calibración y certificación de instrumentos bajo normas ISO y COVENIN',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'VENMET - Venezolana de Metrología C.A.',
    description: 'Calibración y certificación de instrumentos bajo normas ISO y COVENIN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>
        <SecurityProtection />
        {children}
      </body>
    </html>
  )
}
