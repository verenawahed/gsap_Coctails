import  gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktials from './components/Cocktails'
import About from './components/About'
  gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktials/>
      <About/>
    </main>
  )
}

export default App