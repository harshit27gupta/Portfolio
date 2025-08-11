import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harshit Gupta - Software Developer & Competitive Programmer',
  description: 'Full-stack developer with expertise in React, Node.js, and competitive programming. Building scalable applications and solving complex algorithmic challenges.',
  keywords: 'Harshit Gupta, Software Developer, Full-stack Developer, React, Node.js, Competitive Programming, LeetCode, Codeforces',
  authors: [{ name: 'Harshit Gupta' }],
  creator: 'Harshit Gupta',
  metadataBase: new URL('https://harshitgupta.dev'),
  openGraph: {
    title: 'Harshit Gupta - Software Developer & Competitive Programmer',
    description: 'Full-stack developer with expertise in React, Node.js, and competitive programming.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
