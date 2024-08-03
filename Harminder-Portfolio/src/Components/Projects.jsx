import React, {useState} from 'react'
import projectimage from '.././assets/projectimage.png'
import { motion, AnimatePresence  } from "framer-motion"

const projects = [
  {
    id:1,
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    id:2,
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    id:3,
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    id:4,
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    id:5,
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  }
]

const Projects = () => {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
      className='my-20 text-center text-4xl' >Projects
      </motion.h2>

      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 p-5 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='w-full lg:w-1/4'>
            <img src={project.image} width="150px" height="150px" className='mb-6 rounded' alt={project.image} />
            </motion.div> 

            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1.5}}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'> 
              {
                project.technology.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                ))
              }
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    
    {/* New content here */}

    {/* <ul className='relative grid gap-4  grid-cols-[2fr_1fr_2fr] grid-rows-[repeat(2,_1fr)] list-none w-full lg:w-1/2 h-full lg:h-1/2 p-4 m-0'>
    {projects.map((item, index) => (
      <motion.div className='relative overflow-hidden bg-slate-900 cursor-pointer will-change-transform shadow-md border-r-8 transform-none origin-[50% 50% 0px]' 
      key={index} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
        <motion.h5>{item.description}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
      </motion.div>
    ))}

    <AnimatePresence>
      {selectedId && (
        <motion.div className='w-full lg:w-1/2 h-full lg:h-1/2 p-4 m-0' layoutId={selectedId}>
          <motion.h5>Harminder</motion.h5>
          <motion.h2>SD</motion.h2>
          <motion.button onClick={() => setSelectedId(null)} />
        </motion.div>
      )}
    </AnimatePresence>
    </ul> */}
 
    {/* {projects.map((item, index) => (
      <motion.div className='relative overflow-hidden bg-slate-100 cursor-pointer will-change-transform shadow-md border-r-8 transform-none origin-[50% 50% 0px]' key={index} layoutId={item.description} onClick={() => setSelectedId(item.description)}>
        <motion.h5>{item.description}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
      </motion.div>
    ))} */}



    
    </div>
  )
}

export default Projects