import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, useTexture } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'

function CodeBlock({ position, text, color = "#00D4FF" }: { position: [number, number, number], text: string, color?: string }) {
  const meshRef = useRef<Mesh>(null)
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[2, 0.3, 0.1]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text3D
        position={[position[0] - 0.8, position[1], position[2] + 0.1]}
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.1}
        height={0.02}
      >
        {text}
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Text3D>
    </Float>
  )
}

function BlockchainNode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)
  
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#10B981" 
          emissive="#10B981"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function DataStream({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={2}>
      <mesh position={position}>
        <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient and point lights */}
      <ambientLight intensity={0.3} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[0, 0, 10]} intensity={0.8} color="#10B981" />

      {/* Code blocks floating around */}
      <CodeBlock position={[-3, 2, -2]} text="Rust" color="#00D4FF" />
      <CodeBlock position={[3, -1, -1]} text="Solidity" color="#10B981" />
      <CodeBlock position={[-2, -2, 1]} text="Django" color="#8B5CF6" />
      <CodeBlock position={[2, 3, 0]} text="Web3" color="#00D4FF" />
      <CodeBlock position={[0, 1, -3]} text="DeFi" color="#10B981" />
      <CodeBlock position={[-4, 0, 2]} text="AI/ML" color="#8B5CF6" />

      {/* Blockchain nodes */}
      <BlockchainNode position={[4, 2, 2]} />
      <BlockchainNode position={[-3, -1, 3]} />
      <BlockchainNode position={[1, -3, -2]} />
      
      {/* Data streams */}
      <DataStream position={[0, 0, 0]} />
      <DataStream position={[5, 0, 0]} />
      <DataStream position={[-5, 0, 0]} />

      {/* Interactive controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">Loading 3D Experience...</p>
      </div>
    </div>
  )
}

export function Hero3D() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          className="w-full h-full"
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 animate-neon-pulse">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tushar Khokhar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 animate-fade-in">
            Blockchain & Backend Engineer
          </p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Building the future of <span className="text-primary font-semibold">DeFi</span>, 
            <span className="text-accent font-semibold"> AI systems</span>, and 
            <span className="text-primary font-semibold"> high-performance infrastructure</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}