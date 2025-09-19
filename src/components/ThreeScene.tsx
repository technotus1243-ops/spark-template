import { useEffect, useRef } from 'react'

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)

  useEffect(() => {
    let cleanup: (() => void) | null = null

    const initThreeJS = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const THREE = await import('three')
        
        if (!mountRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          75, 
          window.innerWidth / window.innerHeight, 
          0.1, 
          1000
        )
        
        const renderer = new THREE.WebGLRenderer({ 
          alpha: true, 
          antialias: true 
        })
        
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)
        
        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement)
        }

        // Create floating geometric objects
        const geometries: any[] = []
        
        const shapes = [
          { geometry: new THREE.BoxGeometry(0.8, 0.8, 0.8), color: 0x3b82f6 },
          { geometry: new THREE.OctahedronGeometry(0.6), color: 0x8b5cf6 },
          { geometry: new THREE.TetrahedronGeometry(0.7), color: 0x06b6d4 },
          { geometry: new THREE.DodecahedronGeometry(0.5), color: 0x10b981 },
          { geometry: new THREE.IcosahedronGeometry(0.6), color: 0xf59e0b },
        ]

        shapes.forEach((shape, index) => {
          const material = new THREE.MeshPhongMaterial({
            color: shape.color,
            transparent: true,
            opacity: 0.7,
            shininess: 100
          })
          
          const mesh = new THREE.Mesh(shape.geometry, material)
          
          // Position objects
          mesh.position.x = (Math.random() - 0.5) * 16
          mesh.position.y = (Math.random() - 0.5) * 16
          mesh.position.z = (Math.random() - 0.5) * 16
          
          // Random rotation
          mesh.rotation.x = Math.random() * Math.PI
          mesh.rotation.y = Math.random() * Math.PI
          
          scene.add(mesh)
          geometries.push(mesh)
        })

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
        directionalLight.position.set(10, 10, 5)
        scene.add(directionalLight)

        const pointLight1 = new THREE.PointLight(0x3b82f6, 0.3, 50)
        pointLight1.position.set(10, 10, 10)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(0x8b5cf6, 0.3, 50)
        pointLight2.position.set(-10, -10, 10)
        scene.add(pointLight2)

        camera.position.z = 12

        // Animation
        let time = 0
        let animationId: number

        const animate = () => {
          animationId = requestAnimationFrame(animate)
          
          time += 0.005
          
          geometries.forEach((mesh, index) => {
            mesh.rotation.x += 0.003 + index * 0.0005
            mesh.rotation.y += 0.005 + index * 0.0007
            mesh.position.y += Math.sin(time + index) * 0.001
            mesh.position.x += Math.cos(time + index * 0.5) * 0.0008
          })
          
          if (window.innerWidth > 768) {
            camera.position.x = Math.sin(time * 0.3) * 1.5
            camera.position.y = Math.cos(time * 0.2) * 0.8
            camera.lookAt(0, 0, 0)
          }
          
          renderer.render(scene, camera)
        }
        animate()

        const handleResize = () => {
          if (!camera || !renderer) return
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }
        
        window.addEventListener('resize', handleResize)

        cleanup = () => {
          if (animationId) {
            cancelAnimationFrame(animationId)
          }
          
          geometries.forEach(mesh => {
            if (mesh.geometry) mesh.geometry.dispose()
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((mat: any) => mat.dispose())
              } else {
                mesh.material.dispose()
              }
            }
          })
          
          if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
            mountRef.current.removeChild(renderer.domElement)
          }
          
          renderer.dispose()
          window.removeEventListener('resize', handleResize)
        }

        sceneRef.current = { cleanup }

      } catch (error) {
        console.error('Three.js initialization failed:', error)
      }
    }

    initThreeJS()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  )
}