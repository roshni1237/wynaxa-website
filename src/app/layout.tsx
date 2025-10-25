"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollPosition / windowHeight) * 100
      
      setScrollProgress(progress)
      setShowScrollTop(scrollPosition > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { href: '/about', label: 'About', color: 'wynaxa-purple' },
    { href: '/ecosystem', label: 'Ecosystem', color: 'wynaxa-blue' },
    { href: '/investors', label: 'Investors', color: 'wynaxa-green' },
    { href: '/products', label: 'Products', color: 'wynaxa-orange' },
    { href: '/careers', label: 'Careers', color: 'foreground/80' },
    { href: '/contact', label: 'Contact', color: 'foreground/80' },
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Wynaxa - The Future, Connected Locally</title>
        <meta name="description" content="Empowering communities through technology that redefines how we connect, pay, and grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-wynaxa-purple via-wynaxa-blue to-wynaxa-green z-50" style={{ width: `${scrollProgress}%` }} />

        {/* Navigation */}
        <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 sm:h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  WYNAXA
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-${link.color} hover:scale-105`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden sm:flex items-center gap-4">
                <Link href="/investor-access">
                  <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue hover:shadow-xl transition-all duration-300">
                    Investor Access
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-background/95 backdrop-blur-xl animate-in">
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-medium transition-colors hover:text-wynaxa-purple"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/investor-access" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">
                    Investor Access
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-in"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}

        {/* Footer */}
        <footer className="border-t bg-muted/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue bg-clip-text text-transparent">
                  WYNAXA
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Future, Connected Locally
                </p>
                <p className="text-xs text-muted-foreground">
                  Empowering communities through technology
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <div className="space-y-3 text-sm">
                  <Link href="/about" className="block hover:text-wynaxa-purple transition-all duration-300 hover:translate-x-1">
                    About Us
                  </Link>
                  <Link href="/careers" className="block hover:text-wynaxa-purple transition-all duration-300 hover:translate-x-1">
                    Careers
                  </Link>
                  <Link href="/contact" className="block hover:text-wynaxa-purple transition-all duration-300 hover:translate-x-1">
                    Contact
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Products</h4>
                <div className="space-y-3 text-sm">
                  <Link href="/ecosystem#pay" className="block hover:text-wynaxa-purple transition-all duration-300 hover:translate-x-1">
                    🟣 Wynaxa Pay
                  </Link>
                  <Link href="/ecosystem#one" className="block hover:text-wynaxa-blue transition-all duration-300 hover:translate-x-1">
                    🔵 Wynaxa One
                  </Link>
                  <Link href="/ecosystem#eco" className="block hover:text-wynaxa-green transition-all duration-300 hover:translate-x-1">
                    🟢 Wynaxa Eco
                  </Link>
                  <Link href="/ecosystem#foundry" className="block hover:text-wynaxa-orange transition-all duration-300 hover:translate-x-1">
                    🟠 Wynaxa Foundry
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Connect</h4>
                <div className="space-y-3 text-sm">
                  <a href="mailto:info@wynaxa.com" className="block hover:text-wynaxa-purple transition-all duration-300 hover:translate-x-1">
                    info@wynaxa.com
                  </a>
                  <a href="mailto:investors@wynaxa.com" className="block hover:text-wynaxa-blue transition-all duration-300 hover:translate-x-1">
                    investors@wynaxa.com
                  </a>
                  <Link href="/investor-access" className="block hover:text-wynaxa-green transition-all duration-300 hover:translate-x-1">
                    Investor Portal
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-t mt-12 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Wynaxa. All rights reserved. | Building the future of local commerce.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
