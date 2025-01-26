'use client'

import React, { useState } from 'react'
import { Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
}

interface TechStack {
  title: string
  description: string
  technologies: string[]
  code: Record<string, string>
}

type TechStacks = {
  [key: string]: TechStack
}

function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-[#00FF00]/10 hover:bg-[#00FF00]/20 transition-colors"
        >
          <Copy className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-[#00FF00]'}`} />
        </button>
      </div>
      <pre className="p-4 bg-black/30 rounded-lg border border-[#00FF00]/20 font-mono text-sm text-[#00FF00]/80 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function TechStackSection() {
  const [activeStack, setActiveStack] = useState<keyof TechStacks>('frontend')

  const techStacks: TechStacks = {
    frontend: {
      title: "Frontend Stack",
      description: "Next.js 14 with Server Components and App Router",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      code: {
        setup: `npx create-next-app@latest parallax-app --typescript --tailwind --app`,
        component: `'use client'

import { useState } from 'react'

export default function NeuralComponent() {
  const [neuralState, setNeuralState] = useState({
    connected: false,
    synapses: 0
  })

  return (
    <div className="neural-interface">
      <h2>Neural Status: {neuralState.connected ? 'Connected' : 'Disconnected'}</h2>
      <div>Active Synapses: {neuralState.synapses}</div>
    </div>
  )`
      }
    },
    blockchain: {
      title: "Blockchain Integration",
      description: "Smart contracts and blockchain connectivity",
      technologies: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin"],
      code: {
        contract: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NeuralToken is ERC721 {
    struct NeuralData {
        uint256 synapseCount;
        uint256 coherenceLevel;
        bytes32 patternHash;
    }
    
    mapping(uint256 => NeuralData) public tokenData;
    
    constructor() ERC721("Neural Interface Token", "NIT") {}
    
    function mintNeuralInterface(
        address to,
        uint256 tokenId,
        uint256 synapseCount,
        uint256 coherenceLevel,
        bytes32 patternHash
    ) external {
        tokenData[tokenId] = NeuralData(
            synapseCount,
            coherenceLevel,
            patternHash
        );
        _mint(to, tokenId);
    }
}`,
        deploy: `const hre = require("hardhat");

async function main() {
  const NeuralToken = await hre.ethers.getContractFactory("NeuralToken");
  const neuralToken = await NeuralToken.deploy();
  await neuralToken.deployed();
  
  console.log("NeuralToken deployed to:", neuralToken.address);
}`
      }
    },
    backend: {
      title: "Backend Architecture",
      description: "Quantum-ready distributed system",
      technologies: ["Python", "FastAPI", "TensorFlow", "Qiskit"],
      code: {
        quantum: `from qiskit import QuantumCircuit, execute, Aer
from qiskit.quantum_info import Statevector

def create_neural_quantum_circuit(num_qubits: int) -> QuantumCircuit:
    circuit = QuantumCircuit(num_qubits)
    
    # Create quantum entanglement
    for i in range(num_qubits-1):
        circuit.h(i)
        circuit.cx(i, i+1)
    
    return circuit

# Initialize quantum simulator
simulator = Aer.get_backend('statevector_simulator')

# Create and execute circuit
circuit = create_neural_quantum_circuit(5)
result = execute(circuit, simulator).result()
statevector = result.get_statevector()`,
        api: `from fastapi import FastAPI, WebSocket
from typing import List
import asyncio

app = FastAPI()

class NeuralConnection:
    def __init__(self):
        self.connections: List[WebSocket] = []
    
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.append(websocket)
    
    async def broadcast(self, data: dict):
        for connection in self.connections:
            await connection.send_json(data)

neural = NeuralConnection()

@app.websocket("/ws/neural")
async def websocket_endpoint(websocket: WebSocket):
    await neural.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            await neural.broadcast({
                "type": "neural_update",
                "data": data
            })
    except:
        neural.connections.remove(websocket)`
      }
    }
  }

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-matrix"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#00FF00] mb-4 glitch-text">
            Technology Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto cyberpunk-font">
            Advanced technology stack powering the next generation of human-AI interfaces
          </p>
        </div>

        {/* Stack Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(techStacks).map(([key, stack]) => (
            <button
              key={key}
              onClick={() => setActiveStack(key as keyof TechStacks)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeStack === key
                  ? 'bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/50'
                  : 'text-[#00FF00]/50 hover:text-[#00FF00]/80 border border-transparent'
              }`}
            >
              {stack.title}
            </button>
          ))}
        </div>

        {/* Stack Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visual Side */}
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border border-[#00FF00]/20">
              <h3 className="text-xl font-semibold text-[#00FF00] mb-4">
                {techStacks[activeStack].title}
              </h3>
              <p className="text-gray-400 mb-6">
                {techStacks[activeStack].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {techStacks[activeStack].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-black/50 p-4 rounded-lg border border-[#00FF00]/20 text-center"
                  >
                    <div className="text-[#00FF00] font-mono">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Side */}
          <div className="space-y-6">
            {Object.entries(techStacks[activeStack].code).map(([key, code], index) => (
              <div key={index}>
                <div className="text-[#00FF00]/70 text-sm mb-2">{key.toUpperCase()}</div>
                <CodeBlock code={code} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix {
          0% { transform: translateY(-100%) }
          100% { transform: translateY(100%) }
        }
        .animate-matrix {
          animation: matrix 20s linear infinite;
        }
        .glitch-text {
          text-shadow: 
            0 0 5px #00FF00,
            0 0 10px #00FF00,
            0 0 15px #00FF00;
        }
        .cyberpunk-font {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  )
} 