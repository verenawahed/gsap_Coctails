import  gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
  gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App