import { Inter } from 'next/font/google'
import './globals.css'
import Head from '@/app/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
