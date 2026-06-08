import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Build AI SaaS Products. Launch Globally. Get Paid In Dollars.',
  description:
    'Join a hands-on AI SaaS Cohort where you build a real product, launch it with GTM systems, and learn how to earn in global markets. Live cohort sessions every Sunday.',
  generator: 'v0.app',
  keywords: [
    'AI SaaS',
    'cohort',
    'product building',
    'GTM',
    'global income',
    'startup',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Build AI SaaS Products. Launch Globally. Get Paid In Dollars.',
    description:
      'Join a hands-on AI SaaS Cohort where you build a real product, launch it with GTM systems, and learn how to earn in global markets.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
