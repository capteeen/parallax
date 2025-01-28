'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/parallax.png"
                alt="Parallax Brain Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                priority
              />
              <span className="text-white font-bold text-xl">PARALLAX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/installation" className="text-white/80 hover:text-white transition-colors">
              Installation
            </Link>
            <Link href="/features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/neural-network" className="text-white/80 hover:text-white transition-colors">
              Neural Network
            </Link>
            <Link href="/cognitive-bridge" className="text-white/80 hover:text-white transition-colors">
              Cognitive Bridge
            </Link>
            <Link href="/adaptive-learning" className="text-white/80 hover:text-white transition-colors">
              Adaptive Learning
            </Link>
            <Link href="/resource" className="text-white/80 hover:text-white transition-colors">
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm rounded-lg mt-2">
              <Link 
                href="/installation" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Installation
              </Link>
              <Link 
                href="/features" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link 
                href="/neural-network" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Neural Network
              </Link>
              <Link 
                href="/cognitive-bridge" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Cognitive Bridge
              </Link>
              <Link 
                href="/adaptive-learning" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Adaptive Learning
              </Link>
              <Link 
                href="/resource" 
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 