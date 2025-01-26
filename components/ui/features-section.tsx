'use client'

import { Card } from "./card"
import { useState } from "react"
import { Copy } from 'lucide-react'

// SVG Icon Components
const NeuralIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2L12 6M12 18L12 22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const DecentralizedIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="2" r="1" fill="currentColor"/>
    <circle cx="20" cy="7" r="1" fill="currentColor"/>
    <circle cx="20" cy="17" r="1" fill="currentColor"/>
    <circle cx="12" cy="22" r="1" fill="currentColor"/>
    <circle cx="4" cy="17" r="1" fill="currentColor"/>
    <circle cx="4" cy="7" r="1" fill="currentColor"/>
  </svg>
)

const BridgeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2C6.47715 2 2 6.47715 2 12" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const QuantumIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 12L18 18M12 12L6 6M12 12L18 6M12 12L6 18" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const AdaptiveIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L7 3L12 12L17 3L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 12L7 21L12 12L17 21L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const OptimizationIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 12L16 8M12 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

interface CodeBlockProps {
  code: string
  language: string
}

function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group mt-4">
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

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual')

  const features = [
    {
      title: "Neural Network Integration",
      description: "State-of-the-art neural interface utilizing quantum-enhanced synaptic connections and advanced AI models with distributed computing power. Enables real-time bidirectional communication between human consciousness and machine intelligence with unprecedented clarity and speed.",
      icon: <NeuralIcon />,
      metrics: {
        "Processing Power": "1.21 PFLOPS",
        "Neural Bandwidth": "10 TB/s",
        "Sync Rate": "1 MHz",
        "Quantum Coherence": "99.999%",
        "Pattern Recognition": "99.99%",
        "Response Time": "0.1ms"
      },
      code: {
        python: `from parallax.neural import NeuralBridge
from parallax.quantum import QuantumProcessor
from parallax.patterns import PatternRecognizer

# Initialize quantum-enhanced neural bridge
bridge = NeuralBridge(
    resolution="1pm",
    bandwidth="10TB/s",
    quantum_processor=QuantumProcessor(qubits=1000)
)

# Connect to neural interface with advanced pattern recognition
async with bridge.connect() as neural:
    # Initialize pattern recognizer with quantum enhancement
    recognizer = PatternRecognizer(
        precision="quantum",
        coherence_threshold=0.99999
    )
    
    # Process neural patterns in real-time
    patterns = await neural.process_patterns(
        mode="real-time",
        enhancement="quantum"
    )
    
    # Analyze and optimize patterns
    optimized_patterns = recognizer.analyze(patterns)
    
    # Synchronize with AI using quantum entanglement
    result = await neural.sync(
        optimized_patterns,
        sync_mode="quantum_entangled"
    )`,
        solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuantumNeuralBridge is ReentrancyGuard, Ownable {
    struct NeuralPattern {
        bytes32 patternHash;
        uint256 timestamp;
        uint256 coherence;
        uint256 quantumState;
        bool isOptimized;
    }
    
    mapping(address => NeuralPattern) public patterns;
    uint256 public constant MIN_COHERENCE = 99999; // 99.999%
    
    event PatternSynced(
        address indexed user, 
        bytes32 patternHash, 
        uint256 coherence,
        uint256 quantumState
    );
    
    function syncPattern(
        bytes32 _patternHash,
        uint256 _quantumState
    ) external nonReentrant {
        uint256 coherence = calculateCoherence(_patternHash, _quantumState);
        require(coherence >= MIN_COHERENCE, "Insufficient coherence");
        
        patterns[msg.sender] = NeuralPattern({
            patternHash: _patternHash,
            timestamp: block.timestamp,
            coherence: coherence,
            quantumState: _quantumState,
            isOptimized: true
        });
        
        emit PatternSynced(
            msg.sender, 
            _patternHash, 
            coherence,
            _quantumState
        );
    }
    
    function calculateCoherence(
        bytes32 _patternHash,
        uint256 _quantumState
    ) internal pure returns (uint256) {
        // Advanced quantum coherence calculation
        return uint256(
            keccak256(
                abi.encodePacked(
                    _patternHash,
                    _quantumState
                )
            )
        ) % 100000;
    }
}`
      }
    },
    {
      title: "Decentralized Computing",
      description: "Quantum-secured distributed processing network leveraging blockchain technology for unparalleled computational power. Features self-healing architecture, automatic load balancing, and zero-knowledge proofs for ultimate security and scalability.",
      icon: <DecentralizedIcon />,
      metrics: {
        "Node Count": "1M+",
        "Transaction Speed": "100K TPS",
        "Network Uptime": "99.999%",
        "Quantum Security": "256-qubit",
        "Load Distribution": "99.99%",
        "Fault Tolerance": "99.999%"
      },
      code: {
        rust: `use parallax_compute::node::{Node, NetworkConfig};
use parallax_compute::quantum::{QuantumSecurityProvider, Encryption};
use parallax_compute::scaling::{LoadBalancer, FaultTolerance};

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Initialize quantum security
    let quantum_security = QuantumSecurityProvider::new(
        qubits: 256,
        encryption: Encryption::PostQuantum
    );

    // Initialize compute node with advanced configuration
    let node = Node::new(NetworkConfig {
        capacity: "100TFLOPS",
        redundancy: 3,
        encryption: quantum_security,
        load_balancer: LoadBalancer::new(
            strategy: "adaptive",
            update_frequency: "1ms"
        ),
        fault_tolerance: FaultTolerance::new(
            recovery_time: "50ms",
            backup_nodes: 5
        )
    });

    // Join compute network with automatic scaling
    node.join_network(scaling: "auto").await?;
    
    // Start processing distributed tasks
    node.process_tasks(
        parallel_threads: 1000,
        priority: "adaptive"
    ).await?;
    
    Ok(())
}`,
        solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuantumComputeNode is ReentrancyGuard, Ownable {
    struct Task {
        bytes32 taskId;
        uint256 complexity;
        uint256 reward;
        bool completed;
        uint256 quantumSecurityLevel;
        address[] assignedNodes;
    }
    
    struct Node {
        uint256 capacity;
        uint256 reliability;
        uint256 successfulTasks;
        bool isActive;
    }
    
    mapping(bytes32 => Task) public tasks;
    mapping(address => Node) public nodes;
    
    event TaskSubmitted(bytes32 indexed taskId, uint256 complexity);
    event TaskCompleted(bytes32 indexed taskId, address[] nodes);
    
    modifier onlyRegisteredNode() {
        require(nodes[msg.sender].isActive, "Node not registered");
        _;
    }
    
    function submitTask(
        bytes32 _taskId, 
        uint256 _complexity,
        uint256 _quantumSecurityLevel
    ) external payable nonReentrant {
        require(msg.value >= calculateReward(_complexity), "Insufficient reward");
        require(_quantumSecurityLevel >= 256, "Insufficient security level");
        
        address[] memory assignedNodes = selectNodes(_complexity);
        
        tasks[_taskId] = Task({
            taskId: _taskId,
            complexity: _complexity,
            reward: msg.value,
            completed: false,
            quantumSecurityLevel: _quantumSecurityLevel,
            assignedNodes: assignedNodes
        });
        
        emit TaskSubmitted(_taskId, _complexity);
    }
    
    function completeTask(
        bytes32 _taskId,
        bytes calldata _proof
    ) external onlyRegisteredNode nonReentrant {
        Task storage task = tasks[_taskId];
        require(!task.completed, "Task already completed");
        require(verifyCompletion(_taskId, _proof), "Invalid proof");
        
        distributeReward(_taskId);
        task.completed = true;
        
        emit TaskCompleted(_taskId, task.assignedNodes);
    }
    
    function calculateReward(
        uint256 _complexity
    ) public pure returns (uint256) {
        return _complexity * 1e15; // Base reward calculation
    }
}`
      }
    },
    {
      title: "Cognitive Bridge Protocol",
      description: "Revolutionary quantum-enhanced neural interface enabling seamless consciousness transfer between biological and digital systems. Features real-time pattern matching, quantum error correction, and adaptive neural synchronization.",
      icon: <BridgeIcon />,
      metrics: {
        "Latency": "0.1ms",
        "Coherence": "99.99%",
        "Pattern Match": "99.999%",
        "Error Rate": "0.00001%",
        "Bandwidth": "100 TB/s",
        "Quantum States": "1M+"
      },
      code: {
        python: `from parallax.cognitive import CognitiveBridge
from parallax.quantum import QuantumStateManager
from parallax.neural import PatternSynchronizer
from parallax.error import QuantumErrorCorrection

async def initialize_cognitive_bridge():
    # Initialize quantum state manager
    qsm = QuantumStateManager(
        states=1_000_000,
        coherence_threshold=0.9999
    )
    
    # Setup error correction
    qec = QuantumErrorCorrection(
        method="surface_code",
        correction_rate="real-time"
    )
    
    # Initialize cognitive bridge with quantum enhancement
    bridge = CognitiveBridge(
        quantum_states=qsm,
        error_correction=qec,
        bandwidth="100TB/s",
        latency="0.1ms"
    )
    
    # Create pattern synchronizer
    sync = PatternSynchronizer(
        precision="quantum",
        adaptation_rate="1ns"
    )
    
    async with bridge.connect() as session:
        # Initialize quantum-neural interface
        interface = await session.create_interface(
            mode="bidirectional",
            security="quantum"
        )
        
        # Start consciousness synchronization
        while True:
            # Process quantum states
            states = await qsm.process_states()
            
            # Apply error correction
            corrected_states = qec.correct(states)
            
            # Synchronize patterns
            patterns = await sync.synchronize(corrected_states)
            
            # Update neural interface
            await interface.update(
                patterns,
                quantum_verification=True
            )`
      }
    },
    {
      title: "Quantum-Safe Architecture",
      description: "Future-proof security infrastructure protecting neural data and computational resources.",
      icon: <QuantumIcon />,
      metrics: {
        "Encryption": "512-qubit",
        "Key Exchange": "Quantum",
        "Security Level": "L5"
      },
      code: {
        python: `from parallax.neural import NeuralBridge

# Initialize neural bridge
bridge = NeuralBridge(
    resolution="1pm",
    bandwidth="10TB/s"
)

# Connect to neural interface
async with bridge.connect() as neural:
    # Process neural patterns
    patterns = await neural.process_patterns()
    
    # Synchronize with AI
    result = await neural.sync(patterns)`,
        solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NeuralBridge {
    struct NeuralPattern {
        bytes32 patternHash;
        uint256 timestamp;
        uint256 coherence;
    }
    
    mapping(address => NeuralPattern) public patterns;
    
    event PatternSynced(address indexed user, bytes32 patternHash);
    
    function syncPattern(bytes32 _patternHash) external {
        patterns[msg.sender] = NeuralPattern({
            patternHash: _patternHash,
            timestamp: block.timestamp,
            coherence: calculateCoherence(_patternHash)
        });
        
        emit PatternSynced(msg.sender, _patternHash);
    }
}`
      }
    },
    {
      title: "Quantum Processing",
      description: "Advanced quantum computing system utilizing entangled qubits for unprecedented processing capabilities. Features quantum error correction, state preservation, and real-time decoherence prevention.",
      icon: <QuantumIcon />,
      metrics: {
        "Qubits": "1000+",
        "Coherence Time": "1 hour",
        "Error Rate": "0.0001%",
        "Entanglement": "99.999%",
        "Processing Speed": "1M QPU/s",
        "State Fidelity": "99.99%"
      },
      code: {
        python: `from parallax.quantum import QuantumProcessor, Entanglement
from parallax.error import ErrorCorrection
import numpy as np

class QuantumNeuralProcessor:
    def __init__(self):
        self.qpu = QuantumProcessor(
            qubits=1000,
            error_correction=ErrorCorrection.SURFACE_CODE
        )
        self.entangler = Entanglement(
            fidelity_threshold=0.99999,
            preservation_time="1h"
        )
    
    async def initialize_quantum_state(self):
        # Create quantum superposition
        state = await self.qpu.create_superposition(
            dimension=1000,
            precision="ultra"
        )
        
        # Apply quantum error correction
        protected_state = await self.qpu.apply_error_correction(
            state,
            method="real-time"
        )
        
        return protected_state
    
    async def process_neural_data(self, data: np.ndarray):
        # Convert classical data to quantum state
        quantum_data = await self.qpu.encode_quantum_data(
            data,
            encoding="amplitude"
        )
        
        # Create entangled states
        entangled_states = await self.entangler.create_entanglement(
            quantum_data,
            pairs=500
        )
        
        # Perform quantum processing
        result = await self.qpu.process_quantum(
            entangled_states,
            optimization="quantum_annealing"
        )
        
        return result`
      }
    },
    {
      title: "Adaptive Learning",
      description: "Self-evolving neural architecture that continuously optimizes its performance through quantum-enhanced reinforcement learning and dynamic neural pathway reconstruction.",
      icon: <AdaptiveIcon />,
      metrics: {
        "Learning Rate": "1ns",
        "Adaptation Speed": "Real-time",
        "Pattern Recognition": "99.999%",
        "Neural Pathways": "1B+",
        "Optimization Rate": "100K/s",
        "Success Rate": "99.99%"
      },
      code: {
        python: `from parallax.adaptive import NeuralOptimizer
from parallax.quantum import QuantumLearning
from parallax.neural import PathwayManager

class AdaptiveNeuralSystem:
    def __init__(self):
        self.optimizer = NeuralOptimizer(
            learning_rate="1ns",
            quantum_enhanced=True
        )
        self.quantum_learning = QuantumLearning(
            qubits=1000,
            optimization="real-time"
        )
        self.pathway_manager = PathwayManager(
            initial_pathways=1_000_000_000,
            growth_rate="adaptive"
        )
    
    async def optimize_network(self):
        while True:
            # Analyze current performance
            metrics = await self.optimizer.analyze_performance()
            
            # Quantum-enhanced learning
            improvements = await self.quantum_learning.optimize(
                current_state=metrics,
                target="maximum_efficiency"
            )
            
            # Reconstruct neural pathways
            new_pathways = await self.pathway_manager.reconstruct(
                optimization_data=improvements,
                method="quantum_guided"
            )
            
            # Apply optimizations
            await self.optimizer.apply_improvements(
                new_pathways,
                validation="real-time"
            )
            
            # Verify improvements
            success_rate = await self.verify_optimization()
            
            if success_rate >= 0.9999:
                await self.commit_changes()
            else:
                await self.rollback_changes()`
      }
    },
    {
      title: "Neural Optimization",
      description: "Quantum-enhanced neural optimization system that maximizes cognitive throughput and synaptic efficiency through real-time analysis and adaptation.",
      icon: <OptimizationIcon />,
      metrics: {
        "Optimization Rate": "1M/s",
        "Efficiency Gain": "1000x",
        "Response Time": "0.1ms",
        "Accuracy": "99.999%",
        "Throughput": "100 TB/s",
        "Energy Efficiency": "99.99%"
      },
      code: {
        python: `from parallax.optimization import NeuralOptimizer
from parallax.quantum import QuantumEnhancer
from parallax.metrics import PerformanceAnalyzer

class QuantumNeuralOptimizer:
    def __init__(self):
        self.optimizer = NeuralOptimizer(
            target_efficiency=0.9999,
            quantum_enhanced=True
        )
        self.enhancer = QuantumEnhancer(
            qubits=1000,
            precision="ultra"
        )
        self.analyzer = PerformanceAnalyzer(
            metrics=["throughput", "efficiency", "accuracy"],
            update_rate="0.1ms"
        )
    
    async def optimize_neural_network(self):
        while True:
            # Analyze current performance
            metrics = await self.analyzer.gather_metrics()
            
            # Quantum enhancement
            enhanced_state = await self.enhancer.apply_quantum_optimization(
                current_state=metrics,
                target_improvement="maximum"
            )
            
            # Calculate optimal parameters
            optimal_params = await self.optimizer.calculate_parameters(
                enhanced_state,
                method="quantum_annealing"
            )
            
            # Apply optimizations
            await self.optimizer.apply_optimizations(
                optimal_params,
                verification="real-time"
            )
            
            # Monitor and adjust
            performance = await self.analyzer.monitor_performance(
                interval="0.1ms",
                metrics=["efficiency", "throughput"]
            )
            
            if performance.efficiency < 0.9999:
                await self.optimizer.adjust_parameters(
                    performance,
                    method="adaptive"
                )`
      }
    }
  ]

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] gap-[1px] opacity-20">
        {Array.from({ length: 1600 }).map((_, i) => (
          <div
            key={i}
            className="bg-[#00FF00]/10 transition-colors duration-1000"
            style={{
              animation: `pulse ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/5 to-transparent animate-scan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#00FF00] mb-4 glitch-text">
            Core Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto cyberpunk-font">
            Bridging the gap between human cognition and artificial intelligence through
            advanced neural interfaces and distributed computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <Card className="bg-black/50 border border-[#00FF00]/20 backdrop-blur-sm hover:border-[#00FF00]/50 transition-all duration-300 relative overflow-hidden">
                {/* Card Header */}
                <div className="p-6 border-b border-[#00FF00]/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#00FF00] filter hover:brightness-125 transition-all">
                      {feature.icon}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setActiveTab('visual')}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeTab === 'visual' 
                            ? 'bg-[#00FF00]/20 text-[#00FF00]' 
                            : 'text-[#00FF00]/50 hover:text-[#00FF00]/80'
                        }`}
                      >
                        Visual
                      </button>
                      <button
                        onClick={() => setActiveTab('code')}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeTab === 'code' 
                            ? 'bg-[#00FF00]/20 text-[#00FF00]' 
                            : 'text-[#00FF00]/50 hover:text-[#00FF00]/80'
                        }`}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-[#00FF00]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {activeTab === 'visual' ? (
                    <div className="space-y-4">
                      {/* Metrics Display */}
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(feature.metrics).map(([key, value], i) => (
                          <div key={i} className="bg-black/30 p-4 rounded-lg border border-[#00FF00]/20">
                            <div className="text-[#00FF00]/70 text-sm mb-1">{key}</div>
                            <div className="text-[#00FF00] font-mono text-lg">{value}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Visual Representation */}
                      <div className="h-40 bg-black/30 rounded-lg border border-[#00FF00]/20 flex items-center justify-center">
                        <div className="text-6xl animate-pulse">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {Object.entries(feature.code).map(([lang, code], i) => (
                        <div key={i}>
                          <div className="text-[#00FF00]/70 text-sm mb-2">{lang.toUpperCase()}</div>
                          <CodeBlock code={code} language={lang} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
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