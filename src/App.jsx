import  gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktials from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
  gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktials/>
      <About/>
      <Art/>
    </main>
  )
}

export default App