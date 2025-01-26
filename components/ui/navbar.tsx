'use client'

import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/parallax.png"
                alt="Parallax Brain Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                priority
              />
              <span className="text-white font-bold text-xl">PARALLAX</span>
            </div>
          </div>

          {/* Center Navigation */}
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

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/docs" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 