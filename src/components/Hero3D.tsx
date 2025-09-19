import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Code, Lightning, Globe } from "@phosphor-icons/react"
import { toast } from "sonner"

// 3D Scene Component - Optimized for performance
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      {/* Floating geometric shapes - reduced count for performance */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[-1.5, 0.5, -2]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.7} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[1.8, -0.8, -1.5]}>
          <icosahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.6} />
        </mesh>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  )
}

export function Hero3D() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene - Wrapped in error boundary */}
      <div className="absolute inset-0 opacity-20">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          performance={{ min: 0.5 }} // Performance monitoring
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Performance-optimized floating elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-16 w-16 h-16 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Code size={24} className="text-primary" />
        </div>
        <div className="absolute top-32 right-24 w-14 h-14 bg-accent/5 border border-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Lightning size={20} className="text-accent" />
        </div>
        <div className="absolute bottom-40 left-24 w-18 h-18 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Globe size={28} className="text-primary" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-12">
          {/* Name and title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Tushar Khokhar
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/90 mb-6">
              Elite Blockchain & Backend Developer
            </div>
          </div>
          
          {/* Expertise badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20 hover:bg-primary/20 transition-colors">
              Blockchain Engineer
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20 hover:bg-accent/20 transition-colors">
              Backend Architect
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20 hover:bg-primary/20 transition-colors">
              DeFi Specialist
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20 hover:bg-accent/20 transition-colors">
              AI Systems
            </span>
          </div>

          {/* Value proposition */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-6">
            Building the future of <span className="text-primary font-semibold">decentralized finance</span>, 
            <span className="text-accent font-semibold"> AI-powered systems</span>, and 
            <span className="text-primary font-semibold"> high-performance infrastructure</span> 
            that scales globally.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            IIT Kharagpur graduate specializing in Rust, Solidity, and cutting-edge backend technologies. 
            Expert in creating secure, scalable systems for the next generation of digital innovation.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 text-base font-semibold"
            onClick={() => handleNavClick('#projects')}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 px-8 py-3 text-base font-semibold group transition-all duration-300"
            onClick={(e) => { 
              e.preventDefault(); 
              toast.info("Resume download will be available soon!", {
                description: "Currently preparing the latest version"
              }); 
            }}
          >
            <span className="flex items-center gap-2">
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </span>
          </Button>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-border/50">
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">$8M+</div>
            <div className="text-sm md:text-base text-muted-foreground">Protocol Assets Managed</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">500K+</div>
            <div className="text-sm md:text-base text-muted-foreground">Transactions Processed</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">35%</div>
            <div className="text-sm md:text-base text-muted-foreground">Gas Fee Reduction</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">40%</div>
            <div className="text-sm md:text-base text-muted-foreground">Cost Optimization</div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors">
          <div className="w-0.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}