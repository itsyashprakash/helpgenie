import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HelpGenie - Customer Support Services',
  description: 'Professional customer support services for businesses of all sizes',
  generator: 'Yash Gurav',
  icons: {
    icon: '/HelpGenie-favicon.png',
    apple: '/HelpGenie-favicon.png',
  },
  openGraph: {
    title: 'HelpGenie - Customer Support Services',
    description: 'Professional customer support services for businesses of all sizes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
