import './globals.css'

export const metadata = {
  title: 'VENMET - Venezolana de Metrología C.A.',
  description: 'Calibración y certificación de instrumentos bajo normas ISO y COVENIN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
