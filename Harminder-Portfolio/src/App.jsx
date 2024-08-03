
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import TechStack from './Components/TechStack'
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  // VERY IMP, name here should be scrollYProgress only same for ScaleX
  const {scrollYProgress } = useScroll() // Means the scroll of Y axis (up down) will be recorded here
  console.log(scrollYProgress )
  const scaleX = useSpring(scrollYProgress , {  // MEans showing the record on the X-axis
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <motion.div className='fixed top-0 left-0 right-0 h-1.5 bg-purple-950 origin-[0%]' style={{ scaleX }}/>

    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div> */}

        {/* <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}

        <div className="relative size-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-x-0 top-[-10%] size-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div> */}
      </div>
      <div className='container mx-auto py-8'>
    
        <Navbar />
        <Home />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App
