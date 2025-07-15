import  gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
  gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <div className='flex-center h-[100vh]' > 
      <h1 className='text-3xl text-indigo-300'>HELLO</h1>
    </div>
  )
}

export default App