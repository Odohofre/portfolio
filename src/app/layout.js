import './globals.css'
import { Inter as Heebo } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Bright Odohofre Portfolio',
  description: 'This is Bright Odohofre Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  )
}
