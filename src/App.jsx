import { useState } from 'react'
import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import PassManager from './Component/PassManager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div class="absolute top-0 z-[-2] h-[200vh] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Navbar />
    <Hero />
    <PassManager />
    </>
  )
}

export default App
