'use client'

import { GridBackground } from "./grid-background"
import { AnimatedGrid } from "./animated-grid"
import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { Copy } from "lucide-react"

export function HeroSection() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [isInitializing, setIsInitializing] = useState(true)
  const [bgEffect, setBgEffect] = useState<string>('none')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const terminalText = useMemo(() => [
    "$ PARALLAX_BRIDGE v2.4.5 - Neural Interface Terminal",
    "$ Type 'help' for available commands",
    "$ Initializing system components..."
  ], [])

  const commands = {
    help: () => {
      setBgEffect('help')
      setTimeout(() => setBgEffect('none'), 2000)
      return [
        "Available commands:",
        "  help     - Show this help message",
        "  clear    - Clear terminal",
        "  status   - Check neural bridge status",
        "  connect  - Initialize neural connection",
        "  sync     - Synchronize quantum states",
        "  version  - Show system version"
      ]
    },
    clear: () => {
      setBgEffect('clear')
      setTimeout(() => setBgEffect('none'), 1000)
      setTerminalLines([])
      return []
    },
    status: () => {
      setBgEffect('status')
      setTimeout(() => setBgEffect('none'), 3000)
      return [
        "Neural Bridge Status:",
        "  Connection: " + (Math.random() > 0.5 ? "ACTIVE" : "STANDBY"),
        "  Quantum Coherence: " + (Math.floor(Math.random() * 20) + 80) + "%",
        "  Synaptic Gain: 0." + (Math.floor(Math.random() * 900) + 100),
        "  Neural Frequency: " + (Math.floor(Math.random() * 40) + 80) + " Hz"
      ]
    },
    connect: () => {
      setBgEffect('connect')
      setTimeout(() => setBgEffect('none'), 4000)
      return [
        "Initializing neural connection...",
        "> Establishing quantum entanglement",
        "> Calibrating synaptic pathways",
        "> Synchronizing neural patterns",
        "Neural bridge connection established successfully."
      ]
    },
    sync: () => {
      setBgEffect('sync')
      setTimeout(() => setBgEffect('none'), 3000)
      return [
        "Synchronizing quantum states...",
        "Progress: [▓▓▓▓▓▓▓▓▓▓] 100%",
        "Quantum state coherence achieved."
      ]
    },
    version: () => {
      setBgEffect('version')
      setTimeout(() => setBgEffect('none'), 2000)
      return [
        "PARALLAX_BRIDGE v2.4.5",
        "Build: 20240312-quantum-stable",
        "Protocol: Neural-QSync v1.2"
      ]
    }
  }

  useEffect(() => {
    if (isInitializing && currentLine < terminalText.length) {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, terminalText[currentLine]])
        setCurrentLine(prev => prev + 1)
      }, Math.random() * 200 + 50)

      if (currentLine === terminalText.length - 1) {
        setIsInitializing(false)
      }

      return () => clearTimeout(timer)
    }
  }, [currentLine, isInitializing, terminalText])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const commandFn = commands[trimmedCmd as keyof typeof commands]
    
    if (commandFn) {
      const output = commandFn()
      setTerminalLines(prev => [...prev, `$ ${cmd}`, ...output])
    } else if (trimmedCmd) {
      setTerminalLines(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      handleCommand(inputValue)
      setInputValue('')
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const getBgEffectClasses = () => {
    switch (bgEffect) {
      case 'help':
        return 'bg-purple-900/20 transition-colors duration-1000'
      case 'clear':
        return 'bg-black transition-colors duration-500'
      case 'status':
        return 'bg-blue-900/30 transition-colors duration-1000'
      case 'connect':
        return 'bg-green-900/30 animate-pulse transition-colors duration-1000'
      case 'sync':
        return 'bg-cyan-900/30 animate-pulse transition-colors duration-1000'
      case 'version':
        return 'bg-yellow-900/20 transition-colors duration-1000'
      case 'copy':
        return 'bg-green-900/10 transition-colors duration-300'
      default:
        return 'bg-[#0A0A0A] transition-colors duration-1000'
    }
  }

  return (
    <div className={`relative min-h-screen flex items-center overflow-hidden ${getBgEffectClasses()}`}>
      <GridBackground />
      <AnimatedGrid />
      
      {/* Overlay for special effects */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        bgEffect !== 'none' ? 'opacity-100' : 'opacity-0'
      }`}>
        {bgEffect === 'connect' && (
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent animate-pulse" />
        )}
        {bgEffect === 'sync' && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-transparent animate-scan" />
        )}
        {bgEffect === 'status' && (
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        )}
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-wider text-[#00FF00] matrix-text">
              PARALLAX
              <br />
              CHAIN
            </h1>
            <p className="text-[#00FF00]/80 text-lg max-w-xl font-mono">
              A neural interface for collective intelligence, bridging human cognition
              with artificial consciousness through advanced matrix protocols.
            </p>
            <Link href="/cognitive-bridge">
              <button className="bg-transparent border-2 border-[#00FF00] text-[#00FF00] px-8 py-3 
                             hover:bg-[#00FF00]/10 transition-colors duration-300 font-mono">
                INITIALIZE SYSTEM
              </button>
            </Link>
            
            {/* Contract Address Section */}
            <div className="flex items-center gap-2 bg-black/30 p-2 rounded-lg border border-[#00FF00]/20 max-w-fit">
              <div className="flex flex-col">
                <span className="text-[#00FF00]/70 text-xs font-mono">$PARALLAX Token</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00] font-mono text-sm">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('0x742d35Cc6634C0532925a3b844Bc454e4438f44e')
                      setBgEffect('copy')
                      setTimeout(() => setBgEffect('none'), 1000)
                    }}
                    className="p-1 hover:bg-[#00FF00]/10 rounded transition-colors"
                  >
                    <Copy className="w-4 h-4 text-[#00FF00]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-12 font-mono">
              <span className="text-[#00FF00] text-2xl font-bold">01</span>
              <span className="text-[#00FF00]/50">/04</span>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF00]" />
                <span className="w-2 h-2 rounded-full bg-[#00FF00]/30" />
                <span className="w-2 h-2 rounded-full bg-[#00FF00]/30" />
                <span className="w-2 h-2 rounded-full bg-[#00FF00]/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Vertical Stack */}
        <div className="w-full lg:w-1/2 relative flex flex-col gap-4">
          {/* Spline Scene */}
          <div className="relative h-[400px]">
            <div className="absolute inset-0 grid-matrix opacity-20" />
            <div className="absolute inset-0 matrix-gradient rounded-full blur-3xl opacity-20" />
            
            <div className="relative w-full h-full">
              <iframe
                src="https://my.spline.design/particleaibrain-a998d24997ac1fd34adfdba9e98d9110/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-lg"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute inset-0 circuit-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent animate-scan" />
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="relative h-[200px]" onClick={focusInput}>
            <div className="absolute inset-0 grid-matrix opacity-20" />
            <div className="absolute inset-0 matrix-gradient rounded-full blur-3xl opacity-20" />
            
            <div className="relative w-full h-full bg-black/80 backdrop-blur-sm rounded-lg border border-[#00FF00]/20 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#00FF00]/10 border-b border-[#00FF00]/20">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[#00FF00]/80 font-mono text-sm">neural_bridge_terminal</span>
              </div>
              
              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                className="p-4 font-mono text-sm h-[calc(100%-2.5rem)] overflow-y-auto"
              >
                {terminalLines.map((line, index) => (
                  <div 
                    key={index} 
                    className={`text-[#00FF00] ${
                      line.startsWith('$') ? 'opacity-70' : 
                      line.startsWith('>') ? 'opacity-90' : 'opacity-100'
                    } ${line.includes('SUCCESS') || line.includes('ACTIVE') ? 'text-[#00FF00] font-bold' : ''}`}
                  >
                    {line}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-[#00FF00] opacity-70">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 ml-2 bg-transparent border-none outline-none text-[#00FF00] font-mono text-sm"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 