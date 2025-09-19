import { useState, useEffect } from "react"

function SimpleApp() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-primary">Tushar Khokhar</h1>
        <p className="text-xl text-foreground/80 mt-2">Elite Blockchain & Backend Developer</p>
        <p className="text-base text-muted-foreground mt-4">Testing if the basic app works...</p>
      </div>
    </div>
  )
}

export default SimpleApp