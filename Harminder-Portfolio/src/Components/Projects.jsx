import React from 'react'
import projectimage from '.././assets/projectimage.png'
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  },
  {
    title: "E-Commerce Website",
    image: projectimage,
    description: "A fully functional e-commerce website with features like product listing, shopping cart and used authenticationa s well.",
    technology : ["HTML", "JavaScript", "React.JS", "MongoDB", "Node.js"]
  }
]

const Projects = () => {
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
    </div>
  )
}

export default Projects