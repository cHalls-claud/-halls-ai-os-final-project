import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'HALLS AI OS - Final Project',
  description: 'Platform Terintegrasi dengan Bot Aktif, Sistem Autentikasi Multi-Tahap, Dashboard Komprehensif, dan Aplikasi Web Terdistribusi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
